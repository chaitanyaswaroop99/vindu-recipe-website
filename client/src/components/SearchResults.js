import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch, FiClock, FiStar, FiUsers, FiArrowLeft } from 'react-icons/fi';

const SearchContainer = styled.div`
  min-height: 100vh;
  padding: 100px 20px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
`;

const SearchHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 1rem;
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

const SearchTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

const SearchSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
`;

const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const RecipeCard = styled(Link)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeContent = styled.div`
  padding: 1.5rem;
`;

const RecipeName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const RecipeDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const RecipeMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #666;
  font-size: 0.85rem;
`;

const RecipeTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(79, 70, 229, 0.1);
  color: #4f46e5;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: white;
`;

const NoResultsIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const NoResultsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const NoResultsText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const SearchSuggestions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SuggestionTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const query = searchParams.get('q') || '';

  // All recipes data (same as in CategoryRecipes.js)
  const getAllRecipes = () => {
    const recipes = {
      'chicken': [
        { _id: 'chicken_1', name: 'Butter Chicken', description: 'Creamy tomato-based curry with tender chicken pieces', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_2', name: 'Chicken Tikka Masala', description: 'Spiced chicken in creamy tomato sauce', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_3', name: 'Chicken Biryani', description: 'Fragrant basmati rice with spiced chicken', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_4', name: 'Chicken Curry', description: 'Traditional Indian chicken curry with aromatic spices', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_5', name: 'Chicken Korma', description: 'Mild and creamy chicken curry with nuts', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_6', name: 'Chicken Vindaloo', description: 'Spicy Goan chicken curry with vinegar', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_7', name: 'Chicken Do Pyaza', description: 'Chicken curry with double onions', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_8', name: 'Chicken Chettinad', description: 'Spicy South Indian chicken curry', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_9', name: 'Chicken Makhani', description: 'Rich butter chicken with cream', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_10', name: 'Chicken Kadai', description: 'Chicken cooked in kadai with bell peppers', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_11', name: 'Chicken Rogan Josh', description: 'Kashmiri chicken curry with yogurt', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_12', name: 'Chicken Jalfrezi', description: 'Chicken with mixed vegetables in spicy sauce', cuisine: 'Indian', category: 'Chicken' },
        { _id: 'chicken_13', name: 'Chicken Teriyaki', description: 'Japanese-style grilled chicken with sweet teriyaki glaze', cuisine: 'Japanese', category: 'Chicken' },
        { _id: 'chicken_14', name: 'Chicken Marsala', description: 'Italian chicken with mushrooms and Marsala wine', cuisine: 'Italian', category: 'Chicken' },
        { _id: 'chicken_15', name: 'Chicken Piccata', description: 'Italian chicken with lemon and capers', cuisine: 'Italian', category: 'Chicken' }
      ],
      'lamb': [
        { _id: 'lamb_1', name: 'Mutton Curry', description: 'Traditional Indian mutton curry with aromatic spices', cuisine: 'Indian', category: 'Lamb' },
        { _id: 'lamb_2', name: 'Lamb Biryani', description: 'Fragrant basmati rice with spiced lamb', cuisine: 'Indian', category: 'Lamb' },
        { _id: 'lamb_3', name: 'Lamb Rogan Josh', description: 'Kashmiri lamb curry with yogurt and spices', cuisine: 'Indian', category: 'Lamb' },
        { _id: 'lamb_4', name: 'Lamb Kofta', description: 'Spiced lamb meatballs in rich tomato gravy', cuisine: 'Indian', category: 'Lamb' },
        { _id: 'lamb_5', name: 'Lamb Chops', description: 'Grilled lamb chops with herbs', cuisine: 'International', category: 'Lamb' }
      ],
      'seafood': [
        { _id: 'seafood_1', name: 'Fish Curry', description: 'Traditional Indian fish curry with coconut', cuisine: 'Indian', category: 'Seafood' },
        { _id: 'seafood_2', name: 'Prawn Biryani', description: 'Fragrant rice with spiced prawns', cuisine: 'Indian', category: 'Seafood' },
        { _id: 'seafood_3', name: 'Crab Masala', description: 'Spicy crab curry with aromatic spices', cuisine: 'Indian', category: 'Seafood' },
        { _id: 'seafood_4', name: 'Fish Tikka', description: 'Grilled fish marinated in spices', cuisine: 'Indian', category: 'Seafood' },
        { _id: 'seafood_5', name: 'Prawn Curry', description: 'Creamy prawn curry with coconut milk', cuisine: 'Indian', category: 'Seafood' }
      ],
      'vegetables': [
        { _id: 'veg_1', name: 'Aloo Gobi', description: 'Potato and cauliflower curry', cuisine: 'Indian', category: 'Vegetables' },
        { _id: 'veg_2', name: 'Baingan Bharta', description: 'Smoky roasted eggplant curry', cuisine: 'Indian', category: 'Vegetables' },
        { _id: 'veg_3', name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', cuisine: 'Indian', category: 'Vegetables' },
        { _id: 'veg_4', name: 'Chana Masala', description: 'Spiced chickpea curry', cuisine: 'Indian', category: 'Vegetables' },
        { _id: 'veg_5', name: 'Rajma Curry', description: 'Red kidney bean curry', cuisine: 'Indian', category: 'Vegetables' }
      ],
      'paneer': [
        { _id: 'paneer_1', name: 'Paneer Butter Masala', description: 'Cottage cheese in creamy tomato sauce', cuisine: 'Indian', category: 'Paneer' },
        { _id: 'paneer_2', name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', cuisine: 'Indian', category: 'Paneer' },
        { _id: 'paneer_3', name: 'Paneer Biryani', description: 'Fragrant rice with cottage cheese', cuisine: 'Indian', category: 'Paneer' },
        { _id: 'paneer_4', name: 'Paneer Curry', description: 'Traditional paneer curry with spices', cuisine: 'Indian', category: 'Paneer' },
        { _id: 'paneer_5', name: 'Paneer Kadai', description: 'Paneer cooked in kadai with bell peppers', cuisine: 'Indian', category: 'Paneer' }
      ],
      'vegan': [
        { _id: 'vegan_1', name: 'Vegan Buddha Bowl', description: 'Nutritious bowl with quinoa and vegetables', cuisine: 'International', category: 'Vegan' },
        { _id: 'vegan_2', name: 'Vegan Tacos', description: 'Plant-based tacos with fresh vegetables', cuisine: 'Mexican', category: 'Vegan' },
        { _id: 'vegan_3', name: 'Vegan Pasta', description: 'Plant-based pasta with vegetables', cuisine: 'Italian', category: 'Vegan' },
        { _id: 'vegan_4', name: 'Vegan Stir Fry', description: 'Mixed vegetables in Asian-style sauce', cuisine: 'Asian', category: 'Vegan' },
        { _id: 'vegan_5', name: 'Vegan Curry', description: 'Plant-based curry with coconut milk', cuisine: 'Indian', category: 'Vegan' }
      ],
      'desserts': [
        { _id: 'dessert_1', name: 'Chocolate Cake', description: 'Rich and moist chocolate cake', cuisine: 'American', category: 'Desserts' },
        { _id: 'dessert_2', name: 'Tiramisu', description: 'Italian coffee-flavored dessert', cuisine: 'Italian', category: 'Desserts' },
        { _id: 'dessert_3', name: 'Gulab Jamun', description: 'Sweet Indian milk dumplings', cuisine: 'Indian', category: 'Desserts' },
        { _id: 'dessert_4', name: 'Cheesecake', description: 'Creamy New York style cheesecake', cuisine: 'American', category: 'Desserts' },
        { _id: 'dessert_5', name: 'Rasgulla', description: 'Bengali sweet cottage cheese balls', cuisine: 'Indian', category: 'Desserts' }
      ],
      'tofu': [
        { _id: 'tofu_1', name: 'Mapo Tofu', description: 'Spicy Sichuan tofu with ground pork', cuisine: 'Chinese', category: 'Tofu' },
        { _id: 'tofu_2', name: 'Tofu Scramble', description: 'Scrambled tofu with vegetables', cuisine: 'American', category: 'Tofu' },
        { _id: 'tofu_3', name: 'Tofu Teriyaki', description: 'Japanese-style tofu with teriyaki sauce', cuisine: 'Japanese', category: 'Tofu' },
        { _id: 'tofu_4', name: 'Tofu Curry', description: 'Thai-style tofu curry with coconut milk', cuisine: 'Thai', category: 'Tofu' },
        { _id: 'tofu_5', name: 'Tofu Pad Thai', description: 'Thai stir-fried noodles with tofu', cuisine: 'Thai', category: 'Tofu' }
      ]
    };

    // Flatten all recipes into a single array
    const allRecipes = [];
    Object.values(recipes).forEach(categoryRecipes => {
      allRecipes.push(...categoryRecipes);
    });
    
    return allRecipes;
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      
      // Simulate search delay
      setTimeout(() => {
        const allRecipes = getAllRecipes();
        
        // Filter recipes based on search query
        const filteredRecipes = allRecipes.filter(recipe => 
          recipe.name.toLowerCase().includes(query.toLowerCase()) ||
          recipe.description.toLowerCase().includes(query.toLowerCase()) ||
          recipe.cuisine.toLowerCase().includes(query.toLowerCase()) ||
          recipe.category.toLowerCase().includes(query.toLowerCase())
        );
        
        setSearchResults(filteredRecipes);
        setLoading(false);
      }, 500);
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [query]);

  const suggestions = ['chicken', 'curry', 'biryani', 'paneer', 'dessert', 'vegan', 'indian', 'italian'];

  if (loading) {
    return (
      <SearchContainer>
        <SearchHeader>
          <BackButton to="/">
            <FiArrowLeft />
            Back to Home
          </BackButton>
          <SearchTitle>Searching...</SearchTitle>
          <SearchSubtitle>Finding recipes for "{query}"</SearchSubtitle>
        </SearchHeader>
      </SearchContainer>
    );
  }

  return (
    <SearchContainer>
      <SearchHeader>
        <BackButton to="/">
          <FiArrowLeft />
          Back to Home
        </BackButton>
        <SearchTitle>Search Results</SearchTitle>
        <SearchSubtitle>
          {query ? `Found ${searchResults.length} recipes for "${query}"` : 'Enter a search term to find recipes'}
        </SearchSubtitle>
      </SearchHeader>

      <ResultsContainer>
        {searchResults.length > 0 ? (
          <ResultsGrid>
            {searchResults.map(recipe => (
              <RecipeCard key={recipe._id} to={`/recipe/${recipe._id}`}>
                <RecipeImage 
                  src={`https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center`}
                  alt={recipe.name}
                />
                <RecipeContent>
                  <RecipeName>{recipe.name}</RecipeName>
                  <RecipeDescription>{recipe.description}</RecipeDescription>
                  <RecipeMeta>
                    <MetaItem>
                      <FiClock />
                      30 min
                    </MetaItem>
                    <MetaItem>
                      <FiStar />
                      4.5
                    </MetaItem>
                    <MetaItem>
                      <FiUsers />
                      4 servings
                    </MetaItem>
                  </RecipeMeta>
                  <RecipeTags>
                    <Tag>{recipe.cuisine}</Tag>
                    <Tag>{recipe.category}</Tag>
                  </RecipeTags>
                </RecipeContent>
              </RecipeCard>
            ))}
          </ResultsGrid>
        ) : query ? (
          <NoResults>
            <NoResultsIcon>🔍</NoResultsIcon>
            <NoResultsTitle>No recipes found</NoResultsTitle>
            <NoResultsText>
              We couldn't find any recipes matching "{query}". Try searching for something else.
            </NoResultsText>
            <SearchSuggestions>
              {suggestions.map(suggestion => (
                <SuggestionTag key={suggestion}>{suggestion}</SuggestionTag>
              ))}
            </SearchSuggestions>
          </NoResults>
        ) : (
          <NoResults>
            <NoResultsIcon>🍽️</NoResultsIcon>
            <NoResultsTitle>Search for recipes</NoResultsTitle>
            <NoResultsText>
              Use the search bar in the header to find your favorite recipes.
            </NoResultsText>
            <SearchSuggestions>
              {suggestions.map(suggestion => (
                <SuggestionTag key={suggestion}>{suggestion}</SuggestionTag>
              ))}
            </SearchSuggestions>
          </NoResults>
        )}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default SearchResults;
