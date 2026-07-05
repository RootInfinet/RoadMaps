const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.roadmap.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: "Front-End Development (Security By Design)",
      description:
        "Master frontend engineering with secure coding practices and hands-on portfolio projects.",
      isPremium: false,
    },
  });

  console.log("Roadmap seeded (id: 1)");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
