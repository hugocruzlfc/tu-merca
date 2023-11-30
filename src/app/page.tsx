import { ThemeSwitcher } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className="mb-10">Bienvenido a Tu Merca tienda en línea!</h1>
      <ThemeSwitcher />
    </main>
  );
}
