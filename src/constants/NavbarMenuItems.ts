import { NavBarMenuItem, RoutesPage } from "@/types";

export const MENU_ITEMS: NavBarMenuItem[] = [
  { label: "Inicio", href: RoutesPage.HOME, public: true },
  { label: "Ayuda & Preguntas", href: RoutesPage.FAQ, public: true },
  { label: "Hola, Identifíquese", href: RoutesPage.LOGIN, public: true },
  { label: "Pasar por caja", href: RoutesPage.CHECKOUT, public: false },
  { label: "Perfil", href: RoutesPage.PROFILE, public: false },
  { label: "Cerrar sesión", href: RoutesPage.HOME, public: false },
];
