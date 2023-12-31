import { NavBarMenuItem, RoutesPage } from "@/types";

export const MENU_ITEMS: NavBarMenuItem[] = [
  { label: "Inicio", href: RoutesPage.HOME },
  { label: "Ayuda & Preguntas", href: RoutesPage.FAQ },
  { label: "Hola, Identifíquese", href: RoutesPage.LOGIN },
  { label: "Pasar por caja", href: RoutesPage.CHECKOUT },
  { label: "Perfil", href: RoutesPage.PROFILE },
  { label: "Cerrar sesión", href: RoutesPage.LOGIN },
];
