import { setRequestLocale } from 'next-intl/server';
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  return (
    <>
      <Hero />
      <Services />
      <About />
      {locale === 'tr' && <BlogPreview />}
      <FinalCTA />
    </>
  );
}
