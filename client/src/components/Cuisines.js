import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const CuisinesContainer = styled.div`
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

const CuisinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CuisineCard = styled(motion.div)`
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

const CuisineName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CuisineDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CuisineCount = styled.div`
  color: #28a745;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Cuisines = () => {
  const { id, subcategoryId } = useParams();

  // Static cuisines data
  const cuisinesData = {
    'chicken': [
      { _id: 'indian', name: 'Indian', description: 'Traditional Indian chicken dishes', recipeCount: 25, color: '#e74c3c' },
      { _id: 'italian', name: 'Italian', description: 'Classic Italian chicken recipes', recipeCount: 15, color: '#c0392b' },
      { _id: 'chinese', name: 'Chinese', description: 'Chinese chicken specialties', recipeCount: 10, color: '#3498db' }
    ],
    'lamb': [
      { _id: 'indian', name: 'Indian', description: 'Traditional Indian lamb dishes', recipeCount: 15, color: '#8e44ad' },
      { _id: 'middle_eastern', name: 'Middle Eastern', description: 'Middle Eastern lamb specialties', recipeCount: 10, color: '#f39c12' }
    ],
    'seafood': [
      { _id: 'indian', name: 'Indian', description: 'Indian seafood delicacies', recipeCount: 15, color: '#3498db' },
      { _id: 'mediterranean', name: 'Mediterranean', description: 'Mediterranean seafood dishes', recipeCount: 10, color: '#1abc9c' }
    ],
    'vegetables': [
      { _id: 'indian', name: 'Indian', description: 'Traditional Indian vegetable dishes', recipeCount: 30, color: '#27ae60' },
      { _id: 'italian', name: 'Italian', description: 'Italian vegetable specialties', recipeCount: 20, color: '#2ecc71' }
    ],
    'paneer': [
      { _id: 'indian', name: 'Indian', description: 'Classic Indian paneer dishes', recipeCount: 30, color: '#16a085' },
      { _id: 'fusion', name: 'Fusion', description: 'Modern paneer fusion recipes', recipeCount: 20, color: '#1abc9c' }
    ]
  };

  const cuisines = cuisinesData[subcategoryId] || [];

  return (
    <CuisinesContainer>
      <Container>
        <BackButton to={`/category/${id}`}>
          <FiArrowLeft />
          Back to {id === 'non_vegetarian' ? 'Non-Vegetarian' : 'Vegetarian'}
        </BackButton>

        <PageTitle>
          {subcategoryId === 'chicken' ? 'Chicken' : 
           subcategoryId === 'lamb' ? 'Lamb' : 
           subcategoryId === 'seafood' ? 'Seafood' : 
           subcategoryId === 'vegetables' ? 'Vegetables' : 
           subcategoryId === 'paneer' ? 'Paneer' : 'Cuisines'}
        </PageTitle>
        
        <PageSubtitle>
          Choose a cuisine to explore recipes
        </PageSubtitle>

        <CuisinesGrid>
          {cuisines.map((cuisine, index) => (
            <Link 
              key={cuisine._id} 
              to={`/category/${id}/${subcategoryId}/${cuisine._id}`}
            >
              <CuisineCard
                color={cuisine.color}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CuisineName>{cuisine.name}</CuisineName>
                <CuisineDescription>{cuisine.description}</CuisineDescription>
                <CuisineCount>
                  {cuisine.recipeCount} recipes available
                </CuisineCount>
              </CuisineCard>
            </Link>
          ))}
        </CuisinesGrid>
      </Container>
    </CuisinesContainer>
  );
};

export default Cuisines;