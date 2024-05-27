"use client";
import { useTheme } from "next-themes";
import { Flex, IconButton } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleOnChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Flex>
      <IconButton
        size="1"
        color="orange"
        onClick={handleOnChange}
      >
        {theme === "light" ? (
          <SunIcon
            width="26px"
            height="26px"
            color="orange"
          />
        ) : (
          <MoonIcon
            width="26px"
            height="26px"
          />
        )}
      </IconButton>
    </Flex>
  );
}
