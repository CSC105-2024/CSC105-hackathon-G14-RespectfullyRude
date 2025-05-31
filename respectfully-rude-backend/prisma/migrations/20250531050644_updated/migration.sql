/*
  Warnings:

  - You are about to drop the column `img` on the `BackhandedCompliment` table. All the data in the column will be lost.
  - Added the required column `img_url` to the `BackhandedCompliment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BackhandedCompliment` DROP COLUMN `img`,
    ADD COLUMN `img_url` VARCHAR(191) NOT NULL;
