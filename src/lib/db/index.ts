import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

// Connection caching provides server-side connection pooling, so that a new connection does not have to be set up for each query over HTTP
// Server-side connection pooling is like having a shared pool of pre-established network connections on the server to efficiently handle multiple client requests without setting up new connections each time.
neonConfig.fetchConnectionCache = true;

// ensure that database url exists
if (!process.env.DATABASE_URL) {
    throw new Error('Database URL not found! 😞')
}

// connect neon database with drizzle orm
const sql = neon(process.env.DATABASE_URL);

// creating a method to do database operations using drizzle
export const db = drizzle(sql);