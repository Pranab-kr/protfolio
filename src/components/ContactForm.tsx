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
      className="m-auto flex w-full max-w-lg flex-col justify-center gap-4 py-16"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="focus:ring-primary shadow-minimal rounded-md bg-transparent px-4 py-2 focus:ring-2 focus:outline-none"
          value={formData.name}
          id="name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="focus:ring-primary shadow-minimal rounded-md bg-transparent px-4 py-2 focus:ring-2 focus:outline-none"
          value={formData.email}
          id="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Message
        </label>
        <textarea
          placeholder="Your Message"
          className="focus:ring-primary shadow-minimal resize-none rounded-md border border-neutral-300 bg-transparent px-4 py-2 focus:ring-2 focus:outline-none"
          value={formData.message}
          id="message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <button
          type="submit"
          className="bg-primary mt-4 rounded-md px-4 py-2 text-white"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
