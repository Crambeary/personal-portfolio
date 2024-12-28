'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@components/ui/drawer';
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-secondary/75 bg-gradient-to-b from-gray-50 dark:from-black from-10% backdrop-blur-sm">
      <div className="container mx-auto flex h-16 w-full items-center">
        <div className="mr-4 ml-2 md:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="grid gap-4 py-4">
                {navItems.map((navItem) => (
                  <Link
                    key={navItem.href}
                    href={navItem.href}
                    passHref
                    legacyBehavior
                  >
                    <Button
                      variant="secondary"
                      className={clsx(
                        'mx-2 justify-center',
                        pathname === navItem.href && 'underline',
                      )}
                    >
                      {navItem.title}
                    </Button>
                  </Link>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="mr-4 text-xl font-bold">Marc&apos;s Portfolio</div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((navItem) => (
              <NavigationMenuItem key={navItem.href}>
                <Link href={navItem.href} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={clsx(
                      navigationMenuTriggerStyle(),
                      pathname === navItem.href && 'underline',
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto mr-2 flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
