-- DropForeignKey
ALTER TABLE "todolist" DROP CONSTRAINT "todolist_referenceId_fkey";

-- AlterTable
ALTER TABLE "unitTask" ADD COLUMN     "forbidden" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "todolist" ADD CONSTRAINT "todolist_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
