import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import logoLight from "@/assets/logos/brand-light.png";
import logoDark from "@/assets/logos/brand-dark.png";

const IMAGE_ALT = "Tu Merca";
export const Brand: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={logoDark}
        alt={IMAGE_ALT}
        width={150}
        height={100}
        className="hidden dark:block"
        priority
      />
      <Image
        src={logoLight}
        className="dark:hidden"
        alt={IMAGE_ALT}
        width={150}
        height={100}
        priority
      />
    </Link>
  );
};
