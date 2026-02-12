import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium hover:cursor-pointer transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        solid: "bg-foreground text-background hover:opacity-90",
        glow: "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/30",
      },

      size: {
        xs: "h-7 px-2 text-xs rounded-md",
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-9 px-4 text-sm rounded-md",
        lg: "h-10 px-6 text-base rounded-lg",
        xl: "h-12 px-8 text-lg rounded-xl",
        icon: "h-9 w-9",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-10 w-10",
      },

      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

function Button({
  className,
  variant,
  size,
  radius,
  fullWidth,
  asChild = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, radius, fullWidth }),
        className,
      )}
      {...props}
    >
      {leftIcon && (
        <span className="flex items-center justify-center [&_svg]:size-4">
          {leftIcon}
        </span>
      )}

      {children && <span>{children}</span>}

      {rightIcon && (
        <span className="flex items-center justify-center [&_svg]:size-4">
          {rightIcon}
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
