const express = require('express');
const router = express.Router();
const { saladRecipes } = require('../data/saladRecipes');

// Get all salad recipes
router.get('/', (req, res) => {
  res.json(saladRecipes);
});

// Get a single salad recipe by ID
router.get('/:id', (req, res) => {
  const recipe = saladRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
