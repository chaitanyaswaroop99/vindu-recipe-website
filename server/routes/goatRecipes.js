const express = require('express');
const router = express.Router();
const { goatRecipes } = require('../data/goatRecipes');

// GET all goat recipes
router.get('/', (req, res) => {
  try {
    res.json(goatRecipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch goat recipes' });
  }
});

// GET goat recipe by ID
router.get('/:id', (req, res) => {
  try {
    const recipe = goatRecipes.find(r => r._id === req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Goat recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch goat recipe' });
  }
});

module.exports = router;
