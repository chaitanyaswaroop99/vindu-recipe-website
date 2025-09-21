const express = require('express');
const router = express.Router();
const { lambRecipes } = require('../data/lambRecipes');

// GET all lamb recipes
router.get('/', (req, res) => {
  try {
    res.json(lambRecipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lamb recipes' });
  }
});

// GET lamb recipe by ID
router.get('/:id', (req, res) => {
  try {
    const recipe = lambRecipes.find(r => r._id === req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Lamb recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lamb recipe' });
  }
});

module.exports = router;
