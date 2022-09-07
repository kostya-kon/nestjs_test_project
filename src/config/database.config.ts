import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  dialect: process.env.DATABASE_DIALECT || 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  name: process.env.DATABASE_NAME || 'postgres',
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  minPoolSize: parseInt(process.env.DATABASE_MIN_POOL_SIZE, 10) || 5,
  maxPoolSize: parseInt(process.env.DATABASE_MAX_POOL_SIZE, 10) || 50,
}));
