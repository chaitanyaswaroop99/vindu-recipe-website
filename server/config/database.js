const { Sequelize } = require('sequelize');
const path = require('path');

// Create SQLite database connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database/vindu.db'),
  logging: false, // Set to console.log to see SQL queries
  define: {
    timestamps: true, // Adds createdAt and updatedAt columns
  }
});

module.exports = sequelize;
