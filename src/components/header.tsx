'use client';

import Link from 'next/link';
import { Menu, SewingPin, Shirt, Shield, Stethoscope, ConciergeBell, Notebook, Ruler, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = [
  { href: '/bespoke-suits', label: 'Bespoke Suits', icon: <Shirt className="h-5 w-5" /> },
  {
    label: 'Uniforms',
    icon: <Shield className="h-5 w-5" />,
    subLinks: [
      { href: '/uniforms/security', label: 'Security', description: 'Professional security attire.', icon: <Shield className="h-5 w-5" /> },
      { href: '/uniforms/hospitality', label: 'Hospitality', description: 'Elegant staff uniforms.', icon: <ConciergeBell className="h-5 w-5" /> },
      { href: '/uniforms/medical', label: 'Medical', description: 'Hygienic medical wear.', icon: <Stethoscope className="h-5 w-5" /> },
    ],
  },
  { href: '/stationery', label: 'Stationery', icon: <Notebook className="h-5 w-5" /> },
  { href: '/measurement-guide', label: 'Measurement Guide', icon: <Ruler className="h-5 w-5" /> },
  { href: '/order-tracking', label: 'Track Order', icon: <Package className="h-5 w-5" /> },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <SewingPin className="h-7 w-7 text-primary" />
          <span className="text-xl font-headline font-bold text-foreground">StitchPerfect</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) =>
              link.subLinks ? (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger className="font-bold bg-transparent text-base">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {link.subLinks.map((subLink) => (
                           <ListItem key={subLink.label} href={subLink.href} title={subLink.label}>
                             {subLink.description}
                           </ListItem>
                        ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href!} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-bold bg-transparent text-base")}>
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <SewingPin className="h-7 w-7 text-primary" />
                  <span className="text-xl font-headline font-bold text-foreground">StitchPerfect</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) =>
                    link.subLinks ? (
                      <div key={link.label} className="flex flex-col gap-2">
                        <span className="font-bold text-lg flex items-center gap-2">{link.icon}{link.label}</span>
                        {link.subLinks.map((subLink) => (
                          <SheetClose asChild key={subLink.href}>
                            <Link href={subLink.href} className="pl-8 text-muted-foreground hover:text-foreground text-lg" prefetch={false}>
                              {subLink.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ) : (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href!} className="font-bold text-lg flex items-center gap-2" prefetch={false}>
                           {link.icon} {link.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none font-headline">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-body">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
