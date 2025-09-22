const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Open the database
const dbPath = path.join(__dirname, 'server', 'database', 'vindu.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error opening database:', err.message);
    return;
  }
  console.log('✅ Connected to SQLite database');
});

// Function to run queries and display results
function runQuery(query, description) {
  return new Promise((resolve, reject) => {
    console.log(`\n📊 ${description}:`);
    console.log('─'.repeat(50));
    
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('❌ Query error:', err.message);
        reject(err);
        return;
      }
      
      if (rows.length === 0) {
        console.log('No data found');
      } else {
        console.table(rows);
      }
      resolve(rows);
    });
  });
}

// Main function to display database contents
async function viewDatabase() {
  try {
    console.log('🗄️ VINDU DATABASE VIEWER');
    console.log('═'.repeat(50));
    
    // Show tables
    console.log('\n📋 Available Tables:');
    console.log('─'.repeat(30));
    await runQuery("SELECT name FROM sqlite_master WHERE type='table';", 'Tables');
    
    // Show Users table
    await runQuery(`
      SELECT id, name, email, role, isActive, createdAt 
      FROM Users 
      ORDER BY createdAt DESC
    `, 'Users Table');
    
    // Show Recipes table
    await runQuery(`
      SELECT id, name, category, subcategory, cuisine, rating, totalTime, servings, difficulty, createdAt 
      FROM Recipes 
      ORDER BY createdAt DESC
    `, 'Recipes Table');
    
    // Show recipe count by category
    await runQuery(`
      SELECT category, COUNT(*) as count 
      FROM Recipes 
      GROUP BY category 
      ORDER BY count DESC
    `, 'Recipe Count by Category');
    
    console.log('\n✅ Database viewing complete!');
    
  } catch (error) {
    console.error('❌ Error viewing database:', error);
  } finally {
    db.close((err) => {
      if (err) {
        console.error('❌ Error closing database:', err.message);
      } else {
        console.log('\n🔒 Database connection closed');
      }
    });
  }
}

// Run the viewer
viewDatabase();
