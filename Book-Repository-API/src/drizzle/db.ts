

import "dotenv/config";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
import assert from "assert";

assert(process.env.DATABASE_URL, "DATABASE_URL is not set in the .env file");

const client = neon(process.env.DATABASE_URL as string);

const db = drizzle(client, { schema, logger: true })  //create a drizzle instance

export default db; 