import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Subcategories from './components/Subcategories';
import Cuisines from './components/Cuisines';
import CategoryRecipes from './components/CategoryRecipes';
import RecipeDetail from './components/RecipeDetail';
import Footer from './components/Footer';
import FoodBackground from './components/FoodBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  position: relative;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <FoodBackground />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Categories />
            </>
          } />
          <Route path="/category/:id" element={<Subcategories />} />
          <Route path="/category/:id/:subcategoryId/cuisines" element={<Cuisines />} />
          <Route path="/category/:id/:subcategoryId/:cuisineId" element={<CategoryRecipes />} />
          <Route path="/category/:id/:subcategoryId" element={<CategoryRecipes />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
