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
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d4d1?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d4d1?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d4d1?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center',
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
