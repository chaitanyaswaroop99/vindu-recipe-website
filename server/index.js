const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Legacy routes (keeping for backward compatibility)
app.use('/api/chicken-recipes', require('./routes/chickenRecipes'));
app.use('/api/seafood-recipes', require('./routes/seafoodRecipes'));
app.use('/api/lamb-recipes', require('./routes/lambRecipes'));
app.use('/api/goat-recipes', require('./routes/goatRecipes'));
app.use('/api/beef-recipes', require('./routes/beefRecipes'));
app.use('/api/pork-recipes', require('./routes/porkRecipes'));
app.use('/api/vegetarian-recipes', require('./routes/vegetarianRecipes'));
app.use('/api/vegetable-recipes', require('./routes/vegetableRecipes'));
app.use('/api/paneer-recipes', require('./routes/paneerRecipes'));
app.use('/api/tofu-recipes', require('./routes/tofuRecipes'));
app.use('/api/salad-recipes', require('./routes/saladRecipes'));
app.use('/api/cashew-recipes', require('./routes/cashewRecipes'));
app.use('/api/dal-recipes', require('./routes/dalRecipes'));
app.use('/api/vegan-recipes', require('./routes/veganRecipes'));
app.use('/api/dessert-recipes', require('./routes/dessertRecipes'));
app.use('/api/categories', require('./routes/categories'));

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🔗 API endpoints available at http://localhost:${PORT}/api`);
});
