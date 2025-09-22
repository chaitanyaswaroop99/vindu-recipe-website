import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Subcategories from './components/Subcategories';
import Cuisines from './components/Cuisines';
import CategoryRecipes from './components/CategoryRecipes';
import RecipeDetail from './components/RecipeDetail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import FoodBackground from './components/FoodBackground';

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  position: relative;
`;

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContainer>
          <FoodBackground />
          <Routes>
            {/* Public routes - no authentication required */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected routes - authentication required */}
            <Route path="/" element={
              <ProtectedRoute>
                <Header />
                <Hero />
                <Categories />
                <Footer />
              </ProtectedRoute>
            } />
            <Route path="/category/:id" element={
              <ProtectedRoute>
                <Header />
                <Subcategories />
                <Footer />
              </ProtectedRoute>
            } />
            <Route path="/category/:id/:subcategoryId/cuisines" element={
              <ProtectedRoute>
                <Header />
                <Cuisines />
                <Footer />
              </ProtectedRoute>
            } />
            <Route path="/category/:id/:subcategoryId/:cuisineId" element={
              <ProtectedRoute>
                <Header />
                <CategoryRecipes />
                <Footer />
              </ProtectedRoute>
            } />
            <Route path="/category/:id/:subcategoryId" element={
              <ProtectedRoute>
                <Header />
                <CategoryRecipes />
                <Footer />
              </ProtectedRoute>
            } />
            <Route path="/recipe/:recipeId" element={
              <ProtectedRoute>
                <Header />
                <RecipeDetail />
                <Footer />
              </ProtectedRoute>
            } />
            <Route path="*" element={
              <ProtectedRoute>
                <Header />
                <div style={{ padding: '100px 20px', textAlign: 'center', color: 'white' }}>
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                  <a href="/" style={{ color: 'white', textDecoration: 'underline' }}>Go back to home</a>
                </div>
                <Footer />
              </ProtectedRoute>
            } />
          </Routes>
        </AppContainer>
      </Router>
    </AuthProvider>
  );
}

export default App;
