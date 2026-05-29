-- CreateTable
CREATE TABLE "road_network" (
    "id" SERIAL NOT NULL,
    "sourceCity" TEXT NOT NULL,
    "destinationCity" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "trafficLevel" TEXT,
    "roadStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "road_network_pkey" PRIMARY KEY ("id")
);
