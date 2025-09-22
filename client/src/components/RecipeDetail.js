import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiStar, FiUsers, FiPlay, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';

const RecipeContainer = styled.div`
  padding: 120px 0 80px;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const RecipeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const RecipeImageSection = styled.div`
  position: relative;
  height: 400px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const RecipeInfoSection = styled.div`
  padding: 2rem;
`;

const RecipeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const RecipeDescription = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const RecipeMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #666;
`;

const MetaIcon = styled.div`
  color: #28a745;
  font-size: 1.1rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: #e9ecef;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const SectionContent = styled.div`
  padding: 0 1rem 1rem;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
  color: #666;
  font-size: 1rem;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '•';
    color: #28a745;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const InstructionsList = styled.ol`
  padding-left: 1.5rem;
`;

const InstructionItem = styled.li`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const WatchButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #28a745;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #218838;
  }
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #5a6268;
  }
`;

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);

  // Static recipe data with comprehensive details
  const getRecipeData = () => {
    const recipes = {
      // Chicken recipes
      'chicken_1': {
        _id: 'chicken_1',
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces, a classic North Indian dish that\'s rich, flavorful, and perfect with naan or rice.',
        image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600&h=400&fit=crop&crop=center',
        rating: 4.8,
        totalTime: 45,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces (boneless or with bone)',
          '2 large onions, finely chopped',
          '4 tomatoes, pureed',
          '1 cup heavy cream',
          '2 tbsp butter',
          '1 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala',
          '1 tsp cumin powder',
          'Salt to taste',
          'Fresh coriander leaves for garnish',
          'Kasuri methi (dried fenugreek leaves)',
          '1 cup yogurt for marination',
          '2 tbsp oil'
        ],
        instructions: [
          'Marinate chicken with yogurt, ginger-garlic paste, turmeric, and red chili powder for 30 minutes',
          'Heat butter in a pan and add chopped onions. Cook until golden brown',
          'Add tomato puree and cook until oil separates from the mixture',
          'Add marinated chicken and cook for 10-15 minutes until chicken is tender',
          'Add cream, garam masala, and kasuri methi',
          'Simmer for 10 minutes until the curry thickens',
          'Garnish with fresh coriander leaves and serve hot with naan or rice'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_2': {
        _id: 'chicken_2',
        name: 'Chicken Tikka Masala',
        description: 'Grilled chicken in spiced tomato cream sauce, a popular British-Indian fusion dish that\'s aromatic and delicious.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&crop=center',
        rating: 4.6,
        totalTime: 50,
        servings: 6,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '600g boneless chicken, cut into pieces',
          '1 cup yogurt',
          '2 tbsp lemon juice',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala',
          '2 large onions, chopped',
          '4 tomatoes, pureed',
          '1 cup heavy cream',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh coriander leaves',
          '1 tsp cumin seeds',
          '2 bay leaves'
        ],
        instructions: [
          'Marinate chicken with yogurt, lemon juice, ginger-garlic paste, and spices for 2 hours',
          'Grill or pan-fry the marinated chicken until cooked and slightly charred',
          'Heat oil in a pan and add cumin seeds and bay leaves',
          'Sauté onions until golden brown',
          'Add tomato puree and cook until oil separates',
          'Add cream and cooked chicken pieces',
          'Simmer for 10-15 minutes until flavors blend',
          'Garnish with fresh coriander and serve with rice or naan'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_3': {
        _id: 'chicken_3',
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice layered with spiced chicken, a royal dish that\'s perfect for special occasions.',
        image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=600&h=400&fit=crop&crop=center',
        rating: 4.9,
        totalTime: 90,
        servings: 6,
        difficulty: 'Hard',
        cuisine: 'Indian',
        ingredients: [
          '500g basmati rice',
          '600g chicken pieces',
          '2 large onions, sliced',
          '1 cup yogurt',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala',
          '2 bay leaves',
          '4 cardamom pods',
          '4 cloves',
          '1 cinnamon stick',
          '1 tsp saffron strands',
          '2 tbsp ghee',
          'Salt to taste',
          'Fresh mint leaves',
          'Fresh coriander leaves',
          '2 cups water'
        ],
        instructions: [
          'Soak rice for 30 minutes and parboil with whole spices',
          'Marinate chicken with yogurt, ginger-garlic paste, and spices for 1 hour',
          'Heat ghee and fry sliced onions until golden brown',
          'Cook marinated chicken until tender and oil separates',
          'Layer half the rice in a heavy-bottomed pot',
          'Add chicken mixture and fried onions',
          'Top with remaining rice and saffron milk',
          'Cover and cook on dum (steam) for 20-25 minutes',
          'Garnish with fresh herbs and serve hot'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_4': {
        _id: 'chicken_4',
        name: 'Chicken Curry',
        description: 'Traditional Indian chicken curry with aromatic spices, a classic comfort food that\'s hearty and satisfying.',
        image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600&h=400&fit=crop&crop=center',
        rating: 4.5,
        totalTime: 40,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '2 onions, finely chopped',
          '3 tomatoes, chopped',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp coriander powder',
          '1 tsp cumin powder',
          '1 tsp garam masala',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh coriander leaves',
          '2 green chilies',
          '1 tsp mustard seeds'
        ],
        instructions: [
          'Heat oil in a pan and add mustard seeds',
          'Add chopped onions and cook until golden',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add tomatoes and cook until soft',
          'Add all spices and cook until oil separates',
          'Add chicken pieces and cook for 15-20 minutes',
          'Add water if needed and simmer until chicken is tender',
          'Garnish with fresh coriander and serve'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_5': {
        _id: 'chicken_5',
        name: 'Chicken Korma',
        description: 'Mild and creamy chicken curry with cashews, a rich and aromatic dish perfect for those who prefer less spicy food.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&crop=center',
        rating: 4.4,
        totalTime: 55,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '1 cup cashews, soaked',
          '1 cup yogurt',
          '2 onions, sliced',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp garam masala',
          '1 tsp cardamom powder',
          '2 tbsp ghee',
          'Salt to taste',
          'Fresh coriander leaves',
          '1 cup cream',
          '2 bay leaves',
          '4 cloves'
        ],
        instructions: [
          'Grind soaked cashews with yogurt to make a smooth paste',
          'Heat ghee and add bay leaves and cloves',
          'Add sliced onions and cook until golden',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add chicken and cook for 10 minutes',
          'Add cashew-yogurt paste and cook for 15 minutes',
          'Add cream and garam masala',
          'Simmer for 10 minutes and garnish with coriander'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      // More chicken recipes
      'chicken_6': {
        _id: 'chicken_6',
        name: 'Chicken Vindaloo',
        description: 'Spicy Goan chicken curry with vinegar and chilies, a fiery dish that packs a punch.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&crop=center',
        rating: 4.7,
        totalTime: 60,
        servings: 4,
        difficulty: 'Hard',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '2 large onions, sliced',
          '4 tomatoes, chopped',
          '2 tbsp vinegar',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '2 tsp red chili powder',
          '1 tsp garam masala',
          '1 tsp cumin seeds',
          '2 bay leaves',
          '4 cloves',
          '1 cinnamon stick',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh coriander leaves'
        ],
        instructions: [
          'Marinate chicken with vinegar, ginger-garlic paste, and spices for 1 hour',
          'Heat oil and add cumin seeds, bay leaves, cloves, and cinnamon',
          'Add sliced onions and cook until golden brown',
          'Add tomatoes and cook until soft',
          'Add marinated chicken and cook for 20 minutes',
          'Add water and simmer for 30 minutes until chicken is tender',
          'Garnish with fresh coriander and serve hot'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_7': {
        _id: 'chicken_7',
        name: 'Chicken Do Pyaza',
        description: 'Chicken curry with double onions and spices, a flavorful dish with caramelized onions.',
        image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600&h=400&fit=crop&crop=center',
        rating: 4.3,
        totalTime: 45,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '4 large onions (2 sliced, 2 chopped)',
          '3 tomatoes, chopped',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala',
          '1 tsp cumin powder',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh coriander leaves',
          '2 green chilies'
        ],
        instructions: [
          'Heat oil and fry sliced onions until golden brown, set aside',
          'In the same oil, add chopped onions and cook until soft',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add tomatoes and cook until soft',
          'Add spices and cook until oil separates',
          'Add chicken and cook for 15 minutes',
          'Add fried onions and simmer for 10 minutes',
          'Garnish with fresh coriander and serve'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_8': {
        _id: 'chicken_8',
        name: 'Chicken Chettinad',
        description: 'Spicy South Indian chicken curry with coconut, a traditional Tamil Nadu specialty.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&crop=center',
        rating: 4.6,
        totalTime: 50,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '1 cup grated coconut',
          '2 onions, chopped',
          '3 tomatoes, chopped',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '2 tsp red chili powder',
          '1 tsp garam masala',
          '1 tsp fennel seeds',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh curry leaves',
          'Fresh coriander leaves'
        ],
        instructions: [
          'Grind coconut with fennel seeds to make a paste',
          'Heat oil and add curry leaves',
          'Add onions and cook until golden',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add tomatoes and cook until soft',
          'Add chicken and cook for 15 minutes',
          'Add coconut paste and simmer for 15 minutes',
          'Garnish with fresh coriander and serve'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_9': {
        _id: 'chicken_9',
        name: 'Chicken Makhani',
        description: 'Rich butter chicken with cream and tomatoes, a luxurious North Indian delicacy.',
        image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600&h=400&fit=crop&crop=center',
        rating: 4.8,
        totalTime: 45,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '2 large onions, chopped',
          '4 tomatoes, pureed',
          '1 cup heavy cream',
          '3 tbsp butter',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala',
          '1 tsp kasuri methi',
          'Salt to taste',
          'Fresh coriander leaves',
          '1 cup yogurt for marination'
        ],
        instructions: [
          'Marinate chicken with yogurt and spices for 30 minutes',
          'Heat butter and cook onions until golden',
          'Add tomato puree and cook until oil separates',
          'Add marinated chicken and cook for 15 minutes',
          'Add cream and kasuri methi',
          'Simmer for 10 minutes until thick',
          'Garnish with fresh coriander and serve'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_10': {
        _id: 'chicken_10',
        name: 'Chicken Kadai',
        description: 'Spicy chicken curry cooked in a kadai with bell peppers, a popular restaurant-style dish.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&crop=center',
        rating: 4.5,
        totalTime: 35,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '2 bell peppers, sliced',
          '2 onions, sliced',
          '3 tomatoes, chopped',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '2 tsp red chili powder',
          '1 tsp garam masala',
          '1 tsp cumin seeds',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh coriander leaves',
          '2 green chilies'
        ],
        instructions: [
          'Heat oil and add cumin seeds',
          'Add sliced onions and cook until golden',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add tomatoes and cook until soft',
          'Add chicken and cook for 15 minutes',
          'Add bell peppers and cook for 10 minutes',
          'Add spices and simmer for 5 minutes',
          'Garnish with fresh coriander and serve'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_11': {
        _id: 'chicken_11',
        name: 'Chicken Rogan Josh',
        description: 'Kashmiri chicken curry with yogurt and spices, a traditional dish from Kashmir.',
        image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=600&h=400&fit=crop&crop=center',
        rating: 4.4,
        totalTime: 55,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '2 onions, sliced',
          '1 cup yogurt',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala',
          '1 tsp fennel seeds',
          '2 bay leaves',
          '4 cloves',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh coriander leaves'
        ],
        instructions: [
          'Marinate chicken with yogurt and spices for 1 hour',
          'Heat oil and add bay leaves and cloves',
          'Add sliced onions and cook until golden',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add marinated chicken and cook for 20 minutes',
          'Add water and simmer for 30 minutes',
          'Garnish with fresh coriander and serve'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'chicken_12': {
        _id: 'chicken_12',
        name: 'Chicken Jalfrezi',
        description: 'Stir-fried chicken with vegetables and spices, a popular Indo-Chinese fusion dish.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&crop=center',
        rating: 4.3,
        totalTime: 30,
        servings: 4,
        difficulty: 'Easy',
        cuisine: 'Indian',
        ingredients: [
          '500g chicken pieces',
          '1 bell pepper, sliced',
          '1 onion, sliced',
          '2 tomatoes, chopped',
          '2 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala',
          '2 tbsp oil',
          'Salt to taste',
          'Fresh coriander leaves',
          '2 green chilies'
        ],
        instructions: [
          'Heat oil in a wok or large pan',
          'Add chicken and stir-fry for 10 minutes',
          'Add onions and bell peppers',
          'Add ginger-garlic paste and cook for 2 minutes',
          'Add tomatoes and cook until soft',
          'Add spices and stir-fry for 5 minutes',
          'Garnish with fresh coriander and serve'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      // Vegan recipes
      'vegan_1': {
        _id: 'vegan_1',
        name: 'Vegan Buddha Bowl',
        description: 'Nutritious bowl with quinoa, roasted vegetables, and tahini dressing, packed with plant-based protein and vitamins.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&crop=center',
        rating: 4.7,
        totalTime: 30,
        servings: 2,
        difficulty: 'Easy',
        cuisine: 'International',
        ingredients: [
          '1 cup quinoa, cooked',
          '1 sweet potato, cubed and roasted',
          '1 cup broccoli florets, steamed',
          '1/2 cup chickpeas, cooked',
          '1 avocado, sliced',
          '1/4 cup tahini',
          '2 tbsp lemon juice',
          '1 tbsp maple syrup',
          '1 clove garlic, minced',
          'Salt and pepper to taste',
          'Fresh herbs for garnish',
          '1 tbsp olive oil',
          '1 tsp cumin',
          '1 tsp paprika',
          'Mixed seeds for topping'
        ],
        instructions: [
          'Preheat oven to 400°F and roast sweet potato cubes for 20 minutes',
          'Cook quinoa according to package instructions',
          'Steam broccoli until tender-crisp',
          'Make tahini dressing by whisking tahini, lemon juice, maple syrup, and garlic',
          'Arrange quinoa in bowls and top with roasted sweet potato, broccoli, and chickpeas',
          'Add avocado slices and drizzle with tahini dressing',
          'Garnish with fresh herbs and mixed seeds',
          'Serve immediately while warm'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'vegan_2': {
        _id: 'vegan_2',
        name: 'Creamy Vegan Pasta',
        description: 'Rich cashew-based pasta sauce with herbs and nutritional yeast, creating a dairy-free creamy texture.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=400&fit=crop&crop=center',
        rating: 4.5,
        totalTime: 25,
        servings: 4,
        difficulty: 'Easy',
        cuisine: 'Italian',
        ingredients: [
          '12 oz pasta of choice',
          '1 cup raw cashews, soaked',
          '1/2 cup nutritional yeast',
          '2 cloves garlic',
          '1 tbsp lemon juice',
          '1 tsp salt',
          '1/2 tsp black pepper',
          '1/4 cup olive oil',
          '1/4 cup pasta water',
          'Fresh basil leaves',
          'Cherry tomatoes for garnish',
          'Red pepper flakes (optional)',
          '1 tsp Italian seasoning',
          '2 tbsp vegan butter'
        ],
        instructions: [
          'Soak cashews in hot water for 15 minutes',
          'Cook pasta according to package instructions, reserving pasta water',
          'Blend soaked cashews, nutritional yeast, garlic, lemon juice, salt, and pepper',
          'Add olive oil and pasta water gradually while blending until creamy',
          'Heat vegan butter in a pan and add the cashew cream sauce',
          'Toss cooked pasta with the sauce until well coated',
          'Garnish with fresh basil, cherry tomatoes, and red pepper flakes',
          'Serve immediately with extra nutritional yeast'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'vegan_3': {
        _id: 'vegan_3',
        name: 'Vegan Tacos',
        description: 'Spiced black bean tacos with avocado and fresh vegetables, bursting with Mexican flavors.',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center',
        rating: 4.6,
        totalTime: 20,
        servings: 3,
        difficulty: 'Easy',
        cuisine: 'Mexican',
        ingredients: [
          '1 can black beans, drained',
          '6 small tortillas',
          '1 avocado, sliced',
          '1 cup shredded lettuce',
          '1 tomato, diced',
          '1/2 red onion, diced',
          '1 jalapeño, sliced',
          '1 lime, juiced',
          '2 tbsp olive oil',
          '1 tsp cumin',
          '1 tsp chili powder',
          '1/2 tsp garlic powder',
          'Salt to taste',
          'Fresh cilantro',
          'Vegan sour cream (optional)'
        ],
        instructions: [
          'Heat olive oil in a pan and add black beans',
          'Season beans with cumin, chili powder, garlic powder, and salt',
          'Mash beans slightly while cooking for 5 minutes',
          'Warm tortillas in a dry pan or microwave',
          'Prepare toppings: slice avocado, dice tomato and onion',
          'Assemble tacos with bean mixture, avocado, lettuce, tomato, and onion',
          'Add jalapeño slices and fresh cilantro',
          'Drizzle with lime juice and serve with vegan sour cream'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'vegan_4': {
        _id: 'vegan_4',
        name: 'Vegan Curry',
        description: 'Coconut milk curry with mixed vegetables and aromatic spices, rich and flavorful.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop&crop=center',
        rating: 4.4,
        totalTime: 35,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '1 can coconut milk',
          '2 cups mixed vegetables (carrots, bell peppers, cauliflower)',
          '1 onion, diced',
          '3 cloves garlic, minced',
          '1 inch ginger, grated',
          '2 tbsp curry powder',
          '1 tsp turmeric',
          '1 tsp cumin',
          '1 tsp coriander',
          '1/2 tsp cayenne pepper',
          '2 tbsp coconut oil',
          'Salt to taste',
          'Fresh cilantro',
          '1 cup basmati rice',
          '1 tbsp tomato paste'
        ],
        instructions: [
          'Cook basmati rice according to package instructions',
          'Heat coconut oil in a large pan and sauté onions until golden',
          'Add garlic, ginger, and spices, cooking for 1 minute until fragrant',
          'Add mixed vegetables and cook for 5 minutes',
          'Stir in tomato paste and coconut milk',
          'Simmer for 15-20 minutes until vegetables are tender',
          'Season with salt and adjust spices to taste',
          'Garnish with fresh cilantro and serve over rice'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      'vegan_5': {
        _id: 'vegan_5',
        name: 'Vegan Stir Fry',
        description: 'Colorful vegetable stir fry with tofu and ginger sauce, quick and nutritious.',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop&crop=center',
        rating: 4.3,
        totalTime: 15,
        servings: 2,
        difficulty: 'Easy',
        cuisine: 'Asian',
        ingredients: [
          '8 oz firm tofu, cubed',
          '2 cups mixed vegetables (broccoli, bell peppers, snap peas)',
          '2 cloves garlic, minced',
          '1 inch ginger, grated',
          '3 tbsp soy sauce',
          '1 tbsp sesame oil',
          '1 tbsp rice vinegar',
          '1 tsp maple syrup',
          '2 tbsp vegetable oil',
          '1 tsp cornstarch',
          '2 green onions, sliced',
          'Sesame seeds for garnish',
          'Red pepper flakes (optional)',
          '1 cup cooked rice'
        ],
        instructions: [
          'Press tofu to remove excess water and cut into cubes',
          'Heat vegetable oil in a large wok or pan over high heat',
          'Add tofu and cook until golden brown on all sides',
          'Add vegetables and stir-fry for 3-4 minutes until crisp-tender',
          'Make sauce by mixing soy sauce, sesame oil, rice vinegar, maple syrup, and cornstarch',
          'Add garlic and ginger to the pan, cook for 30 seconds',
          'Pour sauce over vegetables and tofu, stir until thickened',
          'Garnish with green onions and sesame seeds, serve over rice'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      // Default recipe for any other IDs
      'default': {
        _id: recipeId,
        name: 'Delicious Recipe',
        description: 'A wonderful recipe to try at home with authentic flavors and easy-to-follow instructions.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center',
        rating: 4.5,
        totalTime: 30,
        servings: 4,
        difficulty: 'Medium',
        cuisine: 'Indian',
        ingredients: [
          '2 cups of main ingredient',
          '1 tablespoon of spice mix',
          'Salt to taste',
          '2 tbsp oil for cooking',
          'Fresh herbs for garnish',
          '1 onion, chopped',
          '2 tomatoes, chopped',
          '1 tbsp ginger-garlic paste',
          '1 tsp turmeric powder',
          '1 tsp red chili powder',
          '1 tsp garam masala'
        ],
        instructions: [
          'Heat oil in a pan over medium heat',
          'Add chopped onions and cook until translucent',
          'Add ginger-garlic paste and cook for 1 minute',
          'Add tomatoes and cook until soft',
          'Add spices and cook until oil separates',
          'Add the main ingredient and cook for 15-20 minutes',
          'Garnish with fresh herbs and serve hot'
        ],
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    };

    return recipes[recipeId] || recipes['default'];
  };

  const recipe = getRecipeData();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: recipe.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Recipe link copied to clipboard!');
    }
  };

  return (
    <RecipeContainer>
      <Container>
        <BackButton to="/">
          <FiArrowLeft />
          Back to Home
        </BackButton>

        <RecipeLayout>
          <RecipeImageSection imageUrl={recipe.image} />
          
          <RecipeInfoSection>
            <RecipeTitle>{recipe.name}</RecipeTitle>
            <RecipeDescription>{recipe.description}</RecipeDescription>
            
            <RecipeMeta>
              <MetaItem>
                <MetaIcon><FiStar /></MetaIcon>
                {recipe.rating} Rating
              </MetaItem>
              <MetaItem>
                <MetaIcon><FiClock /></MetaIcon>
                {recipe.totalTime} min
              </MetaItem>
              <MetaItem>
                <MetaIcon><FiUsers /></MetaIcon>
                {recipe.servings} servings
              </MetaItem>
              <MetaItem>
                <MetaIcon>🍽️</MetaIcon>
                {recipe.difficulty}
              </MetaItem>
            </RecipeMeta>

            <SectionHeader onClick={() => setShowIngredients(!showIngredients)}>
              <SectionTitle>Ingredients ({recipe.ingredients.length})</SectionTitle>
              {showIngredients ? <FiChevronUp /> : <FiChevronDown />}
            </SectionHeader>
            
            {showIngredients && (
              <SectionContent>
                <IngredientsList>
                  {recipe.ingredients.map((ingredient, index) => (
                    <IngredientItem key={index}>{ingredient}</IngredientItem>
                  ))}
                </IngredientsList>
              </SectionContent>
            )}

            <SectionHeader onClick={() => setShowInstructions(!showInstructions)}>
              <SectionTitle>Instructions ({recipe.instructions.length} steps)</SectionTitle>
              {showInstructions ? <FiChevronUp /> : <FiChevronDown />}
            </SectionHeader>
            
            {showInstructions && (
              <SectionContent>
                <InstructionsList>
                  {recipe.instructions.map((instruction, index) => (
                    <InstructionItem key={index}>{instruction}</InstructionItem>
                  ))}
                </InstructionsList>
              </SectionContent>
            )}

            <ActionButtons>
              <WatchButton href={recipe.youtubeLink} target="_blank" rel="noopener noreferrer">
                <FiPlay />
                Watch on YouTube
                <FiExternalLink />
              </WatchButton>
              <ShareButton onClick={handleShare}>
                <FiExternalLink />
                Share Recipe
              </ShareButton>
            </ActionButtons>
          </RecipeInfoSection>
        </RecipeLayout>
      </Container>
    </RecipeContainer>
  );
};

export default RecipeDetail;
