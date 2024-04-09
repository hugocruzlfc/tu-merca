"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <SessionProvider>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider
          attribute="class"
          enableSystem={false}
        >
          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
