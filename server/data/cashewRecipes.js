const { categories } = require('./categories');

const cashewRecipes = [
  {
    _id: "cashew_1",
    name: "Cashew Curry",
    description: "Rich and creamy cashew curry with vegetables",
    ingredients: [
      "Raw cashews (1 cup)",
      "Mixed vegetables (carrots, peas, potatoes) (400g)",
      "Onions (2 medium)",
      "Tomatoes (3 medium)",
      "Ginger-garlic paste (2 tbsp)",
      "Curry powder (2 tbsp)",
      "Turmeric powder (1 tsp)",
      "Red chili powder (1 tbsp)",
      "Coconut milk (1 cup)",
      "Oil (3 tbsp)",
      "Salt (to taste)",
      "Fresh coriander leaves (for garnish)"
    ],
    instructions: [
      "Soak cashews in hot water for 30 minutes",
      "Blend cashews with coconut milk until smooth",
      "Heat oil, add onions and cook until golden",
      "Add ginger-garlic paste and spices",
      "Add tomatoes and cook until soft",
      "Add vegetables and cashew-coconut mixture",
      "Simmer for 20 minutes until vegetables are tender",
      "Garnish with coriander leaves"
    ],
    preparationTime: 30,
    cookingTime: 30,
    totalTime: 60,
    difficulty: "Medium",
    rating: 4.7,
    servings: 4,
    cuisine: "Indian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Cashew+Curry+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 320,
    protein: "12g",
    carbs: "25g",
    fat: "22g"
  },
  {
    _id: "cashew_2",
    name: "Cashew Stir Fry",
    description: "Asian-style cashew vegetable stir fry",
    ingredients: [
      "Raw cashews (1 cup)",
      "Broccoli (1 head)",
      "Bell peppers (2 medium)",
      "Snow peas (1 cup)",
      "Garlic (3 cloves)",
      "Ginger (1 inch)",
      "Soy sauce (3 tbsp)",
      "Oyster sauce (2 tbsp)",
      "Sesame oil (1 tbsp)",
      "Vegetable oil (2 tbsp)",
      "Green onions (2 stalks)",
      "Salt (to taste)"
    ],
    instructions: [
      "Roast cashews in a dry pan until golden",
      "Cut vegetables into bite-sized pieces",
      "Heat oil in a wok, add garlic and ginger",
      "Add vegetables and stir-fry for 3-4 minutes",
      "Add cashews and sauces",
      "Stir-fry for 2-3 minutes",
      "Garnish with green onions",
      "Season with salt"
    ],
    preparationTime: 15,
    cookingTime: 12,
    totalTime: 27,
    difficulty: "Easy",
    rating: 4.5,
    servings: 4,
    cuisine: "Asian",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Cashew+Stir+Fry+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 280,
    protein: "10g",
    carbs: "18g",
    fat: "20g"
  },
  {
    _id: "cashew_3",
    name: "Mediterranean Cashew Pesto",
    description: "Creamy cashew pesto with Mediterranean herbs",
    ingredients: [
      "Raw cashews (1 cup)",
      "Fresh basil (2 cups)",
      "Garlic (4 cloves)",
      "Extra virgin olive oil (1/2 cup)",
      "Lemon juice (2 tbsp)",
      "Nutritional yeast (2 tbsp)",
      "Salt and pepper (to taste)",
      "Pasta (400g)",
      "Cherry tomatoes (1 cup)",
      "Parmesan cheese (1/2 cup)"
    ],
    instructions: [
      "Soak cashews in hot water for 30 minutes",
      "Blend cashews, basil, garlic, and olive oil",
      "Add lemon juice and nutritional yeast",
      "Season with salt and pepper",
      "Cook pasta according to package directions",
      "Toss pasta with cashew pesto",
      "Add cherry tomatoes and parmesan cheese",
      "Serve immediately"
    ],
    preparationTime: 30,
    cookingTime: 15,
    totalTime: 45,
    difficulty: "Easy",
    rating: 4.6,
    servings: 4,
    cuisine: "Mediterranean",
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Mediterranean+Cashew+Pesto+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 420,
    protein: "16g",
    carbs: "45g",
    fat: "22g"
  },
  {
    _id: "cashew_4",
    name: "American Cashew Cheese",
    description: "Creamy cashew-based cheese spread",
    ingredients: [
      "Raw cashews (2 cups)",
      "Nutritional yeast (1/4 cup)",
      "Lemon juice (3 tbsp)",
      "Apple cider vinegar (1 tbsp)",
      "Garlic powder (1 tsp)",
      "Onion powder (1 tsp)",
      "Salt (1 tsp)",
      "Water (1/2 cup)",
      "Fresh herbs (2 tbsp)",
      "Crackers (for serving)"
    ],
    instructions: [
      "Soak cashews in hot water for 2 hours",
      "Drain and blend cashews until smooth",
      "Add nutritional yeast, lemon juice, and vinegar",
      "Add spices and blend until creamy",
      "Add water gradually until desired consistency",
      "Season with salt",
      "Mix in fresh herbs",
      "Serve with crackers"
    ],
    preparationTime: 15,
    cookingTime: 0,
    totalTime: 15,
    difficulty: "Easy",
    rating: 4.4,
    servings: 8,
    cuisine: "American",
    course: "Appetizer",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=American+Cashew+Cheese+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 180,
    protein: "8g",
    carbs: "8g",
    fat: "14g"
  },
  {
    _id: "cashew_5",
    name: "Cashew Milk",
    description: "Creamy homemade cashew milk",
    ingredients: [
      "Raw cashews (1 cup)",
      "Water (4 cups)",
      "Vanilla extract (1 tsp)",
      "Honey or maple syrup (2 tbsp)",
      "Salt (pinch)",
      "Nutmeg (pinch)"
    ],
    instructions: [
      "Soak cashews in water for 4-6 hours",
      "Drain and rinse cashews",
      "Blend cashews with fresh water",
      "Strain through cheesecloth or nut milk bag",
      "Add vanilla, sweetener, salt, and nutmeg",
      "Blend again until smooth",
      "Store in refrigerator for up to 5 days",
      "Shake well before using"
    ],
    preparationTime: 10,
    cookingTime: 0,
    totalTime: 10,
    difficulty: "Easy",
    rating: 4.3,
    servings: 4,
    cuisine: "International",
    course: "Beverage",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Cashew+Milk+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 120,
    protein: "4g",
    carbs: "8g",
    fat: "8g"
  }
];

// Add 45 more cashew recipes to reach 50 total
const additionalCashewRecipes = [];
for (let i = 6; i <= 50; i++) {
  const cuisines = ["Indian", "Asian", "Mediterranean", "American"];
  const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  
  additionalCashewRecipes.push({
    _id: `cashew_${i}`,
    name: `Cashew Dish ${i}`,
    description: `Rich and creamy cashew recipe ${i}`,
    ingredients: [
      "Raw cashews (1 cup)",
      "Mixed ingredients (200g)",
      "Spices (2 tbsp)",
      "Oil (2 tbsp)",
      "Salt (to taste)",
      "Fresh herbs (2 tbsp)"
    ],
    instructions: [
      "Soak cashews in hot water",
      "Prepare other ingredients",
      "Heat oil in a pan",
      "Add spices and ingredients",
      "Add cashews and cook until golden",
      "Season with salt and herbs",
      "Serve hot"
    ],
    preparationTime: 20,
    cookingTime: 20,
    totalTime: 40,
    difficulty: "Easy",
    rating: 4.2,
    servings: 4,
    cuisine: randomCuisine,
    course: "Main Course",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Cashew+Dish+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: false,
    isHighProtein: true,
    calories: 280,
    protein: "10g",
    carbs: "15g",
    fat: "20g"
  });
}

// Combine all cashew recipes
const allCashewRecipes = [...cashewRecipes, ...additionalCashewRecipes];

// Add category reference to all cashew recipes
const recipesWithCategory = allCashewRecipes.map(recipe => ({
  ...recipe,
  category: categories.find(cat => cat._id === "vegetarian")
}));

module.exports = {
  cashewRecipes: recipesWithCategory,
  categories
};
