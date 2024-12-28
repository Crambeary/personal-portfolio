'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ThemeToggle } from "@/components/theme-toggle";


export default function HeaderNav() {
    const pathname = usePathname();
    return (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <NavigationMenu className="">
              <Link href="/" passHref legacyBehavior>
                <NavigationMenuLink
                  className={clsx(
                    navigationMenuTriggerStyle(),
                    pathname === '/' && 'underline',
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <NavigationMenuLink
                  className={clsx(
                    navigationMenuTriggerStyle(),
                    pathname === '/about' && 'underline',
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeToggle />
              </div>
            </NavigationMenu>
          </div>
        </div>
      </div>
    );
}