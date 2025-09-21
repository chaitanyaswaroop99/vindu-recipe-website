import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
`;

const FoodImage = styled.div`
  position: absolute;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: ${fadeInOut} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.4;
  filter: blur(1px);
  
  &:hover {
    opacity: 0.6;
    filter: blur(0px);
    transition: all 0.3s ease;
  }
`;

const FloatingFood = styled.div`
  position: absolute;
  font-size: ${props => props.size}px;
  opacity: 0.2;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  user-select: none;
`;

const FoodBackground = () => {
  const foodImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop&crop=center',
      name: 'Chicken Curry',
      top: '10%',
      left: '5%',
      width: '200px',
      height: '150px',
      duration: 8,
      delay: 0
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop&crop=center',
      name: 'Paneer Tikka',
      top: '20%',
      right: '10%',
      width: '180px',
      height: '140px',
      duration: 10,
      delay: 2
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center',
      name: 'Biryani',
      top: '60%',
      left: '8%',
      width: '220px',
      height: '160px',
      duration: 12,
      delay: 4
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1563379091339-03246963d4d0?w=300&h=200&fit=crop&crop=center',
      name: 'Chicken Biryani',
      top: '70%',
      right: '15%',
      width: '190px',
      height: '145px',
      duration: 9,
      delay: 1
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop&crop=center',
      name: 'Paneer Butter Masala',
      top: '40%',
      left: '60%',
      width: '170px',
      height: '130px',
      duration: 11,
      delay: 3
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop&crop=center',
      name: 'Chicken Tikka',
      top: '15%',
      left: '70%',
      width: '160px',
      height: '120px',
      duration: 7,
      delay: 5
    }
  ];

  const foodEmojis = ['🍗', '🧀', '🍛', '🍚', '🥘', '🍖', '🧆', '🍲'];

  return (
    <BackgroundContainer>
      {foodImages.map((food) => (
        <FoodImage
          key={food.id}
          imageUrl={food.url}
          style={{
            top: food.top,
            left: food.left,
            right: food.right,
            width: food.width,
            height: food.height,
          }}
          duration={food.duration}
          delay={food.delay}
          title={food.name}
        />
      ))}
      
      {/* Floating food emojis */}
      {foodEmojis.map((emoji, index) => (
        <FloatingFood
          key={index}
          size={Math.random() * 20 + 20}
          duration={Math.random() * 10 + 5}
          delay={Math.random() * 5}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        >
          {emoji}
        </FloatingFood>
      ))}
    </BackgroundContainer>
  );
};

export default FoodBackground;
