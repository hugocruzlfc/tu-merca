import Link from "next/link";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, LinkedinIcon, XIcon } from "../Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t my-10">
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
      <div className="flex flex-col sm:flex-row items-center justify-between px-5 rounded-full border py-2 mt-10">
        <div className="flex flex-row gap-2 sm:mr-48">
          <div className="rounded-full bg-orange-400 p-1">
            <Link
              href={"https://facebook.com/tu_merca"}
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </Link>
          </div>
          <div className="rounded-full bg-orange-400 p-1">
            <Link
              href={"https://twitter.com/tu_merca"}
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
            </Link>
          </div>
          <div className="rounded-full bg-orange-400 p-1">
            <Link
              href={"https://www.linkedin.com/in/tu_merca"}
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </Link>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TuMerca. Todos los derechos reservados.
        </div>
        <div>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground"
          >
            Política de Privacidad
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground"
          >
            Términos de Servicio
          </Link>
        </div>
      </div>
    </footer>
  );
};
