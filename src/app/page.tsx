import { Container } from "@/components/container";
import Projects from "@/components/projects/Projects";
import About from "@/components/About";
import Knowledge from "@/components/Knowledge";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const page = () => {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="relative min-h-screen p-8 md:pt-20 md:pb-10">
        <div className="absolute top-0 right-0 row-start-1 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="absolute top-0 left-0 row-start-1 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
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
