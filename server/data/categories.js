// Categories for organizing recipes
const categories = [
  {
    _id: "non_vegetarian",
    name: "Non-Vegetarian",
    description: "Delicious meat-based recipes including chicken, beef, pork, and seafood",
    color: "#FF6B6B",
    icon: "🍗",
    recipeCount: 156, // Updated: 50 chicken + 26 seafood + 25 lamb + 25 goat + 15 beef + 15 pork
    hasSubcategories: true,
           subcategories: [
             {
               _id: "chicken",
               name: "Chicken",
               description: "Delicious chicken recipes from around the world",
               icon: "🐔",
               recipeCount: 50,
               hasCuisines: true,
               cuisines: [
                 {
                   _id: "chicken_indian",
                   name: "Indian",
                   description: "Spiced chicken dishes from India",
                   icon: "🍛",
                   recipeCount: 15
                 },
                 {
                   _id: "chicken_mediterranean",
                   name: "Mediterranean",
                   description: "Fresh and flavorful Mediterranean chicken",
                   icon: "🌿",
                   recipeCount: 8
                 },
                 {
                   _id: "chicken_american",
                   name: "American",
                   description: "Classic American chicken recipes",
                   icon: "🇺🇸",
                   recipeCount: 10
                 },
                 {
                   _id: "chicken_asian",
                   name: "Asian",
                   description: "Asian-inspired chicken dishes",
                   icon: "🥢",
                   recipeCount: 12
                 },
                 {
                   _id: "chicken_italian",
                   name: "Italian",
                   description: "Italian chicken specialties",
                   icon: "🍝",
                   recipeCount: 5
                 }
               ]
             },
             {
               _id: "beef",
               name: "Beef",
               description: "Tasty beef recipes and steaks",
               icon: "🥩",
               recipeCount: 15,
               hasCuisines: true,
               cuisines: [
                 {
                   _id: "beef_american",
                   name: "American",
                   description: "Classic American beef dishes",
                   icon: "🇺🇸",
                   recipeCount: 6
                 },
                 {
                   _id: "beef_asian",
                   name: "Asian",
                   description: "Asian-inspired beef dishes",
                   icon: "🥢",
                   recipeCount: 3
                 },
                 {
                   _id: "beef_european",
                   name: "European",
                   description: "Traditional European beef recipes",
                   icon: "🇪🇺",
                   recipeCount: 4
                 },
                 {
                   _id: "beef_indian",
                   name: "Indian",
                   description: "Spiced Indian beef dishes",
                   icon: "🍛",
                   recipeCount: 1
                 },
                 {
                   _id: "beef_other",
                   name: "Other",
                   description: "Other international beef dishes",
                   icon: "🌍",
                   recipeCount: 1
                 }
               ]
             },
             {
               _id: "pork",
               name: "Pork",
               description: "Savory pork dishes and recipes",
               icon: "🐷",
               recipeCount: 15,
               hasCuisines: true,
               cuisines: [
                 {
                   _id: "pork_american",
                   name: "American",
                   description: "Classic American pork dishes",
                   icon: "🇺🇸",
                   recipeCount: 3
                 },
                 {
                   _id: "pork_asian",
                   name: "Asian",
                   description: "Asian-inspired pork dishes",
                   icon: "🥢",
                   recipeCount: 3
                 },
                 {
                   _id: "pork_european",
                   name: "European",
                   description: "Traditional European pork recipes",
                   icon: "🇪🇺",
                   recipeCount: 5
                 },
                 {
                   _id: "pork_indian",
                   name: "Indian",
                   description: "Spiced Indian pork dishes",
                   icon: "🍛",
                   recipeCount: 1
                 },
                 {
                   _id: "pork_mediterranean",
                   name: "Mediterranean",
                   description: "Mediterranean pork specialties",
                   icon: "🌿",
                   recipeCount: 1
                 },
                 {
                   _id: "pork_other",
                   name: "Other",
                   description: "Other international pork dishes",
                   icon: "🌍",
                   recipeCount: 2
                 }
               ]
             },
             {
               _id: "seafood",
               name: "Seafood",
               description: "Fresh fish and seafood recipes",
               icon: "🐟",
               recipeCount: 26,
               hasCuisines: true,
               cuisines: [
                 {
                   _id: "seafood_indian",
                   name: "Indian",
                   description: "Spiced Indian seafood dishes",
                   icon: "🍛",
                   recipeCount: 5
                 },
                 {
                   _id: "seafood_mediterranean",
                   name: "Mediterranean",
                   description: "Fresh Mediterranean seafood",
                   icon: "🌊",
                   recipeCount: 6
                 },
                 {
                   _id: "seafood_italian",
                   name: "Italian",
                   description: "Classic Italian seafood dishes",
                   icon: "🍝",
                   recipeCount: 4
                 },
                 {
                   _id: "seafood_american",
                   name: "American",
                   description: "American seafood favorites",
                   icon: "🇺🇸",
                   recipeCount: 5
                 },
                 {
                   _id: "seafood_french",
                   name: "French",
                   description: "Elegant French seafood cuisine",
                   icon: "🇫🇷",
                   recipeCount: 3
                 },
                 {
                   _id: "seafood_asian",
                   name: "Asian",
                   description: "Asian seafood specialties",
                   icon: "🥢",
                   recipeCount: 3
                 }
               ]
             },
             {
               _id: "lamb",
               name: "Lamb",
               description: "Tender lamb dishes and traditional recipes",
               icon: "🐑",
               recipeCount: 25,
               hasCuisines: true,
               cuisines: [
                 {
                   _id: "lamb_indian",
                   name: "Indian",
                   description: "Spiced Indian lamb dishes",
                   icon: "🍛",
                   recipeCount: 8
                 },
                 {
                   _id: "lamb_mediterranean",
                   name: "Mediterranean",
                   description: "Mediterranean lamb specialties",
                   icon: "🌿",
                   recipeCount: 6
                 },
                 {
                   _id: "lamb_european",
                   name: "European",
                   description: "Classic European lamb dishes",
                   icon: "🇪🇺",
                   recipeCount: 4
                 },
                 {
                   _id: "lamb_middle_eastern",
                   name: "Middle Eastern",
                   description: "Middle Eastern lamb recipes",
                   icon: "🌙",
                   recipeCount: 4
                 },
                 {
                   _id: "lamb_other",
                   name: "Other",
                   description: "Other international lamb dishes",
                   icon: "🌍",
                   recipeCount: 3
                 }
               ]
             },
             {
               _id: "goat",
               name: "Goat",
               description: "Flavorful goat meat recipes and curries",
               icon: "🐐",
               recipeCount: 25,
               hasCuisines: true,
               cuisines: [
                 {
                   _id: "goat_indian",
                   name: "Indian",
                   description: "Traditional Indian goat dishes",
                   icon: "🍛",
                   recipeCount: 12
                 },
                 {
                   _id: "goat_mediterranean",
                   name: "Mediterranean",
                   description: "Mediterranean goat specialties",
                   icon: "🌿",
                   recipeCount: 5
                 },
                 {
                   _id: "goat_european",
                   name: "European",
                   description: "European goat recipes",
                   icon: "🇪🇺",
                   recipeCount: 3
                 },
                 {
                   _id: "goat_middle_eastern",
                   name: "Middle Eastern",
                   description: "Middle Eastern goat dishes",
                   icon: "🌙",
                   recipeCount: 3
                 },
                 {
                   _id: "goat_other",
                   name: "Other",
                   description: "Other international goat dishes",
                   icon: "🌍",
                   recipeCount: 2
                 }
               ]
             }
           ]
  },
  {
    _id: "vegetarian",
    name: "Vegetarian",
    description: "Plant-based recipes without meat or fish",
    color: "#4ECDC4",
    icon: "🥗",
    recipeCount: 300, // 50 recipes × 6 subcategories
    hasSubcategories: true,
    subcategories: [
      {
        _id: "vegetables",
        name: "Vegetables",
        description: "Fresh and flavorful vegetable dishes",
        icon: "🥕",
        recipeCount: 50,
        hasCuisines: true,
        cuisines: [
          {
            _id: "veg_indian",
            name: "Indian",
            description: "Spiced Indian vegetable dishes",
            icon: "🍛",
            recipeCount: 15
          },
          {
            _id: "veg_mediterranean",
            name: "Mediterranean",
            description: "Fresh Mediterranean vegetables",
            icon: "🌿",
            recipeCount: 10
          },
          {
            _id: "veg_asian",
            name: "Asian",
            description: "Asian-inspired vegetable dishes",
            icon: "🥢",
            recipeCount: 10
          },
          {
            _id: "veg_european",
            name: "European",
            description: "Classic European vegetable recipes",
            icon: "🇪🇺",
            recipeCount: 8
          },
          {
            _id: "veg_american",
            name: "American",
            description: "American vegetable specialties",
            icon: "🇺🇸",
            recipeCount: 7
          }
        ]
      },
      {
        _id: "paneer",
        name: "Paneer",
        description: "Delicious paneer (cottage cheese) recipes",
        icon: "🧀",
        recipeCount: 50,
        hasCuisines: true,
        cuisines: [
          {
            _id: "paneer_indian",
            name: "Indian",
            description: "Traditional Indian paneer dishes",
            icon: "🍛",
            recipeCount: 25
          },
          {
            _id: "paneer_mediterranean",
            name: "Mediterranean",
            description: "Mediterranean paneer specialties",
            icon: "🌿",
            recipeCount: 10
          },
          {
            _id: "paneer_asian",
            name: "Asian",
            description: "Asian paneer fusion dishes",
            icon: "🥢",
            recipeCount: 8
          },
          {
            _id: "paneer_european",
            name: "European",
            description: "European paneer recipes",
            icon: "🇪🇺",
            recipeCount: 7
          }
        ]
      },
      {
        _id: "tofu",
        name: "Tofu",
        description: "Versatile tofu recipes and preparations",
        icon: "🥄",
        recipeCount: 50,
        hasCuisines: true,
        cuisines: [
          {
            _id: "tofu_asian",
            name: "Asian",
            description: "Traditional Asian tofu dishes",
            icon: "🥢",
            recipeCount: 20
          },
          {
            _id: "tofu_american",
            name: "American",
            description: "American tofu specialties",
            icon: "🇺🇸",
            recipeCount: 12
          },
          {
            _id: "tofu_european",
            name: "European",
            description: "European tofu recipes",
            icon: "🇪🇺",
            recipeCount: 10
          },
          {
            _id: "tofu_indian",
            name: "Indian",
            description: "Indian tofu fusion dishes",
            icon: "🍛",
            recipeCount: 8
          }
        ]
      },
      {
        _id: "salads",
        name: "Salads",
        description: "Fresh and healthy salad recipes",
        icon: "🥗",
        recipeCount: 50,
        hasCuisines: true,
        cuisines: [
          {
            _id: "salad_mediterranean",
            name: "Mediterranean",
            description: "Fresh Mediterranean salads",
            icon: "🌿",
            recipeCount: 15
          },
          {
            _id: "salad_american",
            name: "American",
            description: "Classic American salads",
            icon: "🇺🇸",
            recipeCount: 12
          },
          {
            _id: "salad_asian",
            name: "Asian",
            description: "Asian-inspired salads",
            icon: "🥢",
            recipeCount: 10
          },
          {
            _id: "salad_european",
            name: "European",
            description: "European salad specialties",
            icon: "🇪🇺",
            recipeCount: 8
          },
          {
            _id: "salad_indian",
            name: "Indian",
            description: "Indian salad recipes",
            icon: "🍛",
            recipeCount: 5
          }
        ]
      },
      {
        _id: "cashews",
        name: "Cashews",
        description: "Rich and creamy cashew-based recipes",
        icon: "🥜",
        recipeCount: 50,
        hasCuisines: true,
        cuisines: [
          {
            _id: "cashew_indian",
            name: "Indian",
            description: "Traditional Indian cashew dishes",
            icon: "🍛",
            recipeCount: 20
          },
          {
            _id: "cashew_asian",
            name: "Asian",
            description: "Asian cashew specialties",
            icon: "🥢",
            recipeCount: 12
          },
          {
            _id: "cashew_mediterranean",
            name: "Mediterranean",
            description: "Mediterranean cashew recipes",
            icon: "🌿",
            recipeCount: 10
          },
          {
            _id: "cashew_american",
            name: "American",
            description: "American cashew dishes",
            icon: "🇺🇸",
            recipeCount: 8
          }
        ]
      },
      {
        _id: "dal",
        name: "Dal",
        description: "Traditional lentil and pulse recipes",
        icon: "🫘",
        recipeCount: 50,
        hasCuisines: true,
        cuisines: [
          {
            _id: "dal_indian",
            name: "Indian",
            description: "Traditional Indian dal recipes",
            icon: "🍛",
            recipeCount: 30
          },
          {
            _id: "dal_asian",
            name: "Asian",
            description: "Asian lentil dishes",
            icon: "🥢",
            recipeCount: 8
          },
          {
            _id: "dal_mediterranean",
            name: "Mediterranean",
            description: "Mediterranean lentil recipes",
            icon: "🌿",
            recipeCount: 6
          },
          {
            _id: "dal_european",
            name: "European",
            description: "European lentil specialties",
            icon: "🇪🇺",
            recipeCount: 6
          }
        ]
      }
    ]
  },
  {
    _id: "vegan",
    name: "Vegan",
    description: "Completely plant-based recipes without any animal products",
    color: "#45B7D1",
    icon: "🌱",
    recipeCount: 50,
    hasSubcategories: false
  },
  {
    _id: "desserts",
    name: "Desserts",
    description: "Sweet treats and desserts for every occasion",
    color: "#96CEB4",
    icon: "🍰",
    recipeCount: 50,
    hasSubcategories: false
  }
];

module.exports = { categories };
