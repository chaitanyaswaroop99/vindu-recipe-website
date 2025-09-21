const express = require('express');
const router = express.Router();
const { vegetableRecipes } = require('../data/vegetableRecipes');

// Get all vegetable recipes
router.get('/', (req, res) => {
  res.json(vegetableRecipes);
});

// Get a single vegetable recipe by ID
router.get('/:id', (req, res) => {
  const recipe = vegetableRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
