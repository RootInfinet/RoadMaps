-- CreateTable
CREATE TABLE "ProjectSubmission" (
    "id" SERIAL NOT NULL,
    "enrollmentId" INTEGER NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "projectUrl" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectSubmission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectSubmission" ADD CONSTRAINT "ProjectSubmission_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "UserEnrollment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
