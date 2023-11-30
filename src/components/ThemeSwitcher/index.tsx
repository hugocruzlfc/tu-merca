"use client";

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-4 items-center">
      <Button
        size="sm"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </Button>
      <Button
        size="sm"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </Button>
    </div>
  );
}
