"use client";

import { useEffect, useState } from "react";

const quotes = [
  {
    quote: `A man who is master of patience is master of everything else.`,
    author: "George Savile",
  },
  {
    quote: `You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions.`,
    author: "Bhagavad Gita",
  },
  {
    quote: `Man is made by his belief. As he believes, so he is.`,
    author: "Bhagavad Gita",
  },
  {
    quote: `Arise, awake, and stop not till the goal is reached.`,
    author: "Katha Upanishad",
  },
  {
    quote: `If the pain doesn't kill me, it will only make me stronger.`,
    author: "Sung Jin-Woo, Solo Leveling",
  },
  {
    quote: `I'll take a potato chip… AND EAT IT!`,
    author: "Light Yagami, Death Note",
  },
];

export const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState<{
    quote: string;
    author: string;
  } | null>(null);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  if (!currentQuote) return null;

  const { quote, author } = currentQuote;

  return (
    <div className="px-4 py-16 md:px-6">
      <div className="border-border relative rounded-xl border px-4 py-10">
        <svg
          aria-hidden="true"
          width="105"
          height="78"
          className="fill-muted absolute top-6 left-6"
        >
          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
        </svg>
        <p className="text-secondary relative z-10 font-mono text-pretty italic">
          &quot;{quote}&quot;
        </p>
        <p className="text-foreground text-right font-mono text-pretty italic">
          — {author}
        </p>
      </div>
    </div>
  );
};

export default Quote;
