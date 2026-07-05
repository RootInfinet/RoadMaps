/*
  Warnings:

  - You are about to drop the `UserProgress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_stepId_fkey";

-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_userId_fkey";

-- DropTable
DROP TABLE "UserProgress";

-- CreateTable
CREATE TABLE "UserEnrollment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roadmapId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'in-progress',
    "completedSteps" JSONB NOT NULL DEFAULT '[]',
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserEnrollment_userId_roadmapId_key" ON "UserEnrollment"("userId", "roadmapId");

-- AddForeignKey
ALTER TABLE "UserEnrollment" ADD CONSTRAINT "UserEnrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEnrollment" ADD CONSTRAINT "UserEnrollment_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "Roadmap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
