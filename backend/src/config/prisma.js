// import pkg from "../generated/prisma/";
// const { PrismaClient } = pkg;

// const prisma = new PrismaClient();

// export default prisma;

import { PrismaPg } from "@prisma/adapter-pg";
import ENV from "./env.js";
import { PrismaClient } from "@prisma/client";

const connectionString = `${ENV.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma
