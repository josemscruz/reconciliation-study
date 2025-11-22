import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "./index.css";
import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

export default function NavBar() {
  const homePath = "/";
  const accountListPath = "/accountList";
  const state = useRouterState();
  const pathName = state.location.pathname;

  return (
    <div className="dark w-full bg-background/80 border-b border-border py-5">
      <NavigationMenu className="max-w-xl mx-auto px-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${pathName == homePath ? "text-foreground" : "text-background"} text-xl ml-3`}
              asChild
            >
              <Link to={homePath}>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${pathName == accountListPath ? "text-foreground" : "text-background"} text-xl ml-3`}
              asChild
            >
              <Link to={accountListPath}>Accounts</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
