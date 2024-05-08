import {
  NavigationMenuTrigger,
  NavigationMenuTriggerProps,
} from "@radix-ui/react-navigation-menu";

export interface AINavMenuTriggerProps extends NavigationMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export default function AINavMenuTrigger({
  children,
  className = "",
  ...rest
}: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuTrigger
      className={`border-b-2 border-transparent hover:border-b-blue-950 transition-colors ease-in ${className}`}
      {...rest}
    >
      {children}
    </NavigationMenuTrigger>
  );
}
