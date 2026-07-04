/*
  Warnings:

  - Made the column `roadmapId` on table `UserProgress` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_roadmapId_fkey";

-- AlterTable
ALTER TABLE "UserProgress" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'in-progress',
ALTER COLUMN "roadmapId" SET NOT NULL;
