import { Brand, ThemeSwitcher } from "@/components";

export default function Home() {
  return (
    <main className="flex  flex-col items-center p-24">
      <div className="flex flex-row items-center gap-4 mb-10">
        <p>Bienvenido a:</p>
        <Brand />
        <p>tienda en línea!</p>
      </div>

      <ThemeSwitcher />
    </main>
  );
}
