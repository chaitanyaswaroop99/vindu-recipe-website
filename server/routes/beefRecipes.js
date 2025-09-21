const express = require('express');
const router = express.Router();
const { beefRecipes } = require('../data/beefRecipes');

// Get all beef recipes
router.get('/', (req, res) => {
  res.json(beefRecipes);
});

// Get a single beef recipe by ID
router.get('/:id', (req, res) => {
  const recipe = beefRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
