const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create MySQL database connection
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'vindu_recipes',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  logging: false, // Set to console.log to see SQL queries
  define: {
    timestamps: true, // Adds createdAt and updatedAt columns
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;