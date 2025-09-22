const mysql = require('mysql2/promise');

async function testMySQLConnection() {
  console.log('🔐 Testing MySQL Connection...');
  console.log('═'.repeat(40));
  
  // Test different connection configurations
  const configs = [
    { host: 'localhost', user: 'root', password: '', database: 'vindu_recipes' },
    { host: 'localhost', user: 'root', password: 'root', database: 'vindu_recipes' },
    { host: 'localhost', user: 'root', password: 'password', database: 'vindu_recipes' },
    { host: 'localhost', user: 'root', password: '123456', database: 'vindu_recipes' }
  ];
  
  for (let i = 0; i < configs.length; i++) {
    const config = configs[i];
    console.log(`\n🔍 Testing config ${i + 1}:`);
    console.log(`   Host: ${config.host}`);
    console.log(`   User: ${config.user}`);
    console.log(`   Password: ${config.password ? '***' : '(empty)'}`);
    console.log(`   Database: ${config.database}`);
    
    try {
      const connection = await mysql.createConnection(config);
      console.log('   ✅ Connection successful!');
      
      // Test if database exists
      const [databases] = await connection.execute('SHOW DATABASES LIKE ?', [config.database]);
      if (databases.length > 0) {
        console.log('   ✅ Database exists!');
      } else {
        console.log('   ⚠️  Database does not exist, will create it');
      }
      
      await connection.end();
      console.log('   🎉 MySQL is ready to use!');
      
      // Update .env file with working config
      const fs = require('fs');
      const envContent = `# MySQL Database Configuration
DB_HOST=${config.host}
DB_PORT=3306
DB_NAME=${config.database}
DB_USER=${config.user}
DB_PASSWORD=${config.password}

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Server Configuration
PORT=5000
NODE_ENV=development`;
      
      fs.writeFileSync('server/.env', envContent);
      console.log('   📝 Updated server/.env with working configuration');
      
      return true;
      
    } catch (error) {
      console.log(`   ❌ Connection failed: ${error.message}`);
    }
  }
  
  console.log('\n❌ All connection attempts failed.');
  console.log('\n📋 Please check:');
  console.log('   1. MySQL server is running');
  console.log('   2. Try starting XAMPP and MySQL service');
  console.log('   3. Check your MySQL root password');
  
  return false;
}

testMySQLConnection();
