import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="border-border border-t px-2 pt-6 pb-8 sm:px-4 sm:pt-8 sm:pb-10 md:px-6">
      <h2 className="text-primary text-lg font-bold tracking-tight sm:text-xl md:text-2xl">
        Education
      </h2>

      <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-start sm:gap-4 sm:pt-4">
        <Image
          src="/hit.png"
          alt="Haldia Institute of Technology Logo"
          width={60}
          height={60}
          className="aspect-square h-12 w-12 rounded-full object-cover sm:h-[60px] sm:w-[60px]"
        />
        <div className="flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-0">
            <div>
              <h3 className="text-primary text-sm font-semibold sm:text-base">
                Haldia Institute of Technology
              </h3>
              <p className="text-secondary text-xs sm:text-sm">
                Bachelor of Technology in Computer science and engineering
              </p>
            </div>
            <span className="text-secondary mt-1 text-xs sm:mt-0 sm:text-sm">
              2024 - 2028
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
