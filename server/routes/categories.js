const express = require('express');
const router = express.Router();
const { categories } = require('../data/chickenRecipes');

// GET all categories
router.get('/', (req, res) => {
  try {
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single category
router.get('/:id', (req, res) => {
  try {
    const category = categories.find(cat => cat._id === req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
