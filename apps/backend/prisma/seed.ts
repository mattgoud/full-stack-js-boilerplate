import { PrismaClient } from '../src/generated/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

// 1. Create a standard connection pool with pg
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// 2. Initialize the Prisma adapter
const adapter = new PrismaPg(pool);

// 3. Pass the adapter to the PrismaClient
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seeding with Adapter...');

  const user = await prisma.user.upsert({
    where: { email: 'dev@example.com' },
    update: {},
    create: {
      email: 'dev@example.com',
      name: 'Developer Admin',
      githubId: 'github-12345',
    },
  });

  console.log('✅ Seed successful! User created:', user.email);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end(); // Don't forget to close the pool
  });