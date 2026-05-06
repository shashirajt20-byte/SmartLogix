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

  console.log("Roles seeded successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());