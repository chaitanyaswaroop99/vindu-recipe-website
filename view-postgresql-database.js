require('dotenv').config();
const { Sequelize } = require('sequelize');
const User = require('./server/models/User');
const Recipe = require('./server/models/Recipe');

const viewPostgreSQLDatabase = async () => {
  console.log('🐘 VINDU POSTGRESQL DATABASE VIEWER');
  console.log('══════════════════════════════════════════════════');

  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: DB_HOST || 'localhost',
    port: DB_PORT || 5432,
    database: DB_NAME || 'vindu_recipes',
    username: DB_USER || 'postgres',
    password: DB_PASSWORD || 'postgres',
    logging: false,
  });

  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connection established');

    // Initialize models with the current sequelize instance
    User.init(require('./server/models/User').rawAttributes, { sequelize, modelName: 'User' });
    Recipe.init(require('./server/models/Recipe').rawAttributes, { sequelize, modelName: 'Recipe' });

    // Fetch and display tables
    const [tables] = await sequelize.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    console.log('\n📋 Available Tables:');
    console.log('──────────────────────────────');
    console.table(tables.map(t => ({ name: t.table_name })));

    // Fetch and display Users
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    console.log('\n📊 Users Table:');
    console.log('──────────────────────────────────────────────────');
    console.table(users.map(u => u.toJSON()));

    // Fetch and display Recipes (limited columns for brevity)
    const recipes = await Recipe.findAll({
      attributes: ['id', 'name', 'category', 'subcategory', 'cuisine', 'rating', 'totalTime', 'servings', 'difficulty', 'createdAt']
    });
    console.log('\n📊 Recipes Table:');
    console.log('──────────────────────────────────────────────────');
    console.table(recipes.map(r => r.toJSON()));

    // Fetch and display Recipe Count by Category
    const recipeCounts = await Recipe.findAll({
      attributes: ['category', [sequelize.fn('COUNT', sequelize.col('id')), 'count']],
      group: ['category'],
    });
    console.log('\n📊 Recipe Count by Category:');
    console.log('──────────────────────────────────────────────────');
    console.table(recipeCounts.map(rc => rc.toJSON()));

    console.log('\n✅ Database viewing complete!');
  } catch (error) {
    console.error('❌ Error viewing PostgreSQL database:', error.message);
    console.log('\n📋 Please ensure:');
    console.log('   1. PostgreSQL server is running');
    console.log('   2. Database and tables exist');
    console.log('   3. Connection credentials are correct in server/.env');
    console.log('   4. Run: node server/database/setup-postgresql.js first');
  } finally {
    await sequelize.close();
    console.log('\n🔒 Database connection closed');
  }
};

viewPostgreSQLDatabase();
