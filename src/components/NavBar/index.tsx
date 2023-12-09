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

export const NavBar: React.FC = () => {
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
            href={RoutesPage.LOGIN}
            color="secondary"
          >
            {MENU_ITEMS[2].label}
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
        {MENU_ITEMS.map((menuItem, index) => (
          <NavbarMenuItem key={`${menuItem.label}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === MENU_ITEMS.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={menuItem.href}
              size="lg"
            >
              {menuItem.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
