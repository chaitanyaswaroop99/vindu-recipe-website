import React from 'react';
import styled from 'styled-components';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #FF6B6B;
  }
  
  p, li {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF6B6B;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>🍽️ Vindu</h3>
            <p>
              Discover amazing dishes from around the world. From traditional recipes 
              to modern fusion cuisine, we bring you the best culinary experiences.
            </p>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact Info</h3>
            <ContactItem>
              <FiMapPin />
              <span>123 Food Street, Culinary City</span>
            </ContactItem>
            <ContactItem>
              <FiPhone />
              <span>+1 (555) 123-4567</span>
            </ContactItem>
            <ContactItem>
              <FiMail />
              <span>hello@foodieparadise.com</span>
            </ContactItem>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
            <p>
              © 2024 Matsa Chaitanya. All rights reserved.
            </p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
