"use client";
import { useTheme } from "next-themes";
import { Flex, Button } from "@radix-ui/themes";
import { Moon, SunMedium } from "lucide-react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleOnChange = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  <Moon
    size={28}
    color="#e5972a"
  />;

  return (
    <Flex>
      <Button
        size="1"
        color="orange"
        className="border-none bg-transparent cursor-pointer"
        onClick={handleOnChange}
      >
        {resolvedTheme === "dark" ? (
          <Moon color="#FFA500" />
        ) : (
          // <SunIcon className="w-6 h-6" />
          //
          <SunMedium
            color="#FFA500"
            size={26}
          />
        )}
      </Button>
    </Flex>
  );
}
