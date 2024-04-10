import { cn } from "@/utils";
import { ChevronDown } from "lucide-react";
import React, { forwardRef } from "react";

export const Select = forwardRef<
  HTMLSelectElement,
  React.HTMLProps<HTMLSelectElement>
>(function Select({ className, ...props }, ref) {
  return (
    <div className="relative">
      <select
        className={cn(
          "h-10 w-full appearance-none truncate rounded-[14px] border border-input bg-background py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none  focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
          className
        )}
        {...props}
      />
      <ChevronDown
        className="absolute right-3 top-3 h-4 w-4 opacity-50"
        color="#FFA500"
        size={20}
      />
    </div>
  );
});
