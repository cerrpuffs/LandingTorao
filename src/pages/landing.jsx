import Caracteristicas from "../components/Caracteristicas";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/page/Hero";
import Producto from "../components/page/Product";
import PlanesDePrecios from "../components/PlanesdePrecio";
import TestimoniosMarquee from "../components/TestimoniosMarquee";
import AnimatedSection from "../components/AnimatedSection";

export function Landing() {
  return (
    <>
      <Hero />
      <AnimatedSection delay={0}>
        <Producto />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Caracteristicas />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <TestimoniosMarquee />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <PlanesDePrecios />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FAQ />
      </AnimatedSection>
      <Footer />
    </>
  );
}