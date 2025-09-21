import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

const CuisinesContainer = styled.div`
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
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: white;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    transform: translateX(-5px);
  }
`;

const CuisinesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CuisinesTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const CuisinesDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const CuisinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CuisineCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CuisineIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const CuisineName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CuisineDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: center;
`;

const CuisineCount = styled.div`
  background: #e8f5e8;
  color: #28a745;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
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

const Cuisines = () => {
  const { id, subcategoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(`/api/categories/${id}`);
        setCategory(categoryResponse.data);

        if (subcategoryId) {
          const subcategoryData = categoryResponse.data.subcategories?.find(
            sub => sub._id === subcategoryId
          );
          setSubcategory(subcategoryData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, subcategoryId]);

  if (loading) {
    return (
      <CuisinesContainer>
        <Container>
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        </Container>
      </CuisinesContainer>
    );
  }

  if (!subcategory || !subcategory.hasCuisines) {
    return (
      <CuisinesContainer>
        <Container>
          <BackButton to={`/category/${id}`}>
            <FiArrowLeft />
            Back to {category?.name}
          </BackButton>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            No cuisine categories available for {subcategory?.name}.
          </div>
        </Container>
      </CuisinesContainer>
    );
  }

  return (
    <CuisinesContainer>
      <Container>
        <BackButton to={`/category/${id}`}>
          <FiArrowLeft />
          Back to {category?.name}
        </BackButton>

        <CuisinesHeader>
          <CuisinesTitle>
            {subcategory.icon} {subcategory.name} Cuisines
          </CuisinesTitle>
          <CuisinesDescription>
            Explore {subcategory.name.toLowerCase()} recipes by cuisine type
          </CuisinesDescription>
        </CuisinesHeader>

        <CuisinesGrid>
          {subcategory.cuisines.map((cuisine, index) => (
            <CuisineCard
              key={cuisine._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              as={Link}
              to={`/category/${id}/${subcategoryId}/${cuisine._id}`}
            >
              <CuisineIcon>{cuisine.icon}</CuisineIcon>
              <CuisineName>{cuisine.name}</CuisineName>
              <CuisineDescription>{cuisine.description}</CuisineDescription>
              <CuisineCount>
                {cuisine.recipeCount} recipes available
              </CuisineCount>
            </CuisineCard>
          ))}
        </CuisinesGrid>
      </Container>
    </CuisinesContainer>
  );
};

export default Cuisines;
