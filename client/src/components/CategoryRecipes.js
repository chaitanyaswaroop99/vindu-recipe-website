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
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
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
        },
        {
          _id: 'chicken_4',
          name: 'Chicken Curry',
          description: 'Traditional Indian chicken curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_5',
          name: 'Chicken Korma',
          description: 'Mild and creamy chicken curry with cashews',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_6',
          name: 'Chicken Vindaloo',
          description: 'Spicy Goan chicken curry with vinegar and chilies',
          image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 60,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_7',
          name: 'Chicken Do Pyaza',
          description: 'Chicken curry with double onions and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_8',
          name: 'Chicken Chettinad',
          description: 'Spicy South Indian chicken curry with coconut',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_9',
          name: 'Chicken Makhani',
          description: 'Rich butter chicken with cream and tomatoes',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_10',
          name: 'Chicken Kadai',
          description: 'Spicy chicken curry cooked in a kadai with bell peppers',
          image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_11',
          name: 'Chicken Rogan Josh',
          description: 'Kashmiri chicken curry with yogurt and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_12',
          name: 'Chicken Jalfrezi',
          description: 'Stir-fried chicken with vegetables and spices',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_13',
          name: 'Chicken Saag',
          description: 'Chicken cooked with spinach and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_14',
          name: 'Chicken Handi',
          description: 'Chicken curry cooked in a traditional handi',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_15',
          name: 'Chicken Pasanda',
          description: 'Mild chicken curry with cream and almonds',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_16',
          name: 'Chicken Malai',
          description: 'Creamy chicken curry with cashews and cream',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_17',
          name: 'Chicken Dhansak',
          description: 'Parsi chicken curry with lentils and vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 60,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_18',
          name: 'Chicken Kolhapuri',
          description: 'Spicy Maharashtrian chicken curry',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_19',
          name: 'Chicken Xacuti',
          description: 'Goan chicken curry with coconut and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_20',
          name: 'Chicken Cafreal',
          description: 'Goan chicken curry with green masala',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_21',
          name: 'Chicken Sukka',
          description: 'Dry chicken curry with coconut and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_22',
          name: 'Chicken Ghee Roast',
          description: 'Spicy chicken roasted in ghee with spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_23',
          name: 'Chicken Pepper Fry',
          description: 'Spicy chicken with black pepper and curry leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_24',
          name: 'Chicken Chettinad Pepper',
          description: 'Spicy Chettinad chicken with black pepper',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_25',
          name: 'Chicken Masala',
          description: 'Classic chicken masala with onions and tomatoes',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_26',
          name: 'Chicken Tikka',
          description: 'Grilled chicken pieces marinated in spices',
          image: 'https://images.unsplash.com/photo-1588166524941-cf385776638c?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_27',
          name: 'Chicken Seekh Kebab',
          description: 'Minced chicken kebabs with spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_28',
          name: 'Chicken Reshmi Kebab',
          description: 'Silky chicken kebabs with cream and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_29',
          name: 'Chicken Tandoori',
          description: 'Tandoor-roasted chicken with yogurt marinade',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_30',
          name: 'Chicken Hariyali',
          description: 'Green chicken curry with mint and coriander',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_31',
          name: 'Chicken Methi',
          description: 'Chicken curry with fenugreek leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_32',
          name: 'Chicken Palak',
          description: 'Chicken curry with spinach and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_33',
          name: 'Chicken Bhuna',
          description: 'Dry-fried chicken with onions and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_34',
          name: 'Chicken Achari',
          description: 'Chicken curry with pickling spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_35',
          name: 'Chicken Lahori',
          description: 'Punjabi chicken curry with rich gravy',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_36',
          name: 'Chicken Karahi',
          description: 'Spicy chicken curry cooked in a karahi',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_37',
          name: 'Chicken Dum',
          description: 'Slow-cooked chicken curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 60,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_38',
          name: 'Chicken Nihari',
          description: 'Slow-cooked chicken curry with bone marrow',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 90,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_39',
          name: 'Chicken Haleem',
          description: 'Slow-cooked chicken with lentils and wheat',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 120,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_40',
          name: 'Chicken Pulao',
          description: 'Fragrant rice with chicken and spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_41',
          name: 'Chicken Fried Rice',
          description: 'Chinese-style chicken fried rice',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'chicken_42',
          name: 'Chicken Manchurian',
          description: 'Indo-Chinese chicken balls in spicy sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'chicken_43',
          name: 'Chicken 65',
          description: 'Spicy deep-fried chicken with curry leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_44',
          name: 'Chicken Lollipop',
          description: 'Chicken drumsticks marinated and fried',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'chicken_45',
          name: 'Chicken Wings',
          description: 'Spicy chicken wings with various sauces',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'chicken_46',
          name: 'Chicken Burger',
          description: 'Grilled chicken burger with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'chicken_47',
          name: 'Chicken Sandwich',
          description: 'Grilled chicken sandwich with mayo',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 15,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'chicken_48',
          name: 'Chicken Salad',
          description: 'Fresh chicken salad with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 20,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'chicken_49',
          name: 'Chicken Soup',
          description: 'Hearty chicken soup with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 40,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'chicken_50',
          name: 'Chicken Stew',
          description: 'Comforting chicken stew with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'American'
        }
      ],
      'lamb': [
        {
          _id: 'lamb_1',
          name: 'Mutton Curry',
          description: 'Rich and spicy lamb curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_4',
          name: 'Mutton Keema',
          description: 'Spiced minced lamb curry with peas',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_5',
          name: 'Mutton Korma',
          description: 'Mild and creamy lamb curry with cashews',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 65,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_6',
          name: 'Mutton Vindaloo',
          description: 'Spicy Goan lamb curry with vinegar and chilies',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 70,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_7',
          name: 'Mutton Do Pyaza',
          description: 'Lamb curry with double onions and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_8',
          name: 'Mutton Chettinad',
          description: 'Spicy South Indian lamb curry with coconut',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_9',
          name: 'Mutton Makhani',
          description: 'Rich butter lamb curry with cream and tomatoes',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_10',
          name: 'Mutton Kadai',
          description: 'Spicy lamb curry cooked in a kadai with bell peppers',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_11',
          name: 'Mutton Handi',
          description: 'Lamb curry cooked in a traditional handi',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_12',
          name: 'Mutton Pasanda',
          description: 'Mild lamb curry with cream and almonds',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_13',
          name: 'Mutton Malai',
          description: 'Creamy lamb curry with cashews and cream',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_14',
          name: 'Mutton Dhansak',
          description: 'Parsi lamb curry with lentils and vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 70,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_15',
          name: 'Mutton Kolhapuri',
          description: 'Spicy Maharashtrian lamb curry',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_16',
          name: 'Mutton Xacuti',
          description: 'Goan lamb curry with coconut and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 65,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_17',
          name: 'Mutton Cafreal',
          description: 'Goan lamb curry with green masala',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_18',
          name: 'Mutton Sukka',
          description: 'Dry lamb curry with coconut and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 45,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_19',
          name: 'Mutton Ghee Roast',
          description: 'Spicy lamb roasted in ghee with spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_20',
          name: 'Mutton Pepper Fry',
          description: 'Spicy lamb with black pepper and curry leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 40,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_21',
          name: 'Mutton Masala',
          description: 'Classic lamb masala with onions and tomatoes',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_22',
          name: 'Mutton Seekh Kebab',
          description: 'Minced lamb kebabs with spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_23',
          name: 'Mutton Reshmi Kebab',
          description: 'Silky lamb kebabs with cream and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_24',
          name: 'Mutton Tandoori',
          description: 'Tandoor-roasted lamb with yogurt marinade',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_25',
          name: 'Mutton Hariyali',
          description: 'Green lamb curry with mint and coriander',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_26',
          name: 'Mutton Methi',
          description: 'Lamb curry with fenugreek leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_27',
          name: 'Mutton Palak',
          description: 'Lamb curry with spinach and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_28',
          name: 'Mutton Bhuna',
          description: 'Dry-fried lamb with onions and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_29',
          name: 'Mutton Achari',
          description: 'Lamb curry with pickling spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_30',
          name: 'Mutton Lahori',
          description: 'Punjabi lamb curry with rich gravy',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_31',
          name: 'Mutton Karahi',
          description: 'Spicy lamb curry cooked in a karahi',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_32',
          name: 'Mutton Dum',
          description: 'Slow-cooked lamb curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 70,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_33',
          name: 'Mutton Nihari',
          description: 'Slow-cooked lamb curry with bone marrow',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 100,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_34',
          name: 'Mutton Haleem',
          description: 'Slow-cooked lamb with lentils and wheat',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 130,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_35',
          name: 'Mutton Pulao',
          description: 'Fragrant rice with lamb and spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 55,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_36',
          name: 'Mutton Fried Rice',
          description: 'Chinese-style lamb fried rice',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'lamb_37',
          name: 'Mutton Manchurian',
          description: 'Indo-Chinese lamb balls in spicy sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'lamb_38',
          name: 'Mutton 65',
          description: 'Spicy deep-fried lamb with curry leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_39',
          name: 'Mutton Lollipop',
          description: 'Lamb chops marinated and fried',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_40',
          name: 'Mutton Chops',
          description: 'Grilled lamb chops with herbs',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_41',
          name: 'Mutton Burger',
          description: 'Grilled lamb burger with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'lamb_42',
          name: 'Mutton Sandwich',
          description: 'Grilled lamb sandwich with mayo',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'lamb_43',
          name: 'Mutton Salad',
          description: 'Fresh lamb salad with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 30,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'lamb_44',
          name: 'Mutton Soup',
          description: 'Hearty lamb soup with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 50,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'lamb_45',
          name: 'Mutton Stew',
          description: 'Comforting lamb stew with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 60,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'lamb_46',
          name: 'Mutton Raan',
          description: 'Slow-roasted leg of lamb with spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 180,
          servings: 8,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_47',
          name: 'Mutton Boti',
          description: 'Grilled lamb cubes with spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_48',
          name: 'Mutton Galouti',
          description: 'Soft lamb kebabs with aromatic spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_49',
          name: 'Mutton Shami',
          description: 'Spiced lamb patties with lentils',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'lamb_50',
          name: 'Mutton Kofta',
          description: 'Lamb meatballs in rich curry',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 55,
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
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
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
        },
        {
          _id: 'seafood_4',
          name: 'Fish Fry',
          description: 'Crispy fried fish with spices and curry leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_5',
          name: 'Prawn Curry',
          description: 'Creamy prawn curry with coconut milk',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_6',
          name: 'Crab Masala',
          description: 'Spicy crab curry with onions and tomatoes',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_7',
          name: 'Fish Tikka',
          description: 'Grilled fish pieces marinated in spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_8',
          name: 'Prawn Biryani',
          description: 'Fragrant rice with prawns and saffron',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 70,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_9',
          name: 'Fish Biryani',
          description: 'Aromatic rice with fish and spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 75,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_10',
          name: 'Prawn Fry',
          description: 'Crispy fried prawns with spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 15,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_11',
          name: 'Fish Manchurian',
          description: 'Indo-Chinese fish balls in spicy sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'seafood_12',
          name: 'Prawn Manchurian',
          description: 'Indo-Chinese prawn balls in spicy sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 25,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'seafood_13',
          name: 'Fish 65',
          description: 'Spicy deep-fried fish with curry leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_14',
          name: 'Prawn 65',
          description: 'Spicy deep-fried prawns with curry leaves',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 18,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_15',
          name: 'Fish Pakora',
          description: 'Fish fritters with gram flour batter',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_16',
          name: 'Prawn Pakora',
          description: 'Prawn fritters with gram flour batter',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_17',
          name: 'Fish Cutlet',
          description: 'Fish patties with potatoes and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_18',
          name: 'Prawn Cutlet',
          description: 'Prawn patties with potatoes and spices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_19',
          name: 'Fish Pulao',
          description: 'Fragrant rice with fish and spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_20',
          name: 'Prawn Pulao',
          description: 'Fragrant rice with prawns and spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_21',
          name: 'Fish Stew',
          description: 'Hearty fish stew with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_22',
          name: 'Prawn Stew',
          description: 'Hearty prawn stew with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_23',
          name: 'Fish Soup',
          description: 'Light fish soup with herbs',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_24',
          name: 'Prawn Soup',
          description: 'Light prawn soup with herbs',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'seafood_25',
          name: 'Fish Salad',
          description: 'Fresh fish salad with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 15,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'seafood_26',
          name: 'Prawn Salad',
          description: 'Fresh prawn salad with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 15,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'seafood_27',
          name: 'Fish Sandwich',
          description: 'Grilled fish sandwich with mayo',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'seafood_28',
          name: 'Prawn Sandwich',
          description: 'Grilled prawn sandwich with mayo',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 18,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'seafood_29',
          name: 'Fish Burger',
          description: 'Grilled fish burger with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'seafood_30',
          name: 'Prawn Burger',
          description: 'Grilled prawn burger with vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 22,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'seafood_31',
          name: 'Fish Tacos',
          description: 'Fish tacos with fresh vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'seafood_32',
          name: 'Prawn Tacos',
          description: 'Prawn tacos with fresh vegetables',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'seafood_33',
          name: 'Fish and Chips',
          description: 'Classic fish and chips with tartar sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'British'
        },
        {
          _id: 'seafood_34',
          name: 'Prawn Cocktail',
          description: 'Prawn cocktail with cocktail sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 15,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'seafood_35',
          name: 'Fish Ceviche',
          description: 'Fresh fish cured in citrus juices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Peruvian'
        },
        {
          _id: 'seafood_36',
          name: 'Prawn Ceviche',
          description: 'Fresh prawns cured in citrus juices',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 18,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Peruvian'
        },
        {
          _id: 'seafood_37',
          name: 'Fish Tempura',
          description: 'Japanese-style fried fish with light batter',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_38',
          name: 'Prawn Tempura',
          description: 'Japanese-style fried prawns with light batter',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 20,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_39',
          name: 'Fish Sushi',
          description: 'Fresh fish sushi with rice and seaweed',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 40,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_40',
          name: 'Prawn Sushi',
          description: 'Fresh prawn sushi with rice and seaweed',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 35,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_41',
          name: 'Fish Teriyaki',
          description: 'Grilled fish with teriyaki sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_42',
          name: 'Prawn Teriyaki',
          description: 'Grilled prawns with teriyaki sauce',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 25,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_43',
          name: 'Fish Ramen',
          description: 'Japanese fish ramen with noodles',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_44',
          name: 'Prawn Ramen',
          description: 'Japanese prawn ramen with noodles',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'seafood_45',
          name: 'Fish Pasta',
          description: 'Italian fish pasta with herbs',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'seafood_46',
          name: 'Prawn Pasta',
          description: 'Italian prawn pasta with herbs',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'seafood_47',
          name: 'Fish Risotto',
          description: 'Creamy fish risotto with rice',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'seafood_48',
          name: 'Prawn Risotto',
          description: 'Creamy prawn risotto with rice',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'seafood_49',
          name: 'Fish Paella',
          description: 'Spanish fish paella with saffron rice',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 50,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Spanish'
        },
        {
          _id: 'seafood_50',
          name: 'Prawn Paella',
          description: 'Spanish prawn paella with saffron rice',
          image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
          rating: 4.9,
          totalTime: 45,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Spanish'
        }
      ],
      'vegetables': [
        {
          _id: 'veg_1',
          name: 'Aloo Gobi',
          description: 'Spiced potatoes and cauliflower curry',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 35,
          servings: 6,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_4',
          name: 'Aloo Matar',
          description: 'Potato and pea curry with spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_5',
          name: 'Gobi Masala',
          description: 'Cauliflower curry with onions and tomatoes',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_6',
          name: 'Aloo Jeera',
          description: 'Cumin-spiced potatoes',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_7',
          name: 'Bhindi Masala',
          description: 'Okra curry with onions and spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_8',
          name: 'Aloo Palak',
          description: 'Potatoes cooked with spinach',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_9',
          name: 'Gobi Manchurian',
          description: 'Indo-Chinese cauliflower balls in spicy sauce',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'veg_10',
          name: 'Aloo Manchurian',
          description: 'Indo-Chinese potato balls in spicy sauce',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'veg_11',
          name: 'Vegetable Fried Rice',
          description: 'Chinese-style vegetable fried rice',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'veg_12',
          name: 'Vegetable Noodles',
          description: 'Stir-fried vegetables with noodles',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 15,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'veg_13',
          name: 'Vegetable Pulao',
          description: 'Fragrant rice with mixed vegetables',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_14',
          name: 'Vegetable Biryani',
          description: 'Aromatic rice with vegetables and spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 45,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_15',
          name: 'Vegetable Curry',
          description: 'Mixed vegetables in coconut curry',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_16',
          name: 'Vegetable Soup',
          description: 'Hearty vegetable soup with herbs',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_17',
          name: 'Vegetable Salad',
          description: 'Fresh mixed vegetable salad',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.0,
          totalTime: 10,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'veg_18',
          name: 'Vegetable Stir Fry',
          description: 'Quick stir-fried vegetables with sauce',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 15,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'veg_19',
          name: 'Vegetable Pasta',
          description: 'Italian pasta with mixed vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'veg_20',
          name: 'Vegetable Risotto',
          description: 'Creamy rice with mixed vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'veg_21',
          name: 'Vegetable Lasagna',
          description: 'Layered pasta with vegetables and cheese',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 60,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'veg_22',
          name: 'Vegetable Pizza',
          description: 'Pizza topped with mixed vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'veg_23',
          name: 'Vegetable Burger',
          description: 'Grilled vegetable burger with bun',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'veg_24',
          name: 'Vegetable Sandwich',
          description: 'Fresh vegetable sandwich with mayo',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 15,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'veg_25',
          name: 'Vegetable Wrap',
          description: 'Fresh vegetables wrapped in tortilla',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.0,
          totalTime: 10,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'veg_26',
          name: 'Vegetable Tacos',
          description: 'Vegetable tacos with fresh toppings',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'veg_27',
          name: 'Vegetable Quesadilla',
          description: 'Cheese and vegetable quesadilla',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 15,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'veg_28',
          name: 'Vegetable Burrito',
          description: 'Large tortilla filled with vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 25,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'veg_29',
          name: 'Vegetable Sushi',
          description: 'Vegetable sushi with rice and seaweed',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'veg_30',
          name: 'Vegetable Tempura',
          description: 'Japanese-style fried vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'veg_31',
          name: 'Vegetable Ramen',
          description: 'Japanese vegetable ramen with noodles',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'veg_32',
          name: 'Vegetable Teriyaki',
          description: 'Grilled vegetables with teriyaki sauce',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'veg_33',
          name: 'Vegetable Curry (Thai)',
          description: 'Thai-style vegetable curry with coconut milk',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Thai'
        },
        {
          _id: 'veg_34',
          name: 'Vegetable Pad Thai',
          description: 'Thai stir-fried noodles with vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Thai'
        },
        {
          _id: 'veg_35',
          name: 'Vegetable Spring Rolls',
          description: 'Fresh vegetable spring rolls with dipping sauce',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Thai'
        },
        {
          _id: 'veg_36',
          name: 'Vegetable Fried Rice (Thai)',
          description: 'Thai-style vegetable fried rice',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 15,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Thai'
        },
        {
          _id: 'veg_37',
          name: 'Vegetable Curry (Indian)',
          description: 'Traditional Indian vegetable curry',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_38',
          name: 'Vegetable Dal',
          description: 'Lentils cooked with vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_39',
          name: 'Vegetable Sambar',
          description: 'South Indian vegetable sambar',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_40',
          name: 'Vegetable Rasam',
          description: 'South Indian vegetable rasam',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_41',
          name: 'Vegetable Korma',
          description: 'Mild vegetable curry with cream',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_42',
          name: 'Vegetable Vindaloo',
          description: 'Spicy vegetable curry with vinegar',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_43',
          name: 'Vegetable Do Pyaza',
          description: 'Vegetable curry with double onions',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_44',
          name: 'Vegetable Chettinad',
          description: 'Spicy South Indian vegetable curry',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_45',
          name: 'Vegetable Kolhapuri',
          description: 'Spicy Maharashtrian vegetable curry',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_46',
          name: 'Vegetable Xacuti',
          description: 'Goan vegetable curry with coconut',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_47',
          name: 'Vegetable Cafreal',
          description: 'Goan vegetable curry with green masala',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_48',
          name: 'Vegetable Sukka',
          description: 'Dry vegetable curry with coconut',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_49',
          name: 'Vegetable Ghee Roast',
          description: 'Spicy vegetables roasted in ghee',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'veg_50',
          name: 'Vegetable Pepper Fry',
          description: 'Spicy vegetables with black pepper',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        }
      ],
      'paneer': [
        {
          _id: 'paneer_1',
          name: 'Paneer Butter Masala',
          description: 'Creamy tomato curry with soft paneer cubes',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_4',
          name: 'Paneer Tikka Masala',
          description: 'Grilled paneer in spiced tomato cream sauce',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_5',
          name: 'Paneer Curry',
          description: 'Traditional Indian paneer curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_6',
          name: 'Paneer Korma',
          description: 'Mild and creamy paneer curry with cashews',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_7',
          name: 'Paneer Vindaloo',
          description: 'Spicy Goan paneer curry with vinegar and chilies',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_8',
          name: 'Paneer Do Pyaza',
          description: 'Paneer curry with double onions and spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_9',
          name: 'Paneer Chettinad',
          description: 'Spicy South Indian paneer curry with coconut',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_10',
          name: 'Paneer Makhani',
          description: 'Rich butter paneer curry with cream and tomatoes',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_11',
          name: 'Paneer Kadai',
          description: 'Spicy paneer curry cooked in a kadai with bell peppers',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_12',
          name: 'Paneer Handi',
          description: 'Paneer curry cooked in a traditional handi',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_13',
          name: 'Paneer Pasanda',
          description: 'Mild paneer curry with cream and almonds',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_14',
          name: 'Paneer Malai',
          description: 'Creamy paneer curry with cashews and cream',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_15',
          name: 'Paneer Kolhapuri',
          description: 'Spicy Maharashtrian paneer curry',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_16',
          name: 'Paneer Xacuti',
          description: 'Goan paneer curry with coconut and spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_17',
          name: 'Paneer Cafreal',
          description: 'Goan paneer curry with green masala',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_18',
          name: 'Paneer Sukka',
          description: 'Dry paneer curry with coconut and spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_19',
          name: 'Paneer Ghee Roast',
          description: 'Spicy paneer roasted in ghee with spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_20',
          name: 'Paneer Pepper Fry',
          description: 'Spicy paneer with black pepper and curry leaves',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_21',
          name: 'Paneer Masala',
          description: 'Classic paneer masala with onions and tomatoes',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_22',
          name: 'Paneer Seekh Kebab',
          description: 'Minced paneer kebabs with spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_23',
          name: 'Paneer Reshmi Kebab',
          description: 'Silky paneer kebabs with cream and spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_24',
          name: 'Paneer Tandoori',
          description: 'Tandoor-roasted paneer with yogurt marinade',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_25',
          name: 'Paneer Hariyali',
          description: 'Green paneer curry with mint and coriander',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_26',
          name: 'Paneer Methi',
          description: 'Paneer curry with fenugreek leaves',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_27',
          name: 'Paneer Bhuna',
          description: 'Dry-fried paneer with onions and spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_28',
          name: 'Paneer Achari',
          description: 'Paneer curry with pickling spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_29',
          name: 'Paneer Lahori',
          description: 'Punjabi paneer curry with rich gravy',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_30',
          name: 'Paneer Karahi',
          description: 'Spicy paneer curry cooked in a karahi',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_31',
          name: 'Paneer Dum',
          description: 'Slow-cooked paneer curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_32',
          name: 'Paneer Pulao',
          description: 'Fragrant rice with paneer and spices',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_33',
          name: 'Paneer Biryani',
          description: 'Aromatic rice with paneer and saffron',
          image: 'https://images.unsplash.com/photo-1631515243349-7e05b975742a?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 45,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_34',
          name: 'Paneer Fried Rice',
          description: 'Chinese-style paneer fried rice',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'paneer_35',
          name: 'Paneer Manchurian',
          description: 'Indo-Chinese paneer balls in spicy sauce',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 25,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Chinese'
        },
        {
          _id: 'paneer_36',
          name: 'Paneer 65',
          description: 'Spicy deep-fried paneer with curry leaves',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 15,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_37',
          name: 'Paneer Pakora',
          description: 'Paneer fritters with gram flour batter',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_38',
          name: 'Paneer Cutlet',
          description: 'Paneer patties with potatoes and spices',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_39',
          name: 'Paneer Sandwich',
          description: 'Grilled paneer sandwich with mayo',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 15,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'paneer_40',
          name: 'Paneer Burger',
          description: 'Grilled paneer burger with vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'paneer_41',
          name: 'Paneer Salad',
          description: 'Fresh paneer salad with vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.0,
          totalTime: 10,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'paneer_42',
          name: 'Paneer Soup',
          description: 'Light paneer soup with herbs',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 15,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_43',
          name: 'Paneer Stew',
          description: 'Hearty paneer stew with vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'paneer_44',
          name: 'Paneer Pasta',
          description: 'Italian pasta with paneer and herbs',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'paneer_45',
          name: 'Paneer Risotto',
          description: 'Creamy paneer risotto with rice',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'paneer_46',
          name: 'Paneer Pizza',
          description: 'Pizza topped with paneer and vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'paneer_47',
          name: 'Paneer Lasagna',
          description: 'Layered pasta with paneer and cheese',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 50,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'paneer_48',
          name: 'Paneer Tacos',
          description: 'Paneer tacos with fresh vegetables',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'paneer_49',
          name: 'Paneer Quesadilla',
          description: 'Cheese and paneer quesadilla',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 15,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'paneer_50',
          name: 'Paneer Burrito',
          description: 'Large tortilla filled with paneer',
          image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
          rating: 4.1,
          totalTime: 20,
          servings: 2,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Mexican'
        }
      ],
      'desserts': [
        {
          _id: 'dessert_1',
          name: 'Chocolate Cake',
          description: 'Rich and moist chocolate cake with chocolate frosting',
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 60,
          servings: 8,
          difficulty: 'Medium',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_2',
          name: 'Tiramisu',
          description: 'Classic Italian dessert with coffee and mascarpone',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&crop=center',
          rating: 4.9,
          totalTime: 45,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'dessert_3',
          name: 'Cheesecake',
          description: 'Creamy New York style cheesecake with berry topping',
          image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 90,
          servings: 8,
          difficulty: 'Hard',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_4',
          name: 'Apple Pie',
          description: 'Traditional American apple pie with flaky crust',
          image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 75,
          servings: 8,
          difficulty: 'Medium',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_5',
          name: 'Ice Cream',
          description: 'Homemade vanilla ice cream with chocolate chips',
          image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_6',
          name: 'Chocolate Chip Cookies',
          description: 'Soft and chewy chocolate chip cookies',
          image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 25,
          servings: 12,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_7',
          name: 'Brownies',
          description: 'Fudgy chocolate brownies with walnuts',
          image: 'https://images.unsplash.com/photo-1606890737304-57a3840b65ff?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 35,
          servings: 9,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_8',
          name: 'Cupcakes',
          description: 'Vanilla cupcakes with buttercream frosting',
          image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 12,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_9',
          name: 'Pudding',
          description: 'Creamy vanilla pudding with caramel sauce',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 20,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'American'
        },
        {
          _id: 'dessert_10',
          name: 'Mousse',
          description: 'Light and airy chocolate mousse',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_11',
          name: 'Creme Brulee',
          description: 'Classic French custard with caramelized sugar',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 60,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_12',
          name: 'Panna Cotta',
          description: 'Italian dessert with vanilla and berry compote',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'dessert_13',
          name: 'Gulab Jamun',
          description: 'Traditional Indian dessert with rose syrup',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 40,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_14',
          name: 'Rasgulla',
          description: 'Bengali cottage cheese balls in sugar syrup',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 50,
          servings: 6,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_15',
          name: 'Kheer',
          description: 'Traditional Indian rice pudding with nuts',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_16',
          name: 'Jalebi',
          description: 'Crispy spiral-shaped sweet with sugar syrup',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_17',
          name: 'Halwa',
          description: 'Semolina halwa with ghee and nuts',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_18',
          name: 'Ladoo',
          description: 'Sweet balls made with gram flour and sugar',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.2,
          totalTime: 20,
          servings: 8,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_19',
          name: 'Barfi',
          description: 'Milk-based fudge with cardamom and nuts',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_20',
          name: 'Kulfi',
          description: 'Traditional Indian ice cream with pistachios',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Indian'
        },
        {
          _id: 'dessert_21',
          name: 'Macarons',
          description: 'French almond cookies with ganache filling',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 90,
          servings: 12,
          difficulty: 'Hard',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_22',
          name: 'Eclairs',
          description: 'French pastry with cream filling and chocolate glaze',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 60,
          servings: 8,
          difficulty: 'Hard',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_23',
          name: 'Profiteroles',
          description: 'Cream puffs with vanilla ice cream and chocolate sauce',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 45,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_24',
          name: 'Cannoli',
          description: 'Italian pastry tubes with ricotta filling',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 50,
          servings: 8,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'dessert_25',
          name: 'Gelato',
          description: 'Italian ice cream with various flavors',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 35,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Italian'
        },
        {
          _id: 'dessert_26',
          name: 'Baklava',
          description: 'Layered pastry with nuts and honey syrup',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 75,
          servings: 12,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Turkish'
        },
        {
          _id: 'dessert_27',
          name: 'Churros',
          description: 'Spanish fried dough with cinnamon sugar',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Spanish'
        },
        {
          _id: 'dessert_28',
          name: 'Flan',
          description: 'Spanish caramel custard dessert',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 50,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Spanish'
        },
        {
          _id: 'dessert_29',
          name: 'Mochi',
          description: 'Japanese rice cake with sweet filling',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 40,
          servings: 8,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'dessert_30',
          name: 'Dorayaki',
          description: 'Japanese pancake sandwich with red bean paste',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 30,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Japanese'
        },
        {
          _id: 'dessert_31',
          name: 'Mango Sticky Rice',
          description: 'Thai dessert with sweet mango and coconut rice',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 45,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Thai'
        },
        {
          _id: 'dessert_32',
          name: 'Coconut Ice Cream',
          description: 'Creamy coconut ice cream with toasted coconut',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 35,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Thai'
        },
        {
          _id: 'dessert_33',
          name: 'Tres Leches',
          description: 'Mexican sponge cake soaked in three kinds of milk',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 60,
          servings: 8,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'dessert_34',
          name: 'Churro Ice Cream Sandwich',
          description: 'Churro cookies with vanilla ice cream',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 40,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Mexican'
        },
        {
          _id: 'dessert_35',
          name: 'Pavlova',
          description: 'Australian meringue dessert with fresh fruit',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 90,
          servings: 8,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Australian'
        },
        {
          _id: 'dessert_36',
          name: 'Lamingtons',
          description: 'Australian sponge cake with chocolate and coconut',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 50,
          servings: 12,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Australian'
        },
        {
          _id: 'dessert_37',
          name: 'Sticky Toffee Pudding',
          description: 'British dessert with dates and toffee sauce',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 70,
          servings: 6,
          difficulty: 'Medium',
          cuisine: cuisineId || 'British'
        },
        {
          _id: 'dessert_38',
          name: 'Trifle',
          description: 'British layered dessert with fruit and custard',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 45,
          servings: 8,
          difficulty: 'Easy',
          cuisine: cuisineId || 'British'
        },
        {
          _id: 'dessert_39',
          name: 'Black Forest Cake',
          description: 'German chocolate cake with cherries and cream',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 90,
          servings: 10,
          difficulty: 'Hard',
          cuisine: cuisineId || 'German'
        },
        {
          _id: 'dessert_40',
          name: 'Apple Strudel',
          description: 'Austrian pastry with apples and cinnamon',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 8,
          difficulty: 'Medium',
          cuisine: cuisineId || 'Austrian'
        },
        {
          _id: 'dessert_41',
          name: 'Sachertorte',
          description: 'Austrian chocolate cake with apricot jam',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.9,
          totalTime: 120,
          servings: 12,
          difficulty: 'Hard',
          cuisine: cuisineId || 'Austrian'
        },
        {
          _id: 'dessert_42',
          name: 'Crepes',
          description: 'French thin pancakes with various fillings',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 25,
          servings: 4,
          difficulty: 'Easy',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_43',
          name: 'Souffle',
          description: 'Light and airy French dessert with chocolate',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 50,
          servings: 4,
          difficulty: 'Hard',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_44',
          name: 'Madeleines',
          description: 'French shell-shaped sponge cakes',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.4,
          totalTime: 35,
          servings: 12,
          difficulty: 'Medium',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_45',
          name: 'Petit Fours',
          description: 'Small French pastries with various flavors',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 60,
          servings: 16,
          difficulty: 'Hard',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_46',
          name: 'Opera Cake',
          description: 'French layered cake with coffee and chocolate',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.8,
          totalTime: 90,
          servings: 12,
          difficulty: 'Hard',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_47',
          name: 'Tarte Tatin',
          description: 'French upside-down apple tart',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.7,
          totalTime: 70,
          servings: 8,
          difficulty: 'Medium',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_48',
          name: 'Clafoutis',
          description: 'French baked dessert with cherries and custard',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.5,
          totalTime: 50,
          servings: 6,
          difficulty: 'Easy',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_49',
          name: 'Profiterole Tower',
          description: 'Stacked cream puffs with chocolate ganache',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.9,
          totalTime: 75,
          servings: 8,
          difficulty: 'Hard',
          cuisine: cuisineId || 'French'
        },
        {
          _id: 'dessert_50',
          name: 'Chocolate Fondue',
          description: 'Melted chocolate with fresh fruits for dipping',
          image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center',
          rating: 4.6,
          totalTime: 20,
          servings: 6,
          difficulty: 'Easy',
          cuisine: cuisineId || 'Swiss'
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
        image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&h=300&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center',
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
