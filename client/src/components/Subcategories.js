import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const SubcategoriesContainer = styled.div`
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

const SubcategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SubcategoryCard = styled(motion.div)`
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

const SubcategoryName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const SubcategoryDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SubcategoryCount = styled.div`
  color: #28a745;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Subcategories = () => {
  const { id } = useParams();

  // Static subcategories data
  const subcategoriesData = {
    'non_vegetarian': [
      { _id: 'chicken', name: 'Chicken', description: 'Delicious chicken recipes from around the world', recipeCount: 50, color: '#e74c3c' },
      { _id: 'lamb', name: 'Lamb', description: 'Tender lamb and mutton dishes', recipeCount: 25, color: '#c0392b' },
      { _id: 'seafood', name: 'Seafood', description: 'Fresh seafood and fish recipes', recipeCount: 25, color: '#3498db' },
      { _id: 'beef', name: 'Beef', description: 'Rich beef dishes and steaks', recipeCount: 15, color: '#8e44ad' },
      { _id: 'pork', name: 'Pork', description: 'Flavorful pork recipes', recipeCount: 15, color: '#f39c12' }
    ],
    'vegetarian': [
      { _id: 'vegetables', name: 'Vegetables', description: 'Fresh vegetable dishes', recipeCount: 50, color: '#27ae60' },
      { _id: 'paneer', name: 'Paneer', description: 'Indian cottage cheese recipes', recipeCount: 50, color: '#2ecc71' },
      { _id: 'tofu', name: 'Tofu', description: 'Plant-based protein dishes', recipeCount: 50, color: '#16a085' },
      { _id: 'salads', name: 'Salads', description: 'Fresh and healthy salads', recipeCount: 50, color: '#1abc9c' },
      { _id: 'cashews', name: 'Cashews', description: 'Nut-based recipes', recipeCount: 50, color: '#f1c40f' },
      { _id: 'dal', name: 'Dal', description: 'Traditional lentil dishes', recipeCount: 50, color: '#e67e22' }
    ]
  };

  const subcategories = subcategoriesData[id] || [];

  return (
    <SubcategoriesContainer>
      <Container>
        <BackButton to="/">
          <FiArrowLeft />
          Back to Home
        </BackButton>

        <PageTitle>
          {id === 'non_vegetarian' ? 'Non-Vegetarian' : 
           id === 'vegetarian' ? 'Vegetarian' : 
           id === 'vegan' ? 'Vegan' : 
           id === 'desserts' ? 'Desserts' : 'Categories'}
        </PageTitle>
        
        <PageSubtitle>
          Choose a subcategory to explore recipes
        </PageSubtitle>

        <SubcategoriesGrid>
          {subcategories.map((subcategory, index) => (
            <Link 
              key={subcategory._id} 
              to={`/category/${id}/${subcategory._id}`}
            >
              <SubcategoryCard
                color={subcategory.color}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SubcategoryName>{subcategory.name}</SubcategoryName>
                <SubcategoryDescription>{subcategory.description}</SubcategoryDescription>
                <SubcategoryCount>
                  {subcategory.recipeCount} recipes available
                </SubcategoryCount>
              </SubcategoryCard>
            </Link>
          ))}
        </SubcategoriesGrid>
      </Container>
    </SubcategoriesContainer>
  );
};

export default Subcategories;