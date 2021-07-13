-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users.email_unique" ON "Users"("email");
