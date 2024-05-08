import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonStyles = cva(
  "flex items-center justify-center rounded-lg border font-semibold transition duration-150 enabled:active:shadow-inner disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
  {
    variants: {
      intent: {
        primary:
          "border-blue-700 bg-blue-600 text-blue-50 enabled:hover:bg-blue-500 enabled:hover:text-white enabled:active:bg-blue-600  dark:bg-blue-300 dark:text-blue-800 dark:enabled:hover:bg-blue-400",
        secondary:
          "border-green-700 bg-green-600 text-green-50 enabled:hover:bg-green-500 enabled:hover:text-white enabled:active:bg-green-600 enabled:active:shadow-inner dark:bg-green-300 dark:text-green-800 dark:enabled:hover:bg-green-400",
        danger:
          "border-red-600 bg-red-500 text-red-50 enabled:hover:bg-red-400 enabled:hover:text-white enabled:active:bg-red-500 enabled:active:shadow-none dark:bg-red-300 dark:text-red-800 dark:enabled:hover:bg-red-400",
        neutral: "bg-gray-400 text-gray-900 enabled:hover:bg-gray-400",
        link: "bg-transparent text-green-600 shadow-none enabled:hover:bg-transparent",
        "primary-outline":
          "border-2 border-blue-500 bg-transparent text-blue-600 enabled:hover:bg-blue-50",
        "secondary-outline":
          "bg-transparent text-green-600 enabled:hover:text-green-700 enabled:hover:bg-green-600 enabled:hover:bg-opacity-10 border-2 border-green-600",
        "neutral-outline":
          "bg-transparent text-white enabled:hover:bg-gray-300 enabled:hover:bg-opacity-10",
        "inner-form":
          "bg-white text-green-600 enabled:hover:text-green-700 dark:border-gray-600 dark:bg-black dark:text-green-400 dark:enabled:hover:text-green-500",
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        small: "px-2 py-1 text-base enabled:hover:shadow-sm",
        medium: "px-3 py-1.5 text-lg enabled:hover:shadow-md",
        large: "px-4 py-2 text-xl enabled:hover:shadow-md",
        xlarge: "px-5 py-2.5 text-2xl enabled:hover:shadow-lg",
        xxlarge: "px-6 py-3 text-3xl enabled:hover:shadow-lg",
        "small-icon": "px-1 py-1 text-base enabled:hover:shadow-sm",
        "medium-icon": "px-1.5 py-1.5 text-lg enabled:hover:shadow-md",
        "large-icon": "px-2 py-2 text-xl enabled:hover:shadow-md",
        "xlarge-icon": "px-2.5 py-2.5 text-2xl enabled:hover:shadow-lg",
        "xxlarge-icon": "px-3 py-3 text-3xl enabled:hover:shadow-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      fullWidth: false,
      size: "medium",
    },
  },
);

export interface Props
  extends VariantProps<typeof buttonStyles>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  intent,
  fullWidth,
  size,
  children,
  className = "",
  ...rest
}: Props) {
  const computedClassNames = `${buttonStyles({
    intent,
    fullWidth,
    size,
  })} ${className}`.trim();
  return (
    <button className={computedClassNames} {...rest}>
      {children}
    </button>
  );
}
