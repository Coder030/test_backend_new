/*
  Warnings:

  - Added the required column `belongsToId` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "belongsToId" TEXT NOT NULL;
