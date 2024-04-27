-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "pages" INTEGER NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- Alter Table
ALTER TABLE "Books" ADD COLUMN "createdAt" "imageUrl" TEXT;