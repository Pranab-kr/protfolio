"use client";
import { useState } from "react";
import { toast } from "sonner";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    //api call
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Message sent successfully!");
        } else {
          reject("Failed to send message.");
        }
      }, 1000);
    });

    if (response) {
      toast.success("Message sent successfully!");
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex w-full max-w-lg flex-col justify-center gap-4 px-4 py-16 md:px-0"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-muted-foreground text-sm font-medium tracking-tight"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="focus:ring-primary/10 shadow-minimal rounded-md border border-black/10 bg-transparent px-4 py-2 focus:ring-1 focus:outline-none dark:border-white/10 dark:shadow-white/10"
          value={formData.name}
          id="name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-muted-foreground text-sm font-medium tracking-tight"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="focus:ring-primary/10 shadow-minimal rounded-md border border-black/10 bg-transparent px-4 py-2 focus:ring-1 focus:outline-none dark:border-white/10 dark:shadow-white/10"
          value={formData.email}
          id="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-muted-foreground text-sm font-medium tracking-tight"
        >
          Message
        </label>
        <textarea
          placeholder="Your Message"
          className="focus:ring-primary/10 shadow-minimal border-input resize-none rounded-md border bg-transparent px-4 py-2 focus:ring-1 focus:outline-none dark:border-white/10 dark:shadow-white/10"
          value={formData.message}
          id="message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground mt-4 rounded-md px-4 py-2"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
