import Link from "next/link";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      {" "}
      <div className="flex flex-wrap gap-5 text-sm text-muted-foreground border-b flex-row justify-center py-10">
        <div className="flex flex-wrap items-center gap-1">
          <span>
            <Mail
              size={16}
              color="#FFA500"
            />
          </span>
          tumerca@gmail.com
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <span>
            <Phone
              size={16}
              color="#FFA500"
            />
          </span>
          +53 55046563
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <span>
            <MapPin
              size={16}
              color="#FFA500"
            />
          </span>
          Holguín, Cuba
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} TuMerca. Todos los derechos reservados. d
      </div>
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          {/* <div className="space-y-2">
            <h3 className="text-xl font-semibold">Flow Jobs</h3>
            <p className="text-sm text-muted-foreground">
              Connecting talents with opportunities
            </p>
          </div>
          <div ">
            <Link
              href="/about"
              className="hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:underline"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
