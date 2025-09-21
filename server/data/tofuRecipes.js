const { categories } = require('./categories');

const tofuRecipes = [
  {
    _id: "tofu_1",
    name: "Mapo Tofu",
    description: "Spicy Sichuan tofu with ground meat substitute",
    ingredients: [
      "Firm tofu (400g)",
      "Vegetarian ground meat (200g)",
      "Sichuan peppercorns (1 tsp)",
      "Doubanjiang (2 tbsp)",
      "Garlic (3 cloves)",
      "Ginger (1 inch)",
      "Green onions (3 stalks)",
      "Soy sauce (2 tbsp)",
      "Shaoxing wine (1 tbsp)",
      "Vegetable oil (3 tbsp)",
      "Cornstarch (1 tbsp)",
      "Salt (to taste)"
    ],
    instructions: [
      "Cut tofu into cubes and blanch in hot water",
      "Heat oil, add Sichuan peppercorns",
      "Add doubanjiang and cook until fragrant",
      "Add garlic, ginger, and vegetarian meat",
      "Add tofu and cook gently",
      "Add soy sauce and wine",
      "Thicken with cornstarch slurry",
      "Garnish with green onions"
    ],
    preparationTime: 20,
    cookingTime: 15,
    totalTime: 35,
    difficulty: "Medium",
    rating: 4.7,
    servings: 4,
    cuisine: "Asian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Mapo+Tofu+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 220,
    protein: "18g",
    carbs: "8g",
    fat: "14g"
  },
  {
    _id: "tofu_2",
    name: "Tofu Scramble",
    description: "American-style scrambled tofu breakfast",
    ingredients: [
      "Firm tofu (400g)",
      "Onions (1 medium)",
      "Bell peppers (1 medium)",
      "Turmeric powder (1 tsp)",
      "Nutritional yeast (2 tbsp)",
      "Garlic powder (1 tsp)",
      "Onion powder (1 tsp)",
      "Black salt (1/2 tsp)",
      "Oil (2 tbsp)",
      "Salt and pepper (to taste)",
      "Fresh herbs (for garnish)"
    ],
    instructions: [
      "Crumble tofu with hands",
      "Heat oil in a pan, add onions and peppers",
      "Add crumbled tofu and spices",
      "Cook for 8-10 minutes, stirring frequently",
      "Add nutritional yeast and black salt",
      "Season with salt and pepper",
      "Garnish with fresh herbs"
    ],
    preparationTime: 10,
    cookingTime: 15,
    totalTime: 25,
    difficulty: "Easy",
    rating: 4.4,
    servings: 4,
    cuisine: "American",
    course: "Breakfast",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Tofu+Scramble+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 180,
    protein: "16g",
    carbs: "6g",
    fat: "12g"
  },
  {
    _id: "tofu_3",
    name: "Tofu Schnitzel",
    description: "European-style breaded tofu cutlets",
    ingredients: [
      "Extra firm tofu (400g)",
      "Flour (1/2 cup)",
      "Eggs (2)",
      "Breadcrumbs (1 cup)",
      "Paprika (1 tsp)",
      "Garlic powder (1 tsp)",
      "Salt and pepper (to taste)",
      "Oil (for frying)",
      "Lemon wedges (for serving)",
      "Fresh parsley (for garnish)"
    ],
    instructions: [
      "Press tofu and cut into cutlets",
      "Season flour with spices",
      "Dredge tofu in flour, egg, then breadcrumbs",
      "Heat oil in a pan",
      "Fry tofu until golden brown on both sides",
      "Drain on paper towels",
      "Serve with lemon wedges and parsley"
    ],
    preparationTime: 20,
    cookingTime: 15,
    totalTime: 35,
    difficulty: "Medium",
    rating: 4.5,
    servings: 4,
    cuisine: "European",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Tofu+Schnitzel+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 280,
    protein: "18g",
    carbs: "20g",
    fat: "16g"
  },
  {
    _id: "tofu_4",
    name: "Indian Tofu Curry",
    description: "Tofu in spiced Indian curry sauce",
    ingredients: [
      "Firm tofu (400g)",
      "Onions (2 medium)",
      "Tomatoes (3 medium)",
      "Ginger-garlic paste (2 tbsp)",
      "Curry powder (2 tbsp)",
      "Turmeric powder (1 tsp)",
      "Red chili powder (1 tbsp)",
      "Cumin seeds (1 tsp)",
      "Mustard seeds (1 tsp)",
      "Coconut milk (1 cup)",
      "Oil (3 tbsp)",
      "Salt (to taste)",
      "Fresh coriander leaves (for garnish)"
    ],
    instructions: [
      "Cut tofu into cubes and pan-fry until golden",
      "Heat oil, add mustard and cumin seeds",
      "Add onions and cook until golden",
      "Add ginger-garlic paste and spices",
      "Add tomatoes and cook until soft",
      "Add coconut milk and simmer",
      "Add tofu and cook for 10 minutes",
      "Garnish with coriander leaves"
    ],
    preparationTime: 20,
    cookingTime: 25,
    totalTime: 45,
    difficulty: "Medium",
    rating: 4.3,
    servings: 4,
    cuisine: "Indian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Indian+Tofu+Curry+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 240,
    protein: "16g",
    carbs: "12g",
    fat: "16g"
  },
  {
    _id: "tofu_5",
    name: "Tofu Teriyaki",
    description: "Japanese-style teriyaki tofu",
    ingredients: [
      "Firm tofu (400g)",
      "Soy sauce (3 tbsp)",
      "Mirin (2 tbsp)",
      "Sake (1 tbsp)",
      "Brown sugar (2 tbsp)",
      "Garlic (2 cloves)",
      "Ginger (1 inch)",
      "Sesame oil (1 tbsp)",
      "Cornstarch (1 tbsp)",
      "Green onions (2 stalks)",
      "Sesame seeds (for garnish)"
    ],
    instructions: [
      "Cut tofu into cubes and pan-fry until golden",
      "Mix soy sauce, mirin, sake, and sugar for teriyaki sauce",
      "Heat sesame oil, add garlic and ginger",
      "Add teriyaki sauce and bring to a boil",
      "Add tofu and cook until sauce thickens",
      "Garnish with green onions and sesame seeds"
    ],
    preparationTime: 15,
    cookingTime: 15,
    totalTime: 30,
    difficulty: "Easy",
    rating: 4.6,
    servings: 4,
    cuisine: "Asian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Tofu+Teriyaki+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 200,
    protein: "16g",
    carbs: "10g",
    fat: "12g"
  }
];

// Add 45 more tofu recipes to reach 50 total
const additionalTofuRecipes = [];
for (let i = 6; i <= 50; i++) {
  const cuisines = ["Asian", "American", "European", "Indian"];
  const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  
  additionalTofuRecipes.push({
    _id: `tofu_${i}`,
    name: `Tofu Dish ${i}`,
    description: `Delicious tofu recipe ${i} with plant-based protein`,
    ingredients: [
      "Firm tofu (400g)",
      "Mixed vegetables (200g)",
      "Sauce (3 tbsp)",
      "Oil (2 tbsp)",
      "Salt (to taste)",
      "Fresh herbs (2 tbsp)"
    ],
    instructions: [
      "Cut tofu into cubes",
      "Heat oil in a pan",
      "Add vegetables and cook until tender",
      "Add tofu and sauce",
      "Cook until heated through",
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
    youtubeLink: "https://www.youtube.com/results?search_query=Tofu+Dish+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 180,
    protein: "14g",
    carbs: "8g",
    fat: "10g"
  });
}

// Combine all tofu recipes
const allTofuRecipes = [...tofuRecipes, ...additionalTofuRecipes];

// Add category reference to all tofu recipes
const recipesWithCategory = allTofuRecipes.map(recipe => ({
  ...recipe,
  category: categories.find(cat => cat._id === "vegetarian")
}));

module.exports = {
  tofuRecipes: recipesWithCategory,
  categories
};
