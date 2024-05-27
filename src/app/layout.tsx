import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/providers";
import { Footer, NavBar } from "@/components";

import "@radix-ui/themes/styles.css";
import "../styles/globals.css";
import "../styles/current.theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Tu Merca",
    default: "Tu Merca",
  },
  description:
    "Explora. Elige. Disfruta. Tu Merca, tu destino de compras en línea.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px]`}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
