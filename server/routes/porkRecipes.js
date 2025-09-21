const express = require('express');
const router = express.Router();
const { porkRecipes } = require('../data/porkRecipes');

// Get all pork recipes
router.get('/', (req, res) => {
  res.json(porkRecipes);
});

// Get a single pork recipe by ID
router.get('/:id', (req, res) => {
  const recipe = porkRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
