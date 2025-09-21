import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiUsers, FiStar } from 'react-icons/fi';

const RecipesContainer = styled.div`
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

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const PageSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const RecipeCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const RecipeImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const RecipeContent = styled.div`
  padding: 1.5rem;
`;

const RecipeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const RecipeName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
`;

const RecipeRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #f39c12;
  font-weight: 500;
`;

const RecipeDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const RecipeMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #666;
  font-size: 0.9rem;
`;

const DifficultyBadge = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => 
    props.level === 'Easy' ? '#d4edda' :
    props.level === 'Medium' ? '#fff3cd' : '#f8d7da'
  };
  color: ${props => 
    props.level === 'Easy' ? '#155724' :
    props.level === 'Medium' ? '#856404' : '#721c24'
  };
`;

const CategoryRecipes = () => {
  const { id, subcategoryId, cuisineId } = useParams();

  // Category-specific recipes
  const getRecipesForCategory = () => {
    console.log('Current subcategoryId:', subcategoryId); // Debug log
    
    const recipes = {
      'chicken': [
        {
          _id: 'chicken_1',
          name: 'Butter Chicken',
          description: 'Creamy tomato-based curry with tender chicken pieces',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_2',
          name: 'Chicken Tikka Masala',
          description: 'Grilled chicken in spiced tomato cream sauce',
          image: 'https://images.unsplash.com/photo-1588166524941-cf385776638c?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 50,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_3',
          name: 'Chicken Biryani',
          description: 'Aromatic basmati rice layered with spiced chicken',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.9,
          totalTime: 90,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        }
      ],
      'lamb': [
        {
          _id: 'lamb_1',
          name: 'Mutton Curry',
          description: 'Rich and spicy lamb curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 75,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_2',
          name: 'Mutton Biryani',
          description: 'Fragrant rice with tender mutton and saffron',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 120,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_3',
          name: 'Lamb Rogan Josh',
          description: 'Traditional Kashmiri lamb curry with yogurt',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        }
      ],
      'seafood': [
        {
          _id: 'seafood_1',
          name: 'Fish Curry',
          description: 'Spicy coconut-based fish curry with tamarind',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_2',
          name: 'Prawn Masala',
          description: 'Succulent prawns in spicy onion-tomato gravy',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_3',
          name: 'Seafood Biryani',
          description: 'Mixed seafood biryani with aromatic spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 80,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        }
      ],
      'vegetables': [
        {
          _id: 'veg_1',
          name: 'Aloo Gobi',
          description: 'Spiced potatoes and cauliflower curry',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_2',
          name: 'Baingan Bharta',
          description: 'Smoky roasted eggplant curry',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_3',
          name: 'Mixed Vegetable Curry',
          description: 'Colorful vegetables in coconut curry',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 35,
          servings: 6,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        }
      ],
      'paneer': [
        {
          _id: 'paneer_1',
          name: 'Paneer Butter Masala',
          description: 'Creamy tomato curry with soft paneer cubes',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_2',
          name: 'Palak Paneer',
          description: 'Soft paneer in creamy spinach curry',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_3',
          name: 'Paneer Tikka',
          description: 'Grilled paneer cubes with spices',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        }
      ]
    };

    // Check if subcategoryId exists and return appropriate recipes
    if (recipes[subcategoryId]) {
      console.log('Found recipes for:', subcategoryId); // Debug log
      return recipes[subcategoryId];
    }
    
    console.log('Using default recipes for:', subcategoryId); // Debug log
    return [
      {
        _id: 'default_1',
        name: 'Sample Recipe 1',
        description: 'A delicious sample recipe with amazing flavors',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
        rating: 4.5,
        totalTime: 30,
        servings: 4,
        difficulty: 'Easy',
        cuisine: cuisineId || 'Indian'
      },
      {
        _id: 'default_2',
        name: 'Sample Recipe 2',
        description: 'Another wonderful recipe to try at home',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
        rating: 4.3,
        totalTime: 45,
        servings: 6,
        difficulty: 'Medium',
        cuisine: cuisineId || 'Indian'
      },
      {
        _id: 'default_3',
        name: 'Sample Recipe 3',
        description: 'A classic recipe with modern twists',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
        rating: 4.7,
        totalTime: 60,
        servings: 8,
        difficulty: 'Hard',
        cuisine: cuisineId || 'Indian'
      }
    ];
  };

  const sampleRecipes = getRecipesForCategory();

  const getPageTitle = () => {
    if (cuisineId) {
      return `${subcategoryId} - ${cuisineId}`;
    }
    return subcategoryId || 'Recipes';
  };

  return (
    <RecipesContainer>
      <Container>
        <BackButton to={cuisineId ? `/category/${id}/${subcategoryId}/cuisines` : `/category/${id}`}>
          <FiArrowLeft />
          Back to {cuisineId ? subcategoryId : (id === 'non_vegetarian' ? 'Non-Vegetarian' : 'Vegetarian')}
        </BackButton>

        <PageTitle>{getPageTitle()}</PageTitle>
        
        <PageSubtitle>
          Discover amazing recipes in this category
        </PageSubtitle>

        <RecipesGrid>
          {sampleRecipes.map((recipe, index) => (
            <Link 
              key={recipe._id} 
              to={`/recipe/${recipe._id}`}
              onClick={(e) => {
                e.stopPropagation();
                window.open(`/recipe/${recipe._id}`, '_blank');
              }}
            >
              <RecipeCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RecipeImage image={recipe.image} />
                
                <RecipeContent>
                  <RecipeHeader>
                    <RecipeName>{recipe.name}</RecipeName>
                    <RecipeRating>
                      <FiStar />
                      {recipe.rating}
                    </RecipeRating>
                  </RecipeHeader>
                  <RecipeDescription>{recipe.description}</RecipeDescription>
                  <RecipeMeta>
                    <MetaItem><FiClock /> {recipe.totalTime} min</MetaItem>
                    <MetaItem><FiUsers /> {recipe.servings} servings</MetaItem>
                    <MetaItem>🍽️ {recipe.cuisine}</MetaItem>
                  </RecipeMeta>
                  <DifficultyBadge level={recipe.difficulty}>{recipe.difficulty}</DifficultyBadge>
                </RecipeContent>
              </RecipeCard>
            </Link>
          ))}
        </RecipesGrid>
      </Container>
    </RecipesContainer>
  );
};

export default CategoryRecipes;