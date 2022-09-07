/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const nodeEnvPath = path.resolve(process.cwd(), process.env.NODE_ENV === 'development' ? '.env.development' : '.env');

const fallbackPath = path.resolve(process.cwd(), '.env');

function readEnvFromFile(envPath) {
  const result = dotenv.config({ path: envPath });
  if (result.error) {
    throw result.error;
  }
}

if (fs.existsSync(nodeEnvPath)) {
  readEnvFromFile(nodeEnvPath);
} else if (fs.existsSync(fallbackPath)) {
  readEnvFromFile(fallbackPath);
} else {
  console.log('Picking up config from the environment');
}

module.exports = {
  development: {
    dialect: process.env.DATABASE_DIALECT || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'postgres',
  },
  test: {
    dialect: process.env.DATABASE_DIALECT || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'novatalks_test',
  },
  production: {
    dialect: process.env.DATABASE_DIALECT || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'novatalks_production',
  },
};
