import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoriesSection = styled.section`
  padding: 80px 0;
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

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.color || '#28a745'};
  }
`;

const CategoryImage = styled.div`
  width: 100%;
  height: 120px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  ${CategoryCard}:hover & {
    transform: scale(1.05);
  }
`;

const CategoryName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CategoryCount = styled.div`
  color: #28a745;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
`;

const Categories = () => {
  // Static categories data
  const categories = [
    {
      _id: 'non_vegetarian',
      name: 'Non-Vegetarian',
      description: 'Explore delicious meat, chicken, seafood, and egg-based recipes',
      hasSubcategories: true,
      subcategories: ['Chicken', 'Lamb', 'Seafood', 'Beef', 'Pork'],
      recipeCount: 150,
      color: '#e74c3c'
    },
    {
      _id: 'vegetarian',
      name: 'Vegetarian',
      description: 'Discover nutritious plant-based recipes with vegetables, paneer, and more',
      hasSubcategories: true,
      subcategories: ['Vegetables', 'Paneer', 'Tofu', 'Salads', 'Cashews', 'Dal'],
      recipeCount: 300,
      color: '#27ae60'
    },
    {
      _id: 'vegan',
      name: 'Vegan',
      description: 'Plant-based recipes without any animal products',
      hasSubcategories: false,
      recipeCount: 50,
      color: '#2ecc71'
    },
    {
      _id: 'desserts',
      name: 'Desserts',
      description: 'Sweet treats and desserts from around the world',
      hasSubcategories: false,
      recipeCount: 80,
      color: '#f39c12'
    }
  ];

  // Food images for each category
  const categoryImages = {
    'non_vegetarian': 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
    'vegetarian': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center',
    'vegan': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center',
    'desserts': 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center'
  };

  return (
    <CategoriesSection id="categories">
      <Container>
        <SectionTitle>Explore Categories</SectionTitle>
        <SectionSubtitle>
          Discover recipes organized by dietary preferences and cuisine types
        </SectionSubtitle>
        
        <CategoriesGrid>
          {categories.map((category, index) => (
            <Link 
              key={category._id} 
              to={category.hasSubcategories ? 
                `/category/${category._id}` : 
                `/category/${category._id}/${category._id}`
              }
            >
              <CategoryCard
                color={category.color}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CategoryImage 
                  imageUrl={categoryImages[category._id] || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center'}
                />
                <CategoryName>{category.name}</CategoryName>
                <CategoryDescription>{category.description}</CategoryDescription>
                <CategoryCount>
                  {category.hasSubcategories ? 
                    `${category.subcategories.length} subcategories` : 
                    `${category.recipeCount} recipes available`
                  }
                </CategoryCount>
              </CategoryCard>
            </Link>
          ))}
        </CategoriesGrid>
      </Container>
    </CategoriesSection>
  );
};

export default Categories;