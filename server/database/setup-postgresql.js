const { Client } = require('pg');
require('dotenv').config();

const setupPostgreSQL = async () => {
  try {
    console.log('🐘 Setting up PostgreSQL database...');
    
    // Create connection to default postgres database first
    const client = new Client({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: 'postgres' // Connect to default postgres database
    });
    
    await client.connect();
    console.log('✅ Connected to PostgreSQL server');
    
    // Create database if it doesn't exist
    const dbName = process.env.DB_NAME || 'vindu_recipes';
    const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = '${dbName}'`;
    const dbExists = await client.query(checkDbQuery);
    
    if (dbExists.rows.length === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`✅ Database '${dbName}' created`);
    } else {
      console.log(`✅ Database '${dbName}' already exists`);
    }
    
    await client.end();
    console.log('✅ PostgreSQL setup complete!');
    
  } catch (error) {
    console.error('❌ PostgreSQL setup failed:', error.message);
    console.log('\n📋 Please ensure:');
    console.log('   1. PostgreSQL server is running');
    console.log('   2. PostgreSQL credentials are correct in .env file');
    console.log('   3. User has CREATE DATABASE privileges');
    throw error;
  }
};

module.exports = { setupPostgreSQL };
