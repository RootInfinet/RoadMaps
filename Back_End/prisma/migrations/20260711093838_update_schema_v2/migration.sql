-- AlterTable
ALTER TABLE "Step" ADD COLUMN     "content" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "isFinished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notes" TEXT;

-- AlterTable
ALTER TABLE "UserEnrollment" ADD COLUMN     "progress" INTEGER NOT NULL DEFAULT 0;
