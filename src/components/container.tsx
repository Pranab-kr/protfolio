import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
  nav,
}: {
  children: React.ReactNode;
  className?: string;
  nav?: string;
}) => {
  return (
    <div
      className={cn(
        `mx-auto w-full max-w-4xl ${nav === "isNav" ? "bg-transparent" : "bg-white"} dark:bg-black`,
        className
      )}
    >
      {children}
    </div>
  );
};
