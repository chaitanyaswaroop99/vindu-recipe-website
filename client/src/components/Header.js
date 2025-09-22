import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX, FiSearch, FiUser, FiLogOut, FiEdit3, FiKey, FiChevronDown } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #28a745;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #28a745;
  }
`;

const SearchBar = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e9ecef;
  border-radius: 25px;
  outline: none;
  transition: border-color 0.3s ease;
  background: #f8f9fa;
  width: 250px;
  
  &:focus {
    border-color: #28a745;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 0.8rem;
  color: #999;
  pointer-events: none;
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

const AuthButton = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.login {
    color: #333;
    border: 1px solid #e9ecef;
    
    &:hover {
      background: #f8f9fa;
      border-color: #28a745;
      color: #28a745;
    }
  }

  &.signup {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
    }
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

const ProfileButton = styled.button`
  background: none;
  border: 1px solid #e9ecef;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: #f8f9fa;
    border-color: #4f46e5;
    color: #4f46e5;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  min-width: 200px;
  z-index: 1000;
  overflow: hidden;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    position: static;
    margin-top: 0.5rem;
    width: 100%;
  }
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  text-align: left;

  &:hover {
    background: #f8f9fa;
    color: #4f46e5;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f1f3f4;
  }

  &.logout {
    color: #dc3545;
    
    &:hover {
      background: rgba(220, 53, 69, 0.1);
      color: #dc3545;
    }
  }
`;

const DropdownIcon = styled.div`
  font-size: 1rem;
  opacity: 0.7;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const handleDropdownToggle = () => {
    console.log('Dropdown toggle clicked, current state:', isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEditProfile = () => {
    // TODO: Navigate to edit profile page
    console.log('Edit profile clicked');
    setIsDropdownOpen(false);
  };

  const handleResetPassword = () => {
    // TODO: Navigate to reset password page
    console.log('Reset password clicked');
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">🍽️ Vindu</Logo>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/#categories">Categories</NavLink>
          
          <SearchBar onSubmit={handleSearch}>
            <SearchIcon />
            <SearchInput 
              placeholder="Search dishes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBar>

          {user ? (
            <UserMenu ref={dropdownRef}>
              <ProfileButton onClick={handleDropdownToggle}>
                <FiUser />
                {user.name}
                <FiChevronDown style={{ 
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} />
              </ProfileButton>
              
              <DropdownMenu isOpen={true}>
                <DropdownItem onClick={handleEditProfile}>
                  <DropdownIcon>
                    <FiEdit3 />
                  </DropdownIcon>
                  Edit Personal Info
                </DropdownItem>
                
                <DropdownItem onClick={handleResetPassword}>
                  <DropdownIcon>
                    <FiKey />
                  </DropdownIcon>
                  Reset Password
                </DropdownItem>
                
                <DropdownItem onClick={handleLogout} className="logout">
                  <DropdownIcon>
                    <FiLogOut />
                  </DropdownIcon>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UserMenu>
          ) : (
            <AuthButtons>
              <AuthButton to="/login" className="login">
                <FiUser />
                Login
              </AuthButton>
              <AuthButton to="/signup" className="signup">
                Sign Up
              </AuthButton>
            </AuthButtons>
          )}
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
