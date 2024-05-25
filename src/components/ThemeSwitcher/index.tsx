import { useTheme } from "next-themes";
import { Flex, IconButton } from "@radix-ui/themes";
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

  return (
    <Flex>
      <IconButton
        variant="ghost"
        size="1"
        color="orange"
        onClick={handleOnChange}
      >
        {resolvedTheme === "dark" ? (
          <Moon color="#FFA500" />
        ) : (
          <SunMedium
            color="#FFA500"
            size={26}
          />
        )}
      </IconButton>
    </Flex>
  );
}
