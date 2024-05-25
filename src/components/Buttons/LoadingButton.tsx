import { Button } from "@/components";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

export default function LoadingButton({
  children,
  loading,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      {...props}
      className="w-full bg-primary text-white rounded-[14px] py-2"
      disabled={props.disabled || loading}
    >
      <span className="flex items-center justify-center gap-1">
        {loading && (
          <Loader2
            size={16}
            className="animate-spin"
          />
        )}
        {children}
      </span>
    </Button>
  );
}
