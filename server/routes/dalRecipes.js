const express = require('express');
const router = express.Router();
const { dalRecipes } = require('../data/dalRecipes');

// Get all dal recipes
router.get('/', (req, res) => {
  res.json(dalRecipes);
});

// Get a single dal recipe by ID
router.get('/:id', (req, res) => {
  const recipe = dalRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
