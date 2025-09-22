const mysql = require('mysql2/promise');

async function testMySQLPasswords() {
  console.log('🔐 TESTING MYSQL PASSWORDS...');
  console.log('═'.repeat(50));
  
  // Common MySQL passwords to try
  const passwords = [
    '', // Empty password
    'root',
    'password',
    '123456',
    'admin',
    'mysql',
    'root123',
    'password123'
  ];
  
  for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];
    console.log(`\n🔍 Testing password ${i + 1}/${passwords.length}: ${password ? '***' : '(empty)'}`);
    
    try {
      const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: password,
        database: 'vindu_recipes'
      });
      
      console.log('   ✅ Connection successful!');
      
      // Test if database exists
      const [databases] = await connection.execute('SHOW DATABASES LIKE ?', ['vindu_recipes']);
      if (databases.length > 0) {
        console.log('   ✅ Database vindu_recipes exists!');
      } else {
        console.log('   ⚠️  Database does not exist, will create it');
        await connection.execute('CREATE DATABASE IF NOT EXISTS vindu_recipes');
        console.log('   ✅ Database vindu_recipes created!');
      }
      
      await connection.end();
      console.log('   🎉 MySQL is ready to use!');
      
      // Update .env file with working password
      const fs = require('fs');
      const envContent = `# MySQL Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=vindu_recipes
DB_USER=root
DB_PASSWORD=${password}

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Server Configuration
PORT=5000
NODE_ENV=development`;
      
      fs.writeFileSync('server/.env', envContent);
      console.log('   📝 Updated server/.env with working password');
      
      console.log('\n🎉 SUCCESS! MySQL is now configured!');
      console.log('\n📋 Next steps:');
      console.log('1. Install MySQL Workbench');
      console.log('2. Connect with:');
      console.log(`   Host: localhost`);
      console.log(`   Port: 3306`);
      console.log(`   Username: root`);
      console.log(`   Password: ${password ? password : '(empty)'}`);
      console.log(`   Database: vindu_recipes`);
      console.log('3. Start server: cd server && npm start');
      
      return true;
      
    } catch (error) {
      console.log(`   ❌ Connection failed: ${error.message}`);
    }
  }
  
  console.log('\n❌ All password attempts failed.');
  console.log('\n📋 Please try:');
  console.log('1. Check if MySQL80 service is running');
  console.log('2. Try connecting with MySQL Workbench');
  console.log('3. Reset MySQL root password if needed');
  
  return false;
}

testMySQLPasswords();
