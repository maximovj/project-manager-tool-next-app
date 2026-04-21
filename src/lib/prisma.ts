import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = process.env.NEXT_PUBLIC_SUPABASE_DIRECT_CONNECTION as string;

if (!connectionString) {
  throw new Error("NEXT_PUBLIC_SUPABASE_DIRECT_CONNECTION environment variable is not defined");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };