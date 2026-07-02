import {
  About,
  Contact,
  Footer,
  Hero,
  Navigation,
  Portfolio,
  Services,
  Testimonials,
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
