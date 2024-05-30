/*
  Warnings:

  - You are about to drop the column `emial` on the `User` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CategoryTypes" AS ENUM ('template', 'uikit', 'icon');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emial",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "smallDescription" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "images" TEXT[],
    "productFile" TEXT NOT NULL,
    "category" "CategoryTypes" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
