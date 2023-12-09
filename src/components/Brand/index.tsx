import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const IMAGE_ALT = "Tu Merca";
export const Brand: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/logos/brand-dark.png"
        alt={IMAGE_ALT}
        width={150}
        height={100}
        className="hidden dark:block"
        priority
      />
      <Image
        src="/logos/brand-light.png"
        className="dark:hidden"
        alt={IMAGE_ALT}
        width={150}
        height={100}
        priority
      />
    </Link>
  );
};
