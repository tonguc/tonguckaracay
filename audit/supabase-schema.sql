-- Run this in Supabase SQL Editor
-- https://app.supabase.com → SQL Editor → New Query

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── Profiles ─────────────────────────────────────────────────────────────────
create table public.profiles (
  id            uuid references auth.users on delete cascade primary key,
  email         text not null,
  full_name     text,
  plan          text default 'solo' check (plan in ('solo', 'agency')),
  agency_name   text,
  brand_color   text default '#0EA5E9',
  logo_url      text,
  created_at    timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── Audits ────────────────────────────────────────────────────────────────────
create table public.audits (
  id              uuid default uuid_generate_v4() primary key,
  user_id         uuid references public.profiles(id) on delete cascade not null,
  url             text not null,
  client_name     text,
  auditor_name    text,
  report_version  text default 'v1.0',
  industry        text,
  results         jsonb default '{}',     -- { itemId: 'Pass'|'Partial'|'Fail'|'N/A' }
  scores          jsonb default '{}',     -- { overall, weighted, categories[] }
  top_issues      jsonb default '[]',
  status          text default 'draft' check (status in ('draft', 'complete')),
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

alter table public.audits enable row level security;

create policy "Users can manage their own audits"
  on public.audits for all using (auth.uid() = user_id);

-- Auto-update updated_at
create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger audits_updated_at
  before update on public.audits
  for each row execute procedure public.update_updated_at();

-- ── Indexes ───────────────────────────────────────────────────────────────────
create index audits_user_id_idx on public.audits(user_id);
create index audits_created_at_idx on public.audits(created_at desc);
