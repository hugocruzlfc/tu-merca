"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        // enableSystem={false}
      >
        <Theme>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          {children}
        </Theme>
      </ThemeProvider>
    </SessionProvider>
  );
}
