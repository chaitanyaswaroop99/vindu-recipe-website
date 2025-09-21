const express = require('express');
const router = express.Router();
const { vegetarianRecipes } = require('../data/vegetarianRecipes');

// Get all vegetarian recipes
router.get('/', (req, res) => {
  res.json(vegetarianRecipes);
});

// Get a single vegetarian recipe by ID
router.get('/:id', (req, res) => {
  const recipe = vegetarianRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
