const express = require('express');
const router = express.Router();
const { veganRecipes } = require('../data/veganRecipes');

// Get all vegan recipes
router.get('/', (req, res) => {
  res.json(veganRecipes);
});

// Get a single vegan recipe by ID
router.get('/:id', (req, res) => {
  const recipe = veganRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
