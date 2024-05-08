import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import AINavMenuTrigger from "./design/AINavMenuTrigger";

export default function NavMenu() {
  return (
    <NavigationMenu.Root className="relative z-[1] mx-auto">
      <NavigationMenu.List className="flex gap-6">
        <NavigationMenu.Item>
          <AINavMenuTrigger>Services</AINavMenuTrigger>
          <NavigationMenu.Content className="">
            Services Content
            <NavigationMenu.Link />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <AINavMenuTrigger>Company</AINavMenuTrigger>
          <NavigationMenu.Content>
            Company Content
            <NavigationMenu.Link />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <AINavMenuTrigger>Blog</AINavMenuTrigger>
          <NavigationMenu.Content>
            Blog Content
            <NavigationMenu.Link />
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <div className="absolute left-0 top-full flex w-full">
        <NavigationMenu.Viewport className="relative mt-4 w-full origin-[top_center] overflow-hidden rounded-md bg-white shadow-md transition-[width,_height] duration-300" />
      </div>
    </NavigationMenu.Root>
  );
}
