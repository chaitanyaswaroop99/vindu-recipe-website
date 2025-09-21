const { categories } = require('./categories');

const vegetableRecipes = [
  {
    _id: "veg_1",
    name: "Aloo Gobi",
    description: "Classic Indian potato and cauliflower curry",
    ingredients: [
      "Potatoes (3 medium)",
      "Cauliflower (1 medium head)",
      "Onions (2 medium)",
      "Tomatoes (3 medium)",
      "Ginger-garlic paste (2 tbsp)",
      "Turmeric powder (1 tsp)",
      "Red chili powder (1 tbsp)",
      "Coriander powder (1 tbsp)",
      "Cumin seeds (1 tsp)",
      "Mustard seeds (1 tsp)",
      "Curry leaves (1 sprig)",
      "Oil (3 tbsp)",
      "Salt (to taste)",
      "Fresh coriander leaves (for garnish)"
    ],
    instructions: [
      "Cut potatoes and cauliflower into bite-sized pieces",
      "Heat oil, add mustard and cumin seeds",
      "Add curry leaves and sliced onions",
      "Add ginger-garlic paste and cook until fragrant",
      "Add tomatoes and spice powders",
      "Add potatoes and cook for 5 minutes",
      "Add cauliflower and cook until tender",
      "Season with salt and garnish with coriander"
    ],
    preparationTime: 20,
    cookingTime: 25,
    totalTime: 45,
    difficulty: "Easy",
    rating: 4.6,
    servings: 4,
    cuisine: "Indian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Aloo+Gobi+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 180,
    protein: "6g",
    carbs: "28g",
    fat: "6g"
  },
  {
    _id: "veg_2",
    name: "Mediterranean Roasted Vegetables",
    description: "Colorful roasted vegetables with herbs",
    ingredients: [
      "Bell peppers (3 medium)",
      "Zucchini (2 medium)",
      "Eggplant (1 medium)",
      "Cherry tomatoes (2 cups)",
      "Red onion (1 large)",
      "Olive oil (4 tbsp)",
      "Fresh rosemary (2 tbsp)",
      "Fresh thyme (1 tbsp)",
      "Garlic (4 cloves)",
      "Salt and pepper (to taste)",
      "Balsamic vinegar (2 tbsp)"
    ],
    instructions: [
      "Preheat oven to 425°F",
      "Cut all vegetables into bite-sized pieces",
      "Toss vegetables with olive oil, herbs, and garlic",
      "Season with salt and pepper",
      "Roast for 25-30 minutes until tender",
      "Drizzle with balsamic vinegar",
      "Serve hot"
    ],
    preparationTime: 15,
    cookingTime: 30,
    totalTime: 45,
    difficulty: "Easy",
    rating: 4.5,
    servings: 6,
    cuisine: "Mediterranean",
    course: "Side Dish",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Mediterranean+Roasted+Vegetables+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 120,
    protein: "3g",
    carbs: "15g",
    fat: "6g"
  },
  {
    _id: "veg_3",
    name: "Stir-Fried Bok Choy",
    description: "Quick and healthy Asian-style bok choy",
    ingredients: [
      "Bok choy (1 lb)",
      "Garlic (3 cloves)",
      "Ginger (1 inch)",
      "Soy sauce (2 tbsp)",
      "Sesame oil (1 tbsp)",
      "Vegetable oil (2 tbsp)",
      "Red pepper flakes (1/2 tsp)",
      "Salt (to taste)",
      "Sesame seeds (for garnish)"
    ],
    instructions: [
      "Wash and cut bok choy into pieces",
      "Heat vegetable oil in a wok",
      "Add garlic and ginger, stir-fry for 30 seconds",
      "Add bok choy and stir-fry for 3-4 minutes",
      "Add soy sauce, sesame oil, and red pepper flakes",
      "Season with salt",
      "Garnish with sesame seeds"
    ],
    preparationTime: 10,
    cookingTime: 8,
    totalTime: 18,
    difficulty: "Easy",
    rating: 4.4,
    servings: 4,
    cuisine: "Asian",
    course: "Side Dish",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Stir+Fried+Bok+Choy+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 60,
    protein: "3g",
    carbs: "6g",
    fat: "3g"
  },
  {
    _id: "veg_4",
    name: "Ratatouille",
    description: "Classic French vegetable stew",
    ingredients: [
      "Eggplant (1 medium)",
      "Zucchini (2 medium)",
      "Bell peppers (2 medium)",
      "Tomatoes (4 medium)",
      "Onions (2 medium)",
      "Garlic (4 cloves)",
      "Fresh basil (1/4 cup)",
      "Fresh thyme (2 tbsp)",
      "Olive oil (4 tbsp)",
      "Salt and pepper (to taste)",
      "Tomato paste (2 tbsp)"
    ],
    instructions: [
      "Cut all vegetables into cubes",
      "Heat olive oil in a large pot",
      "Sauté onions and garlic until soft",
      "Add eggplant and cook for 5 minutes",
      "Add remaining vegetables and herbs",
      "Add tomato paste and simmer for 30 minutes",
      "Season with salt and pepper",
      "Serve hot or cold"
    ],
    preparationTime: 25,
    cookingTime: 35,
    totalTime: 60,
    difficulty: "Medium",
    rating: 4.7,
    servings: 6,
    cuisine: "European",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Ratatouille+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 140,
    protein: "4g",
    carbs: "20g",
    fat: "6g"
  },
  {
    _id: "veg_5",
    name: "Grilled Corn on the Cob",
    description: "Perfectly grilled corn with herb butter",
    ingredients: [
      "Corn on the cob (6 ears)",
      "Butter (4 tbsp)",
      "Fresh parsley (2 tbsp)",
      "Fresh chives (2 tbsp)",
      "Garlic powder (1 tsp)",
      "Salt and pepper (to taste)",
      "Lime wedges (for serving)"
    ],
    instructions: [
      "Preheat grill to medium-high heat",
      "Mix butter with herbs and garlic powder",
      "Grill corn for 10-12 minutes, turning occasionally",
      "Brush with herb butter",
      "Season with salt and pepper",
      "Serve with lime wedges"
    ],
    preparationTime: 10,
    cookingTime: 12,
    totalTime: 22,
    difficulty: "Easy",
    rating: 4.3,
    servings: 6,
    cuisine: "American",
    course: "Side Dish",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Grilled+Corn+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 120,
    protein: "3g",
    carbs: "18g",
    fat: "5g"
  }
];

// Add 45 more vegetable recipes to reach 50 total
const additionalVegetableRecipes = [];
for (let i = 6; i <= 50; i++) {
  const cuisines = ["Indian", "Mediterranean", "Asian", "European", "American"];
  const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  
  additionalVegetableRecipes.push({
    _id: `veg_${i}`,
    name: `Vegetable Dish ${i}`,
    description: `Delicious vegetable recipe ${i} with fresh ingredients`,
    ingredients: [
      "Mixed vegetables (400g)",
      "Olive oil (2 tbsp)",
      "Garlic (3 cloves)",
      "Salt and pepper (to taste)",
      "Fresh herbs (2 tbsp)"
    ],
    instructions: [
      "Prepare vegetables",
      "Heat oil in a pan",
      "Add garlic and vegetables",
      "Cook until tender",
      "Season with salt, pepper, and herbs",
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
    youtubeLink: "https://www.youtube.com/results?search_query=Vegetable+Dish+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 120,
    protein: "4g",
    carbs: "18g",
    fat: "4g"
  });
}

// Combine all vegetable recipes
const allVegetableRecipes = [...vegetableRecipes, ...additionalVegetableRecipes];

// Add category reference to all vegetable recipes
const recipesWithCategory = allVegetableRecipes.map(recipe => ({
  ...recipe,
  category: categories.find(cat => cat._id === "vegetarian")
}));

module.exports = {
  vegetableRecipes: recipesWithCategory,
  categories
};
