-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "turn" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
