import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiStar, FiUsers, FiPlay, FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import axios from 'axios';

const CategoryContainer = styled.div`
  padding: 120px 0 80px;
  min-height: 100vh;
  background: #f8f9fa;
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
  color: #28a745;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #218838;
  }
`;

const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const CategoryDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const SearchInput = styled.input`
  padding: 1rem 1.5rem;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  outline: none;
  font-size: 1rem;
  width: 400px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #28a745;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const RecipeCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const RecipeImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
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
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const RecipeRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #ffc107;
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
  gap: 0.3rem;
  color: #666;
  font-size: 0.9rem;
`;

const RecipeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DifficultyBadge = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => {
    switch(props.level) {
      case 'Easy': return '#d4edda';
      case 'Medium': return '#fff3cd';
      case 'Hard': return '#f8d7da';
      default: return '#e2e3e5';
    }
  }};
  color: ${props => {
    switch(props.level) {
      case 'Easy': return '#155724';
      case 'Medium': return '#856404';
      case 'Hard': return '#721c24';
      default: return '#383d41';
    }
  }};
`;

const WatchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #218838;
  }
`;

const IngredientsSection = styled.div`
  margin-top: 1rem;
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
`;

const IngredientsToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #28a745;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #218838;
  }
`;

const IngredientsList = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
`;

const IngredientItem = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  padding-left: 0.5rem;
  position: relative;

  &::before {
    content: '•';
    color: #28a745;
    position: absolute;
    left: 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #28a745;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CategoryRecipes = () => {
  const { id, subcategoryId, cuisineId } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [cuisine, setCuisine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIngredients, setExpandedIngredients] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(`/api/categories/${id}`);
        setCategory(categoryResponse.data);
        
        // If we have a subcategory, get its info and recipes
        if (subcategoryId) {
          const subcategoryData = categoryResponse.data.subcategories?.find(
            sub => sub._id === subcategoryId
          );
          setSubcategory(subcategoryData);
          
          // If we have a cuisine, get its info
          let cuisineData = null;
          if (cuisineId && subcategoryData?.hasCuisines) {
            cuisineData = subcategoryData.cuisines?.find(
              cuisine => cuisine._id === cuisineId
            );
            setCuisine(cuisineData);
          }
          
          // Fetch recipes based on subcategory
          let allRecipes = [];
          if (subcategoryId === 'chicken') {
            const recipesResponse = await axios.get('/api/chicken-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'seafood') {
            const recipesResponse = await axios.get('/api/seafood-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'lamb') {
            const recipesResponse = await axios.get('/api/lamb-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'goat') {
            const recipesResponse = await axios.get('/api/goat-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'beef') {
            const recipesResponse = await axios.get('/api/beef-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'pork') {
            const recipesResponse = await axios.get('/api/pork-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'vegetarian') {
            const recipesResponse = await axios.get('/api/vegetarian-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'vegan') {
            const recipesResponse = await axios.get('/api/vegan-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'desserts') {
            const recipesResponse = await axios.get('/api/dessert-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'vegetables') {
            const recipesResponse = await axios.get('/api/vegetable-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'paneer') {
            const recipesResponse = await axios.get('/api/paneer-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'tofu') {
            const recipesResponse = await axios.get('/api/tofu-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'salads') {
            const recipesResponse = await axios.get('/api/salad-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'cashews') {
            const recipesResponse = await axios.get('/api/cashew-recipes');
            allRecipes = recipesResponse.data;
          } else if (subcategoryId === 'dal') {
            const recipesResponse = await axios.get('/api/dal-recipes');
            allRecipes = recipesResponse.data;
          }
          
          // Filter recipes by cuisine if cuisineId is provided
          if (cuisineId && cuisineData) {
            const filteredRecipes = allRecipes.filter(recipe => 
              recipe.cuisine.toLowerCase() === cuisineData.name.toLowerCase()
            );
            setRecipes(filteredRecipes);
          } else {
            setRecipes(allRecipes);
          }
        } else {
          // If no subcategory, check if we're accessing a category directly
          if (id === subcategoryId) {
            // Direct category access (vegetarian, vegan, desserts)
            let allRecipes = [];
            if (subcategoryId === 'vegetarian') {
              const recipesResponse = await axios.get('/api/vegetarian-recipes');
              allRecipes = recipesResponse.data;
            } else if (subcategoryId === 'vegan') {
              const recipesResponse = await axios.get('/api/vegan-recipes');
              allRecipes = recipesResponse.data;
            } else if (subcategoryId === 'desserts') {
              const recipesResponse = await axios.get('/api/dessert-recipes');
              allRecipes = recipesResponse.data;
            }
            setRecipes(allRecipes);
          } else {
            // If no subcategory, show empty for now
            setRecipes([]);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, subcategoryId, cuisineId]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleIngredients = (recipeId) => {
    setExpandedIngredients(prev => ({
      ...prev,
      [recipeId]: !prev[recipeId]
    }));
  };

  const recipeEmojis = {
    // Chicken recipes
    'Butter Chicken': '🍛',
    'Chicken Tikka Masala': '🍗',
    'Grilled Lemon Herb Chicken': '🍋',
    'Chicken Parmesan': '🧀',
    'Thai Basil Chicken': '🌶️',
    'Honey Garlic Chicken': '🍯',
    'Chicken Curry': '🥘',
    'BBQ Chicken Wings': '🍖',
    'Chicken Biryani': '🍚',
    'Chicken Teriyaki': '🍱',
    'Chicken Shawarma': '🥙',
    'Chicken Alfredo': '🍝',
    // Seafood recipes
    'Grilled Salmon': '🐟',
    'Shrimp Scampi': '🦐',
    'Fish Tacos': '🌮',
    'Lobster Thermidor': '🦞',
    'Crab Cakes': '🦀',
    'Miso Glazed Cod': '🐠'
  };

  if (loading) {
    return (
      <CategoryContainer>
        <Container>
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        </Container>
      </CategoryContainer>
    );
  }

  return (
    <CategoryContainer>
      <Container>
              <BackButton to={
                cuisine ? `/category/${id}/${subcategoryId}/cuisines` :
                subcategory ? `/category/${id}` : "/"
              }>
                <FiArrowLeft />
                Back to {
                  cuisine ? `${subcategory?.name} Cuisines` :
                  subcategory ? category?.name : "Home"
                }
              </BackButton>
        
        {(category || subcategory) && (
          <CategoryHeader>
            <CategoryTitle>
              {cuisine ? cuisine.icon : subcategory ? subcategory.icon : category?.icon} {
                cuisine ? `${subcategory?.name} - ${cuisine.name}` :
                subcategory ? subcategory.name : category?.name
              }
            </CategoryTitle>
            <CategoryDescription>
              {cuisine ? cuisine.description :
               subcategory ? subcategory.description : category?.description}
            </CategoryDescription>
            <div style={{
              background: '#e8f5e8',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: '#28a745',
              marginTop: '1rem',
              textAlign: 'center',
              display: 'inline-block'
            }}>
              📊 {filteredRecipes.length} recipes available
            </div>
          </CategoryHeader>
        )}

        {recipes.length > 0 && (
          <SearchContainer>
            <div style={{ position: 'relative' }}>
              <SearchInput
                type="text"
                placeholder={`Search ${category?.name.toLowerCase()} recipes...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon />
            </div>
          </SearchContainer>
        )}
        
        {filteredRecipes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            {recipes.length === 0 ? 
              `No recipes available for ${category?.name} category yet.` : 
              'No recipes found matching your search.'
            }
          </div>
        ) : (
          <RecipesGrid>
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={recipe._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(`/recipe/${recipe._id}`, '_blank')}
              >
                <RecipeImage image={recipe.image}>
                </RecipeImage>
                
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
                    <MetaItem>
                      <FiClock />
                      {recipe.totalTime} min
                    </MetaItem>
                    <MetaItem>
                      <FiUsers />
                      {recipe.servings} servings
                    </MetaItem>
                    <MetaItem>
                      🍽️ {recipe.cuisine}
                    </MetaItem>
                  </RecipeMeta>
                  
                  <RecipeFooter>
                    <DifficultyBadge level={recipe.difficulty}>
                      {recipe.difficulty}
                    </DifficultyBadge>
                    
                    {recipe.youtubeLink && (
                      <WatchButton onClick={(e) => {
                        e.stopPropagation();
                        window.open(recipe.youtubeLink, '_blank');
                      }}>
                        <FiPlay />
                        Watch
                      </WatchButton>
                    )}
                  </RecipeFooter>

                  {recipe.ingredients && recipe.ingredients.length > 0 && (
                    <IngredientsSection>
                      <IngredientsToggle onClick={(e) => {
                        e.stopPropagation();
                        toggleIngredients(recipe._id);
                      }}>
                        {expandedIngredients[recipe._id] ? <FiChevronUp /> : <FiChevronDown />}
                        Ingredients ({recipe.ingredients.length})
                      </IngredientsToggle>
                      
                      {expandedIngredients[recipe._id] && (
                        <IngredientsList>
                          {recipe.ingredients.map((ingredient, idx) => (
                            <IngredientItem key={idx}>
                              {ingredient}
                            </IngredientItem>
                          ))}
                        </IngredientsList>
                      )}
                    </IngredientsSection>
                  )}
                </RecipeContent>
              </RecipeCard>
            ))}
          </RecipesGrid>
        )}
      </Container>
    </CategoryContainer>
  );
};

export default CategoryRecipes;
