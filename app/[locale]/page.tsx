import { setRequestLocale } from 'next-intl/server';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";

type Props = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <BlogPreview locale={locale} />
      <FinalCTA />
    </>
  );
}
