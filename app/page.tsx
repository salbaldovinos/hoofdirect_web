import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { EarlyAccess } from '@/components/EarlyAccess';
import { FAQSection } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <Comparison />
        <EarlyAccess />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
