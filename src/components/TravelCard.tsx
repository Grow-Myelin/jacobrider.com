import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { motion } from 'framer-motion';

interface TravelCardProps {
    title: string;
    description: string;
    imageUrl: string;
    galleryFolder: string;
    blogLink?: string;
}

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;

const CardContainer = styled(motion.div)`
    background-color: transparent;
    color: ${theme.colors.background};
    border-radius: 8px;
    width: 400px;
    height: 400px; // Reduced from 500px to remove extra space
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%; // Changed from 300px to 100% to fill entire card
`;

const TravelImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TitleOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(74, 4, 4, 0.9));
    padding: ${theme.spacing.medium};
`;

const TravelTitle = styled.h3`
  color: ${theme.colors.background};
  font-size: 1.2rem;
  text-align: center;
  margin: ${theme.spacing.medium} 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

// const TravelDescription = styled.p`
//     margin-bottom: ${theme.spacing.medium};
//     font-size: 0.9rem;
//     text-align: left;
// `;

// const LinkContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: ${theme.spacing.medium};
//     margin-top: auto;
//     background-color: #4A0404;
//     padding: ${theme.spacing.small};
//     border-radius: 0 0 8px 8px;
//     margin: 0 -${theme.spacing.medium} -${theme.spacing.medium};
// `;

// const IconLink = styled(motion.a)`
//     color: ${theme.colors.background};
//     font-size: 1.5rem;
//     transition: all 0.3s ease-in-out;

//     &:hover {
//         color: rgba(245, 230, 211, 0.8);
//     }
// `;
const TravelCard: React.FC<TravelCardProps> = ({ title, imageUrl }) => {
  const getLocationPath = (title: string) => {
      const city = title.split(',')[0].trim().toLowerCase();
      const cityUrlMap: { [key: string]: string } = {
          'london': 'london',
          'tokyo': 'tokyo',
          'manila': 'manila',
          'chicago': 'chicago',
          'new york city': 'new-york',
          'boston': 'boston',
          'amsterdam': 'amsterdam',
          'rome': 'rome'
      };
      return cityUrlMap[city] || city;
  };
  
  return (
      <CardLink to={`/travel/${getLocationPath(title)}`}>
          <CardContainer
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
          >
              <ImageContainer>
                  <TravelImage src={imageUrl} alt={title} />
                  <TitleOverlay>
                      <TravelTitle>{title}</TravelTitle>
                  </TitleOverlay>
              </ImageContainer>
          </CardContainer>
      </CardLink>
  );
};

export default TravelCard;