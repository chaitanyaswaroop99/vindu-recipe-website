const sequelize = require('../config/database');
const User = require('../models/User');
const Recipe = require('../models/Recipe');
const fs = require('fs');
const path = require('path');

// Create database directory if it doesn't exist
const dbDir = path.dirname(sequelize.options.storage);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize database
const initDatabase = async () => {
  try {
    console.log('🗄️ Initializing database...');
    
    // Test database connection
    await sequelize.authenticate();
    console.log('✅ Database connection established');
    
    // Sync models (create tables)
    await sequelize.sync({ force: false }); // Set to true to recreate tables
    console.log('✅ Database tables synchronized');
    
    // Check if we need to seed data
    const userCount = await User.count();
    const recipeCount = await Recipe.count();
    
    if (userCount === 0) {
      console.log('📝 Seeding initial data...');
      await seedInitialData();
    }
    
    console.log(`📊 Database ready: ${userCount} users, ${recipeCount} recipes`);
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
};

// Seed initial data
const seedInitialData = async () => {
  try {
    // Create admin user
    const adminUser = await User.create({
      name: 'Admin',
      email: 'admin@vindu.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('✅ Admin user created');
    
    // Create sample user
    const sampleUser = await User.create({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user'
    });
    console.log('✅ Sample user created');
    
    // Create sample recipes
    const sampleRecipes = [
      {
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
        rating: 4.8,
        totalTime: 45,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        category: 'Non-Vegetarian',
        subcategory: 'Chicken',
        ingredients: [
          '500g boneless chicken',
          '2 large onions, pureed',
          '4 tomatoes, pureed',
          '1 cup heavy cream',
          '2 tbsp butter',
          '1 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '2 tsp red chili powder',
          '1 tsp garam masala',
          'Salt to taste'
        ],
        instructions: [
          'Marinate chicken with yogurt and spices for 30 minutes',
          'Heat butter in a pan, add onion puree and cook until golden',
          'Add tomato puree and cook until oil separates',
          'Add marinated chicken and cook for 15-20 minutes',
          'Stir in garam masala and heavy cream',
          'Simmer for 10 minutes and serve hot'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        userId: null // System recipe
      },
      {
        name: 'Chocolate Cake',
        description: 'Rich and moist chocolate cake with chocolate frosting',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center',
        rating: 4.8,
        totalTime: 60,
        servings: 8,
        difficulty: 'Medium',
        cuisine: 'American',
        category: 'Desserts',
        subcategory: 'Cakes',
        ingredients: [
          '2 cups all-purpose flour',
          '1 cup cocoa powder',
          '2 cups sugar',
          '1 tsp baking powder',
          '1 tsp baking soda',
          '1/2 tsp salt',
          '1 cup buttermilk',
          '1/2 cup vegetable oil',
          '2 large eggs',
          '2 tsp vanilla extract',
          '1 cup hot water'
        ],
        instructions: [
          'Preheat oven to 350°F and grease cake pans',
          'Mix dry ingredients in a large bowl',
          'Mix wet ingredients in another bowl',
          'Combine wet and dry ingredients until smooth',
          'Pour batter into prepared pans',
          'Bake for 30-35 minutes until toothpick comes out clean',
          'Cool completely before frosting'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        userId: null // System recipe
      }
    ];
    
    await Recipe.bulkCreate(sampleRecipes);
    console.log('✅ Sample recipes created');
    
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    throw error;
  }
};

module.exports = { initDatabase, sequelize };
