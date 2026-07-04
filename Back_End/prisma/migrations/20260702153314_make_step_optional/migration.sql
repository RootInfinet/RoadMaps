-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_stepId_fkey";

-- AlterTable
ALTER TABLE "UserProgress" ALTER COLUMN "stepId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE SET NULL ON UPDATE CASCADE;
