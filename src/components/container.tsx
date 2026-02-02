import React from "react";
import { cn } from "@/lib/utils";

import SideScale from "@/components/SideScale";
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
        `mx-auto w-full max-w-4xl ${nav === "isNav" ? "bg-transparent" : "bg-card"} relative`,
        className
      )}
    >
      {nav !== "isNav" && <SideScale />}

      {children}
    </div>
  );
};
