import {
  Navigation,
  Hero,
  Services,
  Portfolio,
  About,
  Testimonials,
  CTA,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
