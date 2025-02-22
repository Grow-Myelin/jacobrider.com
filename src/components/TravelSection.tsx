import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import TravelCard from './TravelCard';
import { motion } from 'framer-motion';

interface Travel {
    title: string;
    description: string;
    imageUrl: string;
    blogLink?: string;
    galleryFolder: string;
}

interface TravelSectionProps {
    travels: Travel[];
}

const SectionTitle = styled(motion.h2)`
    font-size: 2rem;
    margin-bottom: ${theme.spacing.medium};
    text-align: center;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1.5rem;
    }
`;

const SectionContainer = styled(motion.section)`
    padding: ${theme.spacing.large};
    margin-top: ${theme.spacing.medium}; // Add this line
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const TravelsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  gap: ${theme.spacing.medium};
  width: 100%;
  padding: ${theme.spacing.medium};
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  
  /* Hide scrollbar for Chrome/Safari/Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.small};
  }
`;
const TravelSection: React.FC<TravelSectionProps> = ({ travels }) => {
    return (
      <SectionContainer>
        <SectionTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Travels
        </SectionTitle>
        <SectionWrapper>
          <TravelsContainer>
            {travels.map((travel, index) => (
            <TravelCard
                key={index}
                title={travel.title}
                description={travel.description}
                imageUrl={travel.imageUrl}
                galleryFolder={travel.galleryFolder}
                blogLink={travel.blogLink}
            />
            ))}
          </TravelsContainer>
        </SectionWrapper>
      </SectionContainer>
    );
  };
  
  export default TravelSection;