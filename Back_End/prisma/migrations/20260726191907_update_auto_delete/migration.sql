-- DropForeignKey
ALTER TABLE "Step" DROP CONSTRAINT "Step_roadmapId_fkey";

-- DropForeignKey
ALTER TABLE "UserEnrollment" DROP CONSTRAINT "UserEnrollment_roadmapId_fkey";

-- DropForeignKey
ALTER TABLE "UserEnrollment" DROP CONSTRAINT "UserEnrollment_userId_fkey";

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "Roadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEnrollment" ADD CONSTRAINT "UserEnrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEnrollment" ADD CONSTRAINT "UserEnrollment_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "Roadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;
