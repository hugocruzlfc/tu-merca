import { ProductsResult } from "@/components";

export default async function Home() {
  return (
    <>
      <main className="flex  flex-col items-center p-24">
        <div className="flex flex-row items-center gap-4 mb-10">
          <ProductsResult />
        </div>
      </main>
    </>
  );
}
