import { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'

// since variables inside .env file are only accessible within src directory, dotenv lib allows us to access those variables outside src
dotenv.config({ path: ".env" });

export default {
    driver: "pg",
    schema: "./src/lib/db/schema.ts",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!
    }
} satisfies Config