import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] hover:bg-primary/90 active:shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.3)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] hover:bg-destructive/90 active:shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.3)]",
        outline:
          "border border-input bg-background shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.08)] hover:bg-accent hover:text-accent-foreground active:shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.12)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.15)] hover:bg-secondary/80 active:shadow-[inset_0_3px_6px_0_rgba(0,0,0,0.2)]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.05)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
