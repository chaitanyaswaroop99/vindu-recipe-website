const express = require('express');
const router = express.Router();
const { paneerRecipes } = require('../data/paneerRecipes');

// Get all paneer recipes
router.get('/', (req, res) => {
  res.json(paneerRecipes);
});

// Get a single paneer recipe by ID
router.get('/:id', (req, res) => {
  const recipe = paneerRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
