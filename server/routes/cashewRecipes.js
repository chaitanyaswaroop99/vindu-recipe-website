const express = require('express');
const router = express.Router();
const { cashewRecipes } = require('../data/cashewRecipes');

// Get all cashew recipes
router.get('/', (req, res) => {
  res.json(cashewRecipes);
});

// Get a single cashew recipe by ID
router.get('/:id', (req, res) => {
  const recipe = cashewRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
