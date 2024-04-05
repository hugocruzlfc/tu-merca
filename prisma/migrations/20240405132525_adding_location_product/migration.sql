/*
  Warnings:

  - Added the required column `location` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "location" TEXT NOT NULL;
