const mysql = require('mysql2/promise');
require('dotenv').config();

const setupMySQL = async () => {
  try {
    console.log('🐬 Setting up MySQL database...');
    
    // Create connection without specifying database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    });
    
    console.log('✅ Connected to MySQL server');
    
    // Create database if it doesn't exist
    const dbName = process.env.DB_NAME || 'vindu_recipes';
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    console.log(`✅ Database '${dbName}' created/verified`);
    
    // Use the database
    await connection.execute(`USE \`${dbName}\``);
    console.log(`✅ Using database '${dbName}'`);
    
    await connection.end();
    console.log('✅ MySQL setup complete!');
    
  } catch (error) {
    console.error('❌ MySQL setup failed:', error.message);
    console.log('\n📋 Please ensure:');
    console.log('   1. MySQL server is running');
    console.log('   2. MySQL credentials are correct in .env file');
    console.log('   3. User has CREATE DATABASE privileges');
    throw error;
  }
};

module.exports = { setupMySQL };
