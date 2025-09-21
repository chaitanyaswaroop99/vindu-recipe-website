const express = require('express');
const router = express.Router();
const { tofuRecipes } = require('../data/tofuRecipes');

// Get all tofu recipes
router.get('/', (req, res) => {
  res.json(tofuRecipes);
});

// Get a single tofu recipe by ID
router.get('/:id', (req, res) => {
  const recipe = tofuRecipes.find(r => r._id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});

module.exports = router;
