/*
  Warnings:

  - Added the required column `destinationLat` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinationLng` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originLat` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originLng` to the `shipments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "shipments" ADD COLUMN     "destinationLat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "destinationLng" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "originLat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "originLng" DOUBLE PRECISION NOT NULL;
