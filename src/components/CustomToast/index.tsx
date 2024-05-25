"use client";

import { ShieldBan, ShieldCheck } from "lucide-react";
import React from "react";
import { toast } from "react-hot-toast";
import { ToastType } from "@/types";
import { cn } from "@/utils";

export interface CustomToastProps {
  visible: boolean;
  type: ToastType;
  message: string;
}

export interface ShowToastProps extends Omit<CustomToastProps, "visible"> {}

export const CustomToast: React.FC<CustomToastProps> = ({
  visible,
  type,
  message,
}) => {
  return (
    <div
      className={cn(
        "max-w-xs w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5",
        visible ? "animate-enter" : "animate-leave"
      )}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 pt-0.5">
            {type === "error" ? (
              <ShieldBan
                strokeWidth={1.5}
                color="red"
              />
            ) : (
              <ShieldCheck
                strokeWidth={1.5}
                color="#16964E"
              />
            )}
          </div>
          <p className="text-sm dark:text-zinc-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

export const showToast = ({ type, message }: ShowToastProps) => {
  toast.custom((t) => (
    <CustomToast
      visible={t.visible}
      type={type}
      message={message}
    />
  ));
};
