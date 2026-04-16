import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = process.env.NEXT_PUBLIC_DIRECT_URL as string;

if (!connectionString) {
  throw new Error("NEXT_PUBLIC_DIRECT_URL environment variable is not defined");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };