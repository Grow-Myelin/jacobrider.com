import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../styles/theme';

const NavContainer = styled.nav`
  background-color: ${theme.colors.primary}; // Change to maroon
  padding: ${theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid ${theme.colors.background}; // Change to cream
`;

const Logo = styled.h1`
  color: ${theme.colors.background}; // Change to cream
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: ${theme.spacing.large};
  list-style: none;
`;

const StyledLink = styled(NavLink)`
  color: ${theme.colors.background}; // Change to cream
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &.active {
    color: ${theme.colors.background}; // Change to cream
    text-decoration: underline;
  }

  &:hover {
    color: rgba(245, 230, 211, 0.8); // Slightly transparent cream for hover
  }
`;


const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Logo>Portfolio</Logo>
      <NavLinks>
        <li>
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;