const mysql = require('mysql2/promise');
require('dotenv').config();

// Create MySQL connection
const createConnection = async () => {
  return await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'vindu_recipes'
  });
};

// Function to run queries and display results
async function runQuery(connection, query, description) {
  console.log(`\n📊 ${description}:`);
  console.log('─'.repeat(50));
  
  const [rows] = await connection.execute(query);
  
  if (rows.length === 0) {
    console.log('No data found');
  } else {
    console.table(rows);
  }
  
  return rows;
}

// Main function to display database contents
async function viewMySQLDatabase() {
  let connection;
  
  try {
    console.log('🐬 VINDU MYSQL DATABASE VIEWER');
    console.log('═'.repeat(50));
    
    // Create connection
    connection = await createConnection();
    console.log('✅ Connected to MySQL database');
    
    // Show tables
    console.log('\n📋 Available Tables:');
    console.log('─'.repeat(30));
    await runQuery(connection, "SHOW TABLES;", 'Tables');
    
    // Show Users table
    await runQuery(connection, `
      SELECT id, name, email, role, isActive, createdAt 
      FROM Users 
      ORDER BY createdAt DESC
    `, 'Users Table');
    
    // Show Recipes table
    await runQuery(connection, `
      SELECT id, name, category, subcategory, cuisine, rating, totalTime, servings, difficulty, createdAt 
      FROM Recipes 
      ORDER BY createdAt DESC
    `, 'Recipes Table');
    
    // Show recipe count by category
    await runQuery(connection, `
      SELECT category, COUNT(*) as count 
      FROM Recipes 
      GROUP BY category 
      ORDER BY count DESC
    `, 'Recipe Count by Category');
    
    // Show database info
    await runQuery(connection, `
      SELECT 
        TABLE_NAME as 'Table',
        TABLE_ROWS as 'Rows',
        ROUND(((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024), 2) as 'Size (MB)'
      FROM information_schema.TABLES 
      WHERE TABLE_SCHEMA = DATABASE()
    `, 'Database Statistics');
    
    console.log('\n✅ MySQL database viewing complete!');
    
  } catch (error) {
    console.error('❌ Error viewing MySQL database:', error.message);
    console.log('\n📋 Please ensure:');
    console.log('   1. MySQL server is running');
    console.log('   2. Database and tables exist');
    console.log('   3. Connection credentials are correct');
  } finally {
    if (connection) {
      await connection.end();
      console.log('\n🔒 MySQL connection closed');
    }
  }
}

// Run the viewer
viewMySQLDatabase();
