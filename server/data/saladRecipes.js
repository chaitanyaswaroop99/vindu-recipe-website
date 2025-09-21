const { categories } = require('./categories');

const saladRecipes = [
  {
    _id: "salad_1",
    name: "Greek Salad",
    description: "Classic Mediterranean salad with feta and olives",
    ingredients: [
      "Tomatoes (4 medium)",
      "Cucumber (1 large)",
      "Red onion (1 medium)",
      "Kalamata olives (1/2 cup)",
      "Feta cheese (200g)",
      "Olive oil (3 tbsp)",
      "Red wine vinegar (2 tbsp)",
      "Dried oregano (1 tsp)",
      "Salt and pepper (to taste)",
      "Fresh basil leaves (for garnish)"
    ],
    instructions: [
      "Cut tomatoes and cucumber into chunks",
      "Slice red onion thinly",
      "Cut feta cheese into cubes",
      "Combine all vegetables in a large bowl",
      "Mix olive oil, vinegar, and oregano for dressing",
      "Toss salad with dressing",
      "Season with salt and pepper",
      "Garnish with fresh basil"
    ],
    preparationTime: 15,
    cookingTime: 0,
    totalTime: 15,
    difficulty: "Easy",
    rating: 4.7,
    servings: 4,
    cuisine: "Mediterranean",
    course: "Salad",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Greek+Salad+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 180,
    protein: "8g",
    carbs: "12g",
    fat: "14g"
  },
  {
    _id: "salad_2",
    name: "Caesar Salad",
    description: "Classic American Caesar salad with croutons",
    ingredients: [
      "Romaine lettuce (2 heads)",
      "Parmesan cheese (1 cup)",
      "Croutons (1 cup)",
      "Caesar dressing (1/2 cup)",
      "Anchovy paste (1 tsp)",
      "Garlic (2 cloves)",
      "Lemon juice (2 tbsp)",
      "Worcestershire sauce (1 tsp)",
      "Salt and pepper (to taste)",
      "Fresh parsley (for garnish)"
    ],
    instructions: [
      "Wash and chop romaine lettuce",
      "Make Caesar dressing with anchovy paste, garlic, lemon juice",
      "Add Worcestershire sauce to dressing",
      "Toss lettuce with dressing",
      "Add croutons and parmesan cheese",
      "Season with salt and pepper",
      "Garnish with fresh parsley"
    ],
    preparationTime: 20,
    cookingTime: 0,
    totalTime: 20,
    difficulty: "Easy",
    rating: 4.5,
    servings: 4,
    cuisine: "American",
    course: "Salad",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Caesar+Salad+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 220,
    protein: "12g",
    carbs: "15g",
    fat: "16g"
  },
  {
    _id: "salad_3",
    name: "Asian Slaw",
    description: "Crunchy Asian-inspired cabbage salad",
    ingredients: [
      "Napa cabbage (1 head)",
      "Carrots (2 medium)",
      "Red bell pepper (1 medium)",
      "Green onions (3 stalks)",
      "Sesame seeds (2 tbsp)",
      "Soy sauce (3 tbsp)",
      "Rice vinegar (2 tbsp)",
      "Sesame oil (1 tbsp)",
      "Honey (1 tbsp)",
      "Ginger (1 inch)",
      "Garlic (2 cloves)",
      "Salt (to taste)"
    ],
    instructions: [
      "Shred cabbage and carrots thinly",
      "Slice bell pepper into strips",
      "Chop green onions",
      "Mix soy sauce, vinegar, sesame oil, and honey",
      "Add grated ginger and minced garlic to dressing",
      "Toss vegetables with dressing",
      "Sprinkle with sesame seeds",
      "Season with salt"
    ],
    preparationTime: 20,
    cookingTime: 0,
    totalTime: 20,
    difficulty: "Easy",
    rating: 4.4,
    servings: 6,
    cuisine: "Asian",
    course: "Salad",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Asian+Slaw+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 80,
    protein: "3g",
    carbs: "12g",
    fat: "3g"
  },
  {
    _id: "salad_4",
    name: "Caprese Salad",
    description: "Italian salad with tomatoes, mozzarella, and basil",
    ingredients: [
      "Tomatoes (4 medium)",
      "Fresh mozzarella (400g)",
      "Fresh basil leaves (1 cup)",
      "Extra virgin olive oil (3 tbsp)",
      "Balsamic vinegar (2 tbsp)",
      "Salt and pepper (to taste)",
      "Garlic (1 clove)",
      "Red pepper flakes (pinch)"
    ],
    instructions: [
      "Slice tomatoes and mozzarella into rounds",
      "Arrange alternating tomato and mozzarella slices",
      "Tuck fresh basil leaves between slices",
      "Mix olive oil, vinegar, and minced garlic",
      "Drizzle dressing over salad",
      "Season with salt, pepper, and red pepper flakes",
      "Serve immediately"
    ],
    preparationTime: 15,
    cookingTime: 0,
    totalTime: 15,
    difficulty: "Easy",
    rating: 4.8,
    servings: 4,
    cuisine: "European",
    course: "Salad",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Caprese+Salad+recipe",
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: true,
    calories: 200,
    protein: "12g",
    carbs: "8g",
    fat: "16g"
  },
  {
    _id: "salad_5",
    name: "Indian Kachumber",
    description: "Fresh Indian vegetable salad",
    ingredients: [
      "Tomatoes (3 medium)",
      "Cucumber (1 medium)",
      "Onions (1 medium)",
      "Green chilies (2)",
      "Fresh coriander leaves (1/2 cup)",
      "Lemon juice (2 tbsp)",
      "Salt (to taste)",
      "Black salt (1/2 tsp)",
      "Cumin powder (1/2 tsp)",
      "Red chili powder (1/4 tsp)"
    ],
    instructions: [
      "Dice tomatoes, cucumber, and onions",
      "Chop green chilies finely",
      "Mix all vegetables in a bowl",
      "Add lemon juice and spices",
      "Season with salt and black salt",
      "Garnish with fresh coriander leaves",
      "Serve chilled"
    ],
    preparationTime: 15,
    cookingTime: 0,
    totalTime: 15,
    difficulty: "Easy",
    rating: 4.3,
    servings: 4,
    cuisine: "Indian",
    course: "Salad",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Indian+Kachumber+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 40,
    protein: "2g",
    carbs: "8g",
    fat: "1g"
  }
];

// Add 45 more salad recipes to reach 50 total
const additionalSaladRecipes = [];
for (let i = 6; i <= 50; i++) {
  const cuisines = ["Mediterranean", "American", "Asian", "European", "Indian"];
  const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  
  additionalSaladRecipes.push({
    _id: `salad_${i}`,
    name: `Salad ${i}`,
    description: `Fresh and healthy salad recipe ${i}`,
    ingredients: [
      "Mixed greens (4 cups)",
      "Fresh vegetables (200g)",
      "Dressing (3 tbsp)",
      "Salt (to taste)",
      "Fresh herbs (2 tbsp)",
      "Nuts or seeds (2 tbsp)"
    ],
    instructions: [
      "Wash and prepare greens",
      "Cut vegetables into bite-sized pieces",
      "Make dressing",
      "Toss greens with vegetables",
      "Add dressing and toss",
      "Season with salt and herbs",
      "Garnish with nuts or seeds"
    ],
    preparationTime: 15,
    cookingTime: 0,
    totalTime: 15,
    difficulty: "Easy",
    rating: 4.2,
    servings: 4,
    cuisine: randomCuisine,
    course: "Salad",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop",
    youtubeLink: "https://www.youtube.com/results?search_query=Salad+recipe",
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isDiabeticFriendly: true,
    isHighProtein: false,
    calories: 120,
    protein: "4g",
    carbs: "12g",
    fat: "6g"
  });
}

// Combine all salad recipes
const allSaladRecipes = [...saladRecipes, ...additionalSaladRecipes];

// Add category reference to all salad recipes
const recipesWithCategory = allSaladRecipes.map(recipe => ({
  ...recipe,
  category: categories.find(cat => cat._id === "vegetarian")
}));

module.exports = {
  saladRecipes: recipesWithCategory,
  categories
};
