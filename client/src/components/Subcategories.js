import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

const SubcategoriesContainer = styled.div`
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

const SubcategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SubcategoryCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid #e9ecef;

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

const SubcategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
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

const Subcategories = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`/api/categories/${id}`);
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching category:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) {
    return (
      <SubcategoriesContainer>
        <Container>
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        </Container>
      </SubcategoriesContainer>
    );
  }

  if (!category || !category.hasSubcategories) {
    return (
      <SubcategoriesContainer>
        <Container>
          <BackButton to="/">
            <FiArrowLeft />
            Back to Home
          </BackButton>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            This category doesn't have subcategories.
          </div>
        </Container>
      </SubcategoriesContainer>
    );
  }

  return (
    <SubcategoriesContainer>
      <Container>
        <BackButton to="/">
          <FiArrowLeft />
          Back to Home
        </BackButton>
        
        <CategoryHeader>
          <CategoryTitle>
            {category.icon} {category.name}
          </CategoryTitle>
          <CategoryDescription>{category.description}</CategoryDescription>
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
            📊 {category.subcategories.length} subcategories available
          </div>
        </CategoryHeader>
        
        <SubcategoriesGrid>
          {category.subcategories.map((subcategory, index) => (
            <Link 
              key={subcategory._id} 
              to={subcategory.hasCuisines ? 
                `/category/${id}/${subcategory._id}/cuisines` : 
                `/category/${id}/${subcategory._id}`
              }
            >
              <SubcategoryCard
                color={category.color}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SubcategoryIcon>
                  {subcategory.icon}
                </SubcategoryIcon>
                <SubcategoryName>{subcategory.name}</SubcategoryName>
                <SubcategoryDescription>{subcategory.description}</SubcategoryDescription>
                <SubcategoryCount>
                  {subcategory.hasCuisines ? 
                    `${subcategory.cuisines?.length || 0} cuisines available` : 
                    `${subcategory.recipeCount} recipes available`
                  }
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
