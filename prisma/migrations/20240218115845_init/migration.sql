-- CreateTable
CREATE TABLE "Jobs" (
    "company" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "phone_num" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "JobID" TEXT NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("JobID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_JobID_key" ON "Jobs"("JobID");
