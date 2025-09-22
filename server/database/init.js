const sequelize = require('../config/database');
const User = require('../models/User');
const Recipe = require('../models/Recipe');
const { setupMySQL } = require('./setup-mysql');

// Initialize database
const initDatabase = async () => {
  try {
    console.log('🐬 Initializing MySQL database...');
    
    // Setup MySQL database first
    await setupMySQL();
    
    // Test database connection
    await sequelize.authenticate();
    console.log('✅ Database connection established');
    
    // Sync models (create tables)
    await sequelize.sync({ force: false }); // Set to true to recreate tables
    console.log('✅ Database tables synchronized');
    
    // Check if we need to seed data
    const userCount = await User.count();
    const recipeCount = await Recipe.count();
    
    if (userCount === 0 && recipeCount === 0) {
      console.log('📝 Seeding initial data...');
      
      // Create admin user
      const adminUser = await User.create({
        name: 'Admin',
        email: 'admin@vindu.com',
        password: 'admin123',
        role: 'admin',
      });
      console.log('✅ Admin user created');
      
      // Create sample user
      const sampleUser = await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'user',
      });
      console.log('✅ Sample user created');
      
      // Create sample recipes
      await Recipe.create({
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces, a classic Indian dish.',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop&crop=center',
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
          '1 tsp cumin powder',
          '1 tsp coriander powder',
          'Salt to taste',
          'Fresh coriander leaves',
          '1/2 cup yogurt for marination',
          '1 tbsp kasuri methi'
        ],
        instructions: [
          'Marinate chicken with yogurt, ginger-garlic paste, turmeric, red chili powder, and salt for 30 minutes.',
          'Heat butter in a pan, add onion puree and cook until golden brown.',
          'Add tomato puree and cook until oil separates.',
          'Add marinated chicken and cook for 15-20 minutes until chicken is tender.',
          'Stir in garam masala, cumin powder, coriander powder, and kasuri methi.',
          'Add heavy cream and simmer for 10 minutes.',
          'Garnish with fresh coriander leaves and serve hot with naan or rice.'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        userId: adminUser.id,
      });
      
      await Recipe.create({
        name: 'Chocolate Cake',
        description: 'Rich and moist chocolate cake with chocolate frosting.',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&crop=center',
        rating: 4.8,
        totalTime: 60,
        servings: 8,
        difficulty: 'Medium',
        cuisine: 'American',
        category: 'Desserts',
        subcategory: 'Cakes',
        ingredients: [
          '1.5 cups all-purpose flour',
          '1.5 cups granulated sugar',
          '3/4 cup unsweetened cocoa powder',
          '1.5 tsp baking soda',
          '1 tsp baking powder',
          '1 tsp salt',
          '1 cup buttermilk',
          '1/2 cup vegetable oil',
          '2 large eggs',
          '1 tsp vanilla extract',
          '1 cup boiling water'
        ],
        instructions: [
          'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round baking pans.',
          'In a large bowl, whisk together flour, sugar, cocoa, baking soda, baking powder, and salt.',
          'Add buttermilk, oil, eggs, and vanilla extract; beat on medium speed for 2 minutes.',
          'Stir in boiling water (batter will be thin). Pour evenly into prepared pans.',
          'Bake for 30-35 minutes, or until a wooden skewer inserted into the center comes out clean.',
          'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
          'Frost as desired.'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        userId: sampleUser.id,
      });
      
      console.log('✅ Sample recipes created');
    }
    
    console.log(`📊 Database ready: ${userCount} users, ${recipeCount} recipes`);
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
};

module.exports = { initDatabase };