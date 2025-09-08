"use client";
import React from "react";

const About = () => {
  return (
    <div id="About" className="py-8">
      <h2 className="text-primary text-xl font-bold tracking-tight md:text-2xl">
        About
      </h2>
      <p className="text-secondary max-w-3xl pt-4 text-sm md:text-base">
        I like exploring computer science concepts, especially their theoretical
        aspects. I'm currently learning Web 2.0 stuff.
      </p>

      <h2 className="text-primary pt-8 text-xl font-bold tracking-tight md:text-2xl">
        Education
      </h2>

      <div className="flex items-start gap-4 pt-4">
        <img
          src="https://www.nileshkrpahari.xyz/hit.png"
          alt="Haldia Institute of Technology Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-primary text-base font-semibold">
                Haldia Institute of Technology
              </h3>
              <p className="text-secondary text-sm">
                Bachelor of Technology in Computer science and engineering
              </p>
            </div>
            <span className="text-secondary text-sm">2024 - 2028</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
