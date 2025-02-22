import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { motion } from 'framer-motion';

const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: ${theme.spacing.large};
  text-align: center;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-family: 'Railway Thin', sans-serif;
  font-weight: 50; // This makes it "Arial Light"
  font-size: 4.5rem; // Increased from 3rem to 4.5rem
  margin-bottom: ${theme.spacing.medium};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.5rem; // Slightly increased from 2rem
  }
`;

const Subtitle = styled(motion.p)`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.large};
  color: ${theme.colors.secondary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

// const Button = styled(motion.a)`
//   padding: ${theme.spacing.medium} ${theme.spacing.large};
//   background-color: ${theme.colors.primary};
//   color: ${theme.colors.text};
//   text-decoration: none;
//   font-weight: bold;
//   border-radius: 4px;
//   display: inline-block;
//   margin-top: ${theme.spacing.medium};
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: ${theme.colors.secondary};
//     color: ${theme.colors.background};
//   }

//   @media (max-width: ${theme.breakpoints.mobile}) {
//     font-size: 0.9rem;
//   }
// `;
const HeroSection: React.FC = () => {
  return (
      <HeroContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
      >
          <Title
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
              JACOB RIDER
          </Title>
          <Subtitle
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
          >
              Finding beauty in data, dishes and destinations
          </Subtitle>
      </HeroContainer>
  );
};

export default HeroSection;