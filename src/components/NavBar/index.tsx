"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import {
  IoCartOutline,
  IoSearchOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { Brand } from "../Brand";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Search } from "../Search";
import { RoutesPage } from "@/types";
import { MENU_ITEMS } from "@/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LogoutIcon } from "../Icons";
import { useSession, signOut } from "next-auth/react";

export const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Brand />
      </NavbarBrand>

      <NavbarContent
        justify="start"
        className="hidden sm:flex"
      >
        <NavbarItem className="w-full">
          <Search />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="gap-4"
      >
        <NavbarItem className="hidden sm:flex">
          <Link
            href={session ? RoutesPage.PROFILE : RoutesPage.LOGIN}
            color="secondary"
          >
            {session ? <p>Bienvenido!</p> : MENU_ITEMS[2].label}
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            href={RoutesPage.PROFILE}
            color="secondary"
          >
            <IoPersonCircleOutline size={35} />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            href={RoutesPage.CHECKOUT}
            color="secondary"
          >
            <IoCartOutline size={35} />
          </Link>
        </NavbarItem>
        {session && (
          <NavbarItem className="hidden sm:flex">
            <Link
              href={RoutesPage.HOME}
              color="secondary"
              onClick={() => signOut()}
            >
              <LogoutIcon className="text-preferredColor" />
            </Link>
          </NavbarItem>
        )}
        <NavbarItem className="sm:hidden">
          <Link
            href="#"
            color="secondary"
          >
            <IoSearchOutline
              size={35}
              className="text-preferredColor"
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MENU_ITEMS.map((menuItem, index) => {
          return menuItem.public || session ? (
            <NavbarMenuItem key={`${menuItem.label}-${index}`}>
              <Link
                color="secondary"
                className={clsx("w-full", {
                  "text-blue-600": pathname === menuItem.href,
                })}
                href={menuItem.href as string}
                size="sm"
              >
                {menuItem.label}
              </Link>
            </NavbarMenuItem>
          ) : null;
        })}
      </NavbarMenu>
    </Navbar>
  );
};
