const { placeholderProducts } = require("./data/products.data");
const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  try {
    const password = await hash("admin", 12);
    const user = await prisma.user.upsert({
      where: { email: "admin@admin.com" },
      update: {},
      create: {
        email: "admin@admin.com",
        username: "Admin",
        password,
      },
    });

    const productOperations = placeholderProducts.map(async (product) => {
      await prisma.product.upsert({
        where: {
          slug: product.slug,
          ownerId: user.id,
        },
        update: product,
        create: {
          ...product,
          owner: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    });

    await Promise.all(productOperations);
    console.log("Seeded data");
  } catch (error) {
    console.error("Error while seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Error in main function:", error);
  process.exit(1);
});
