/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "authorized" BOOLEAN NOT NULL DEFAULT false,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT,
    "subscriber" BOOLEAN NOT NULL DEFAULT false,
    "experience" BIGINT,
    "luck" INTEGER,
    "payment_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board" (
    "id" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "reference" INTEGER NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "boosted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "due_to" TIMESTAMP(3),
    "referenceId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todolist" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "referenceId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "todolist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unitTask" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "referenceId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "postponed" BOOLEAN NOT NULL DEFAULT false,
    "forgot" BOOLEAN NOT NULL DEFAULT false,
    "abandonned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "unitTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "board_ownerId_key" ON "board"("ownerId");

-- AddForeignKey
ALTER TABLE "board" ADD CONSTRAINT "board_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "todolist" ADD CONSTRAINT "todolist_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unitTask" ADD CONSTRAINT "unitTask_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "todolist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
