import { prisma } from "@/lib";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

const getProduct = cache(async (slug: string) => {
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) notFound();

  return product;
});

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    where: { approved: true },
    select: { slug: true },
  });

  return products.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const product = await getProduct(slug);

  return {
    title: product.name,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const product = await getProduct(slug);
  const { name, description } = product;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
