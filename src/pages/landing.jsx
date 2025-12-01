import Caracteristicas from "../components/Caracteristicas";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/page/Hero";
import Producto from "../components/page/Product";
import PlanesDePrecios from "../components/PlanesdePrecio";
import TestimoniosMarquee from "../components/TestimoniosMarquee";

export function Landing() {
  return (
    <>
      <Hero />
      <Producto />
      <Caracteristicas />
      <TestimoniosMarquee />
      <PlanesDePrecios />
      <FAQ />
      <Footer />
    </>
  );
}