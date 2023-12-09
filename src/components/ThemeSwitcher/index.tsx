"use client";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <Switch
        className="rounded-full border-slate-300 border-1 bg-slate-50"
        defaultSelected={resolvedTheme === "dark"}
        size="md"
        color="primary"
        onChange={handleOnChange}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      ></Switch>
    </div>
  );
}
