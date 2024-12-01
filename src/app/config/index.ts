import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  salt_round: process.env.SALT_ROUND,
  default_pass: process.env.DEFAULT_PASS
};