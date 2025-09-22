import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  animation: ${fadeInOut} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 25%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.1) 75%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
`;

const FloatingEmojis = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
`;

const FloatingEmoji = styled.div`
  position: absolute;
  font-size: ${props => props.size}px;
  opacity: 0.3;
  animation: ${keyframes`
    0% {
      transform: translateY(100vh) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.3;
    }
    90% {
      opacity: 0.3;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  `} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
`;

const LiveFoodBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Diverse food images for transitions
  const foodImages = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&h=1080&fit=crop&crop=center', // Mixed meat platter
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1920&h=1080&fit=crop&crop=center', // Vegetarian dishes
    'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=1920&h=1080&fit=crop&crop=center', // Butter chicken
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop&crop=center', // Chocolate cake
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&h=1080&fit=crop&crop=center', // Healthy bowl
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&crop=center', // Pasta
    'https://images.unsplash.com/photo-1563379091339-03246963d4d1?w=1920&h=1080&fit=crop&crop=center', // Curry
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&h=1080&fit=crop&crop=center', // Stew
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1920&h=1080&fit=crop&crop=center', // Asian food
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1920&h=1080&fit=crop&crop=center', // Pizza
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1920&h=1080&fit=crop&crop=center', // Sushi
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&h=1080&fit=crop&crop=center', // Pancakes
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&h=1080&fit=crop&crop=center', // Tacos
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&h=1080&fit=crop&crop=center', // Burger
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&crop=center'  // Salad
  ];

  const foodEmojis = ['🍽️', '🍕', '🍜', '🍛', '🍲', '🥘', '🍱', '🍣', '🍤', '🍳', '🥗', '🌮', '🌯', '🥙', '🍔', '🍟', '🌭', '🥪', '🍞', '🥐', '🧀', '🍰', '🍪', '🍩', '🍫', '🍭', '🍬', '🍯', '🥜', '🍇', '🍓', '🍒', '🍑', '🍊', '🍋', '🍌', '🍉', '🍈', '🍐', '🍎'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [foodImages.length]);

  return (
    <BackgroundContainer>
      {/* Background Images with staggered animations */}
      {foodImages.map((imageUrl, index) => (
        <BackgroundImage
          key={index}
          imageUrl={imageUrl}
          duration={foodImages.length * 5} // Total duration for all images
          delay={index * 5} // Staggered delay
        />
      ))}
      
      {/* Dark overlay for better text readability */}
      <Overlay />
      
      {/* Floating food emojis */}
      <FloatingEmojis>
        {foodEmojis.slice(0, 15).map((emoji, index) => (
          <FloatingEmoji
            key={index}
            size={Math.random() * 20 + 20} // Random size between 20-40px
            duration={Math.random() * 10 + 15} // Random duration between 15-25s
            delay={Math.random() * 10} // Random delay
            left={Math.random() * 100} // Random horizontal position
          >
            {emoji}
          </FloatingEmoji>
        ))}
      </FloatingEmojis>
    </BackgroundContainer>
  );
};

export default LiveFoodBackground;
