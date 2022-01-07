import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice Async",
    email: "alice@me.com",
  },
  {
    name: "Nilu Null",
    email: "nilu@me.com",
  },
  {
    name: "Mahmoud Map",
    email: "mahmoud@me.com",
  },
];

async function main() {
  console.log(`Seeding Start ***`);
  for (const datum of userData) {
    const user = await prisma.user.create({
      data: { ...datum },
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding Done ***`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
