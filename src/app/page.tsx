import { Container } from "@/components/container";

const page = () => {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="h-[200vh] min-h-screen p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary mt-4 text-2xl font-bold tracking-tight md:text-4xl">
          Hello, there!
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I'm a Software engineer with a passion for building web applications.
          and I love working with the latest technologies.
        </p>
      </Container>
    </div>
  );
};

export default page;
