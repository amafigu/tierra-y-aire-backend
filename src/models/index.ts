import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import Concert from './concert';
dotenv.config();
const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : process.env.NODE_ENV === 'test'
      ? '.env.test'
      : '.env.development';
dotenv.config({ path: envFile });

if (process.env.DATABASE_URL == null) {
  throw new Error('DATABASE_URL environment variable is not set');
}
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres',
  models: [Concert],
});

interface Db {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  concerts: typeof Concert;
}

const db: Db = {
  Sequelize,
  sequelize,
  concerts: Concert,
};

export default db;
