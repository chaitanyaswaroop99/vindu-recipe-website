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
      'Chicken': [
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
        },
        {
          _id: 'chicken_4',
          name: 'Chicken Curry',
          description: 'Traditional Indian chicken curry with aromatic spices',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
          rating: 4.3,
          totalTime: 50,
          servings: 4,
          difficulty: 'Medium',
          cuisine: cuisineId || 'American'
        }
      ],
      'Lamb': [
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
        },
        {
          _id: 'lamb_4',
          name: 'Mutton Keema',
          description: 'Spiced minced lamb curry with peas',
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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
          image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&crop=center',
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