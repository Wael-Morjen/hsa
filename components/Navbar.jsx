"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const links = [
  {
    title: "Featured Universities",
    href: "/",
  },
  {
    title: "England",
    href: "/",
  },
  {
    title: "Spain",
    href: "/",
  },
  {
    title: "Turkey",
    href: "/",
  },
  {
    title: "America",
    href: "/",
  },
  {
    title: "Poland",
    href: "/",
  },
  {
    title: "Germany",
    href: "/",
  },
]

const destLinks = [
  {
    title: "Featured Schools",
    href: "/",
  },
  {
    title: "England",
    href: "/",
  },
  {
    title: "Spain",
    href: "/",
  },
  {
    title: "Germany",
    href: "/",
  },
]

const Navbar = () => {
  return (
    <>
      <nav className="text-white flex items-center justify-center bg-[#002E5E] h-[50px] w-full shadow-zinc-700">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Acceuil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link href="/destinations">
                  Destinations
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] grid-cols-2 gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[213px] ">
                  {links.map((link) => (
                    <li key={link.href}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link
                        href={link.href}
                        className="group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-normal leading-none">{link.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Language studies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] grid-cols-2 gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[213px] ">
                      {destLinks.map((link) => (
                        <li key={link.href}>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                          <Link
                            href={link.href}
                            className="group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-normal leading-none">{link.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  )
}

export default Navbar