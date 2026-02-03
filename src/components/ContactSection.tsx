import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4 pt-20 sm:gap-4 sm:pt-32">
      <Link href="/contact">
        {/* <Button className="rounded-lg px-4 py-1">Contact</Button> */}
      </Link>
      <h1 className="text-primary text-center text-3xl font-bold sm:text-5xl">
        Get in Touch
      </h1>
      <p className="text-secondary max-w-lg text-center text-sm sm:text-lg">
        Want to chat? Just shoot me a dm with a direct question on X and
        I&apos;ll respond whenever I can.
      </p>
    </div>
  );
};

export default ContactSection;
