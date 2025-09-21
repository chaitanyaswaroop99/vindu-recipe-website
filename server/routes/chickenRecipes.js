const express = require('express');
const router = express.Router();
const { chickenRecipes } = require('../data/chickenRecipes');

// GET all chicken recipes
router.get('/', (req, res) => {
  try {
    const { search, difficulty, cuisine, rating } = req.query;
    let filteredRecipes = [...chickenRecipes];

    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchLower) ||
        recipe.description.toLowerCase().includes(searchLower) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchLower))
      );
    }

    // Filter by difficulty
    if (difficulty) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.difficulty.toLowerCase() === difficulty.toLowerCase()
      );
    }

    // Filter by cuisine
    if (cuisine) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      );
    }

    // Filter by minimum rating
    if (rating) {
      const minRating = parseFloat(rating);
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.rating >= minRating
      );
    }

    res.json(filteredRecipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single chicken recipe
router.get('/:id', (req, res) => {
  try {
    const recipe = chickenRecipes.find(r => r._id === req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET random chicken recipe
router.get('/random/one', (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * chickenRecipes.length);
    const randomRecipe = chickenRecipes[randomIndex];
    res.json(randomRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET recipes by cuisine
router.get('/cuisine/:cuisine', (req, res) => {
  try {
    const cuisine = req.params.cuisine.toLowerCase();
    const recipes = chickenRecipes.filter(recipe => 
      recipe.cuisine.toLowerCase().includes(cuisine)
    );
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET recipes by difficulty
router.get('/difficulty/:level', (req, res) => {
  try {
    const difficulty = req.params.level.toLowerCase();
    const recipes = chickenRecipes.filter(recipe => 
      recipe.difficulty.toLowerCase() === difficulty
    );
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
