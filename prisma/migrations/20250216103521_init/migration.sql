-- CreateTable
CREATE TABLE "FormEnquiry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "enquiry" TEXT NOT NULL,
    "message" TEXT,
    "ownsWebsite" BOOLEAN NOT NULL,
    "budget" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "preference" TEXT NOT NULL,

    CONSTRAINT "FormEnquiry_pkey" PRIMARY KEY ("id")
);
