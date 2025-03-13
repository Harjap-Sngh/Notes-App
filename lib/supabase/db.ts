import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "./schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("DATABASE_URL is not properly set");
}

const client = postgres(`${process.env.DATABASE_URL}`, { max: 1 });
const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log("migrating database");
    await migrate(db, { migrationsFolder: "./migrations" });
    console.log("database migrated");
  } catch (e) {
    console.log("This is the error " + e);
  }
};

migrateDb();
export default db;
