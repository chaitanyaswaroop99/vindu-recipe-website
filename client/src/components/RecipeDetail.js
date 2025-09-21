import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiStar, FiUsers, FiPlay, FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';
import axios from 'axios';

const RecipeContainer = styled.div`
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

const RecipeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const RecipeImageSection = styled.div`
  position: relative;
  height: 500px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const RecipeContent = styled.div`
  padding: 2rem;
`;

const RecipeHeader = styled.div`
  margin-bottom: 2rem;
`;

const RecipeName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const RecipeDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const RecipeMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 1rem;
`;

const RecipeRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffc107;
  font-weight: 600;
  font-size: 1.1rem;
`;

const DifficultyBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
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

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IngredientsToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #28a745;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #218838;
  }
`;

const IngredientsList = styled.div`
  margin-top: 1rem;
  padding-left: 1rem;
`;

const IngredientItem = styled.div`
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  position: relative;

  &::before {
    content: '•';
    color: #28a745;
    position: absolute;
    left: 0;
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

const WatchButton = styled.button`
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
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

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        // Try to fetch from chicken recipes first
        let response;
        try {
          response = await axios.get('/api/chicken-recipes');
          const chickenRecipe = response.data.find(r => r._id === recipeId);
          if (chickenRecipe) {
            setRecipe(chickenRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in chicken recipes');
        }

        // Try seafood recipes
        try {
          response = await axios.get('/api/seafood-recipes');
          const seafoodRecipe = response.data.find(r => r._id === recipeId);
          if (seafoodRecipe) {
            setRecipe(seafoodRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in seafood recipes');
        }

        // Try lamb recipes
        try {
          response = await axios.get('/api/lamb-recipes');
          const lambRecipe = response.data.find(r => r._id === recipeId);
          if (lambRecipe) {
            setRecipe(lambRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in lamb recipes');
        }

        // Try goat recipes
        try {
          response = await axios.get('/api/goat-recipes');
          const goatRecipe = response.data.find(r => r._id === recipeId);
          if (goatRecipe) {
            setRecipe(goatRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in goat recipes');
        }

        // Try beef recipes
        try {
          response = await axios.get('/api/beef-recipes');
          const beefRecipe = response.data.find(r => r._id === recipeId);
          if (beefRecipe) {
            setRecipe(beefRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in beef recipes');
        }

        // Try pork recipes
        try {
          response = await axios.get('/api/pork-recipes');
          const porkRecipe = response.data.find(r => r._id === recipeId);
          if (porkRecipe) {
            setRecipe(porkRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in pork recipes');
        }

        // Try vegetarian recipes
        try {
          response = await axios.get('/api/vegetarian-recipes');
          const vegetarianRecipe = response.data.find(r => r._id === recipeId);
          if (vegetarianRecipe) {
            setRecipe(vegetarianRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in vegetarian recipes');
        }

        // Try vegan recipes
        try {
          response = await axios.get('/api/vegan-recipes');
          const veganRecipe = response.data.find(r => r._id === recipeId);
          if (veganRecipe) {
            setRecipe(veganRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in vegan recipes');
        }

        // Try dessert recipes
        try {
          response = await axios.get('/api/dessert-recipes');
          const dessertRecipe = response.data.find(r => r._id === recipeId);
          if (dessertRecipe) {
            setRecipe(dessertRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in dessert recipes');
        }

        // Try vegetable recipes
        try {
          response = await axios.get('/api/vegetable-recipes');
          const vegetableRecipe = response.data.find(r => r._id === recipeId);
          if (vegetableRecipe) {
            setRecipe(vegetableRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in vegetable recipes');
        }

        // Try paneer recipes
        try {
          response = await axios.get('/api/paneer-recipes');
          const paneerRecipe = response.data.find(r => r._id === recipeId);
          if (paneerRecipe) {
            setRecipe(paneerRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in paneer recipes');
        }

        // Try tofu recipes
        try {
          response = await axios.get('/api/tofu-recipes');
          const tofuRecipe = response.data.find(r => r._id === recipeId);
          if (tofuRecipe) {
            setRecipe(tofuRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in tofu recipes');
        }

        // Try salad recipes
        try {
          response = await axios.get('/api/salad-recipes');
          const saladRecipe = response.data.find(r => r._id === recipeId);
          if (saladRecipe) {
            setRecipe(saladRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in salad recipes');
        }

        // Try cashew recipes
        try {
          response = await axios.get('/api/cashew-recipes');
          const cashewRecipe = response.data.find(r => r._id === recipeId);
          if (cashewRecipe) {
            setRecipe(cashewRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in cashew recipes');
        }

        // Try dal recipes
        try {
          response = await axios.get('/api/dal-recipes');
          const dalRecipe = response.data.find(r => r._id === recipeId);
          if (dalRecipe) {
            setRecipe(dalRecipe);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.log('Not found in dal recipes');
        }

        // Recipe not found
        setRecipe(null);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setRecipe(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);


  const shareRecipe = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: recipe.description,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Recipe link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <RecipeContainer>
        <Container>
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        </Container>
      </RecipeContainer>
    );
  }

  if (!recipe) {
    return (
      <RecipeContainer>
        <Container>
          <BackButton to="/">
            <FiArrowLeft />
            Back to Home
          </BackButton>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <h2>Recipe Not Found</h2>
            <p>The recipe you're looking for doesn't exist.</p>
          </div>
        </Container>
      </RecipeContainer>
    );
  }

  return (
    <RecipeContainer>
      <Container>
        <BackButton to="/">
          <FiArrowLeft />
          Back to Home
        </BackButton>

        <RecipeLayout>
          <RecipeImageSection image={recipe.image}>
          </RecipeImageSection>

          <RecipeContent>
            <RecipeHeader>
              <RecipeName>{recipe.name}</RecipeName>
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
                <RecipeRating>
                  <FiStar />
                  {recipe.rating}/5
                </RecipeRating>
              </RecipeMeta>

              <DifficultyBadge level={recipe.difficulty}>
                {recipe.difficulty}
              </DifficultyBadge>
            </RecipeHeader>

            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <Section>
                <SectionTitle>
                  🥘 Ingredients
                  <IngredientsToggle onClick={() => setShowIngredients(!showIngredients)}>
                    {showIngredients ? <FiChevronUp /> : <FiChevronDown />}
                  </IngredientsToggle>
                </SectionTitle>
                
                {showIngredients && (
                  <IngredientsList>
                    {recipe.ingredients.map((ingredient, idx) => (
                      <IngredientItem key={idx}>
                        {ingredient}
                      </IngredientItem>
                    ))}
                  </IngredientsList>
                )}
              </Section>
            )}

            {recipe.instructions && recipe.instructions.length > 0 && (
              <Section>
                <SectionTitle>
                  📝 Instructions
                  <IngredientsToggle onClick={() => setShowInstructions(!showInstructions)}>
                    {showInstructions ? <FiChevronUp /> : <FiChevronDown />}
                  </IngredientsToggle>
                </SectionTitle>
                
                {showInstructions && (
                  <InstructionsList>
                    {recipe.instructions.map((instruction, idx) => (
                      <InstructionItem key={idx}>
                        {instruction}
                      </InstructionItem>
                    ))}
                  </InstructionsList>
                )}
              </Section>
            )}

            <ActionButtons>
              {recipe.youtubeLink && (
                <WatchButton onClick={() => window.open(recipe.youtubeLink, '_blank')}>
                  <FiPlay />
                  Watch Tutorial
                </WatchButton>
              )}
              <ShareButton onClick={shareRecipe}>
                <FiExternalLink />
                Share Recipe
              </ShareButton>
            </ActionButtons>
          </RecipeContent>
        </RecipeLayout>
      </Container>
    </RecipeContainer>
  );
};

export default RecipeDetail;
