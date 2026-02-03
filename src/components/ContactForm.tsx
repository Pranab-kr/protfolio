"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

type UserData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex w-full max-w-lg flex-col justify-center gap-3 px-2 py-8 sm:gap-4 sm:px-4 sm:py-16 md:px-0"
    >
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <label
          htmlFor="name"
          className="text-muted-foreground text-xs font-medium tracking-tight sm:text-sm"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="focus:ring-primary/10 shadow-minimal rounded-md border border-black/10 bg-transparent px-3 py-2 text-sm focus:ring-1 focus:outline-none sm:px-4 sm:text-base dark:border-white/10 dark:shadow-white/10"
          value={formData.name}
          id="name"
          disabled={isLoading}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <label
          htmlFor="email"
          className="text-muted-foreground text-xs font-medium tracking-tight sm:text-sm"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="focus:ring-primary/10 shadow-minimal rounded-md border border-black/10 bg-transparent px-3 py-2 text-sm focus:ring-1 focus:outline-none sm:px-4 sm:text-base dark:border-white/10 dark:shadow-white/10"
          value={formData.email}
          id="email"
          disabled={isLoading}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <label
          htmlFor="message"
          className="text-muted-foreground text-xs font-medium tracking-tight sm:text-sm"
        >
          Message
        </label>
        <textarea
          placeholder="Your Message"
          className="focus:ring-primary/10 shadow-minimal border-input min-h-[100px] resize-none rounded-md border bg-transparent px-3 py-2 text-sm focus:ring-1 focus:outline-none sm:min-h-[120px] sm:px-4 sm:text-base dark:border-white/10 dark:shadow-white/10"
          value={formData.message}
          id="message"
          disabled={isLoading}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <Button
          type="submit"
          variant="default"
          className="mt-3 w-full text-sm sm:mt-4 sm:text-base"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};
