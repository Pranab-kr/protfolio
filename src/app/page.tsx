import { Container } from "@/components/container";
import Projects from "@/components/projects/Projects";
import About from "@/components/About";
import Knowledge from "@/components/Knowledge";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Hero />
        <About />
        <Projects />
        <Knowledge />
        <Footer />
      </Container>
    </div>
  );
};

export default page;
