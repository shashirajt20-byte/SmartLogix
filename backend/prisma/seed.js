import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      { id: 1, name: "Admin" },
      { id: 2, name: "Customer" },
      { id: 3, name: "Driver" },
      { id: 4, name: "Warehouse Manager" },
      { id: 5, name: "Logistics Manager" },
      { id: 6, name: "Booking Manager" }
    ],
    skipDuplicates: true
  });
  await prisma.roadNetwork.createMany({
      data: [
          {
              sourceCity: "Delhi",
              destinationCity: "Pune",
              cost: 5,
              trafficLevel: "low",
              roadStatus: "open"
          },
          {
              sourceCity: "Pune",
              destinationCity: "Mumbai",
              cost: 2,
              trafficLevel: "medium",
              roadStatus: "open"
          },
          {
              sourceCity: "Delhi",
              destinationCity: "Mumbai",
              cost: 100,
              trafficLevel: "high",
              roadStatus: "open"
          }
      ]
  });
  console.log("Roles seeded successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());