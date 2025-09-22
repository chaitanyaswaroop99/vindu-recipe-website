const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

// Get all recipes with optional filtering
router.get('/', async (req, res) => {
  try {
    const { category, subcategory, cuisine, search } = req.query;
    
    let whereClause = { isPublished: true };
    
    // Add filters
    if (category) whereClause.category = category;
    if (subcategory) whereClause.subcategory = subcategory;
    if (cuisine) whereClause.cuisine = cuisine;
    
    let recipes;
    
    if (search) {
      // Search in name, description, or ingredients
      recipes = await Recipe.findAll({
        where: {
          ...whereClause,
          [require('sequelize').Op.or]: [
            { name: { [require('sequelize').Op.like]: `%${search}%` } },
            { description: { [require('sequelize').Op.like]: `%${search}%` } },
            { cuisine: { [require('sequelize').Op.like]: `%${search}%` } },
            { category: { [require('sequelize').Op.like]: `%${search}%` } }
          ]
        },
        order: [['rating', 'DESC']]
      });
    } else {
      recipes = await Recipe.findAll({
        where: whereClause,
        order: [['rating', 'DESC']]
      });
    }
    
    res.json({ recipes });
  } catch (error) {
    console.error('Get recipes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    
    if (!recipe.isPublished) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    
    res.json({ recipe });
  } catch (error) {
    console.error('Get recipe error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get recipes by category
router.get('/category/:category', async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        category: req.params.category,
        isPublished: true
      },
      order: [['rating', 'DESC']]
    });
    
    res.json({ recipes });
  } catch (error) {
    console.error('Get category recipes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get recipes by subcategory
router.get('/category/:category/:subcategory', async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        category: req.params.category,
        subcategory: req.params.subcategory,
        isPublished: true
      },
      order: [['rating', 'DESC']]
    });
    
    res.json({ recipes });
  } catch (error) {
    console.error('Get subcategory recipes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get recipes by cuisine
router.get('/cuisine/:cuisine', async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        cuisine: req.params.cuisine,
        isPublished: true
      },
      order: [['rating', 'DESC']]
    });
    
    res.json({ recipes });
  } catch (error) {
    console.error('Get cuisine recipes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Search recipes
router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    
    const recipes = await Recipe.findAll({
      where: {
        isPublished: true,
        [require('sequelize').Op.or]: [
          { name: { [require('sequelize').Op.like]: `%${query}%` } },
          { description: { [require('sequelize').Op.like]: `%${query}%` } },
          { cuisine: { [require('sequelize').Op.like]: `%${query}%` } },
          { category: { [require('sequelize').Op.like]: `%${query}%` } },
          { subcategory: { [require('sequelize').Op.like]: `%${query}%` } }
        ]
      },
      order: [['rating', 'DESC']]
    });
    
    res.json({ recipes, query });
  } catch (error) {
    console.error('Search recipes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
