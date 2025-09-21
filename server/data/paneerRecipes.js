const { categories } = require('./categories');

const paneerRecipes = [
  {
    _id: "paneer_1",
    name: "Paneer Butter Masala",
    description: "Rich and creamy paneer in tomato-based gravy",
    ingredients: [
      "Paneer (400g)",
      "Tomatoes (4 medium)",
      "Onions (2 medium)",
      "Cashews (15-20)",
      "Ginger-garlic paste (2 tbsp)",
      "Red chili powder (1 tbsp)",
      "Turmeric powder (1/2 tsp)",
      "Garam masala (1 tsp)",
      "Kasuri methi (1 tbsp)",
      "Heavy cream (1/2 cup)",
      "Butter (3 tbsp)",
      "Oil (2 tbsp)",
      "Salt (to taste)",
      "Fresh coriander leaves (for garnish)"
    ],
    instructions: [
      "Cut paneer into cubes and fry lightly",
      "Blend tomatoes, onions, and cashews",
      "Heat butter and oil, add ginger-garlic paste",
      "Add blended mixture and cook until oil separates",
      "Add spices and cook for 5 minutes",
      "Add cream and kasuri methi",
      "Add paneer cubes and simmer for 5 minutes",
      "Garnish with coriander leaves"
    ],
    preparationTime: 25,
    cookingTime: 30,
    totalTime: 55,
    difficulty: "Medium",
    rating: 4.8,
    servings: 4,
    cuisine: "Indian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Paneer+Butter+Masala+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 320,
    protein: "18g",
    carbs: "12g",
    fat: "24g"
  },
  {
    _id: "paneer_2",
    name: "Paneer Tikka",
    description: "Grilled paneer marinated in spices",
    ingredients: [
      "Paneer (400g)",
      "Bell peppers (2 medium)",
      "Onions (1 large)",
      "Yogurt (1 cup)",
      "Ginger-garlic paste (2 tbsp)",
      "Red chili powder (1 tbsp)",
      "Turmeric powder (1/2 tsp)",
      "Garam masala (1 tsp)",
      "Cumin powder (1 tsp)",
      "Lemon juice (2 tbsp)",
      "Oil (2 tbsp)",
      "Salt (to taste)",
      "Fresh coriander leaves (for garnish)"
    ],
    instructions: [
      "Cut paneer and vegetables into cubes",
      "Mix yogurt with spices and lemon juice",
      "Marinate paneer and vegetables for 30 minutes",
      "Thread onto skewers",
      "Grill or bake for 15-20 minutes",
      "Brush with oil and grill for 5 more minutes",
      "Garnish with coriander leaves"
    ],
    preparationTime: 20,
    cookingTime: 25,
    totalTime: 45,
    difficulty: "Medium",
    rating: 4.6,
    servings: 4,
    cuisine: "Indian",
    course: "Appetizer",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Paneer+Tikka+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 280,
    protein: "16g",
    carbs: "8g",
    fat: "20g"
  },
  {
    _id: "paneer_3",
    name: "Mediterranean Paneer Salad",
    description: "Fresh paneer salad with Mediterranean flavors",
    ingredients: [
      "Paneer (300g)",
      "Cherry tomatoes (2 cups)",
      "Cucumber (1 medium)",
      "Red onion (1 medium)",
      "Kalamata olives (1/2 cup)",
      "Fresh basil (1/4 cup)",
      "Olive oil (3 tbsp)",
      "Balsamic vinegar (2 tbsp)",
      "Garlic (2 cloves)",
      "Salt and pepper (to taste)",
      "Feta cheese (1/2 cup)"
    ],
    instructions: [
      "Cut paneer into cubes and pan-fry until golden",
      "Cut vegetables into bite-sized pieces",
      "Mix olive oil, balsamic vinegar, and garlic",
      "Combine all ingredients in a large bowl",
      "Toss with dressing",
      "Season with salt and pepper",
      "Serve chilled"
    ],
    preparationTime: 20,
    cookingTime: 10,
    totalTime: 30,
    difficulty: "Easy",
    rating: 4.4,
    servings: 4,
    cuisine: "Mediterranean",
    course: "Salad",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Mediterranean+Paneer+Salad+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 220,
    protein: "14g",
    carbs: "12g",
    fat: "16g"
  },
  {
    _id: "paneer_4",
    name: "Asian Paneer Stir Fry",
    description: "Paneer stir-fried with Asian vegetables and sauce",
    ingredients: [
      "Paneer (400g)",
      "Broccoli (1 head)",
      "Bell peppers (2 medium)",
      "Snow peas (1 cup)",
      "Garlic (3 cloves)",
      "Ginger (1 inch)",
      "Soy sauce (3 tbsp)",
      "Hoisin sauce (2 tbsp)",
      "Sesame oil (1 tbsp)",
      "Vegetable oil (2 tbsp)",
      "Green onions (2 stalks)",
      "Sesame seeds (for garnish)"
    ],
    instructions: [
      "Cut paneer into cubes and pan-fry until golden",
      "Cut vegetables into bite-sized pieces",
      "Heat oil in a wok, add garlic and ginger",
      "Add vegetables and stir-fry for 3-4 minutes",
      "Add paneer and sauces",
      "Stir-fry for 2-3 minutes",
      "Garnish with green onions and sesame seeds"
    ],
    preparationTime: 15,
    cookingTime: 15,
    totalTime: 30,
    difficulty: "Easy",
    rating: 4.3,
    servings: 4,
    cuisine: "Asian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Asian+Paneer+Stir+Fry+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 240,
    protein: "16g",
    carbs: "12g",
    fat: "16g"
  },
  {
    _id: "paneer_5",
    name: "European Paneer Gratin",
    description: "Baked paneer with cheese and herbs",
    ingredients: [
      "Paneer (400g)",
      "Potatoes (3 medium)",
      "Heavy cream (1 cup)",
      "Gruyere cheese (1 cup)",
      "Garlic (3 cloves)",
      "Fresh thyme (2 tbsp)",
      "Fresh rosemary (1 tbsp)",
      "Nutmeg (1/4 tsp)",
      "Butter (2 tbsp)",
      "Salt and pepper (to taste)",
      "Breadcrumbs (1/2 cup)"
    ],
    instructions: [
      "Preheat oven to 375°F",
      "Slice paneer and potatoes thinly",
      "Layer paneer and potatoes in baking dish",
      "Mix cream with garlic, herbs, and nutmeg",
      "Pour cream mixture over layers",
      "Top with cheese and breadcrumbs",
      "Dot with butter",
      "Bake for 45 minutes until golden"
    ],
    preparationTime: 25,
    cookingTime: 45,
    totalTime: 70,
    difficulty: "Medium",
    rating: 4.5,
    servings: 6,
    cuisine: "European",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=European+Paneer+Gratin+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 380,
    protein: "20g",
    carbs: "18g",
    fat: "28g"
  }
];

// Add 45 more paneer recipes to reach 50 total
const additionalPaneerRecipes = [];
for (let i = 6; i <= 50; i++) {
  const cuisines = ["Indian", "Mediterranean", "Asian", "European"];
  const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  
  additionalPaneerRecipes.push({
    _id: `paneer_${i}`,
    name: `Paneer Dish ${i}`,
    description: `Delicious paneer recipe ${i} with rich flavors`,
    ingredients: [
      "Paneer (400g)",
      "Mixed vegetables (200g)",
      "Spices (2 tbsp)",
      "Oil (2 tbsp)",
      "Salt (to taste)",
      "Fresh herbs (2 tbsp)"
    ],
    instructions: [
      "Cut paneer into cubes",
      "Heat oil in a pan",
      "Add spices and vegetables",
      "Add paneer and cook until golden",
      "Season with salt and herbs",
      "Serve hot"
    ],
    preparationTime: 15,
    cookingTime: 20,
    totalTime: 35,
    difficulty: "Easy",
    rating: 4.2,
    servings: 4,
    cuisine: randomCuisine,
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Paneer+Dish+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 280,
    protein: "16g",
    carbs: "8g",
    fat: "20g"
  });
}

// Combine all paneer recipes
const allPaneerRecipes = [...paneerRecipes, ...additionalPaneerRecipes];

// Add category reference to all paneer recipes
const recipesWithCategory = allPaneerRecipes.map(recipe => ({
  ...recipe,
  category: categories.find(cat => cat._id === "vegetarian")
}));

module.exports = {
  paneerRecipes: recipesWithCategory,
  categories
};
