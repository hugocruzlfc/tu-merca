import { NavBarMenuItem, RoutesPage } from "@/types";

export const MENU_ITEMS: NavBarMenuItem[] = [
  { label: "Inicio", href: RoutesPage.HOME },
  { label: "Ayuda & Preguntas", href: RoutesPage.HOME },
  { label: "Hola, Identifíquese", href: RoutesPage.LOGIN },
  { label: "Checkout", href: RoutesPage.CHECKOUT },
  { label: "Perfil", href: RoutesPage.PROFILE },
  { label: "Cerrar Sesión", href: "/" },
];
