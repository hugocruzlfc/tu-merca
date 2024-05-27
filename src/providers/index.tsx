"use client";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        // enableSystem={false}
      >
        <Theme
          accentColor="orange"
          grayColor="gray"
        >
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
