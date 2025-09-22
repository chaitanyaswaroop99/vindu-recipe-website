const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Recipe = sequelize.define('Recipe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100]
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    defaultValue: 4.0,
    validate: {
      min: 0,
      max: 5
    }
  },
  totalTime: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Cooking time in minutes'
  },
  servings: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  difficulty: {
    type: DataTypes.ENUM('Easy', 'Medium', 'Hard'),
    allowNull: false
  },
  cuisine: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subcategory: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ingredients: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  instructions: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  youtubeLink: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'User who created the recipe (null for system recipes)'
  }
});

module.exports = Recipe;
