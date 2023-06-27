import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}

export default prisma;

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
