import { Container } from "@/components/container";
import Projects from "@/components/projects/Projects";
import About from "@/components/About";
import Knowledge from "@/components/Knowledge";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SideScale from "@/components/SideScale";

const page = () => {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <SideScale />
        <Hero />
        <About />
        <Projects />
        <Knowledge />
        <ContactSection />
        <Footer />
      </Container>
    </div>
  );
};

export default page;
