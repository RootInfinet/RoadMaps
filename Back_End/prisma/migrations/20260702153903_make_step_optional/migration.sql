-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_roadmapId_fkey";

-- AlterTable
ALTER TABLE "UserProgress" ALTER COLUMN "roadmapId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "Roadmap"("id") ON DELETE SET NULL ON UPDATE CASCADE;
