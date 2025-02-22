import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  organization: string;
  date: string;
  description: string;
  period: string;
  type: "work" | "education";
  logoUrl: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const SectionContainer = styled(motion.section)`
  padding: ${theme.spacing.large};
  margin-top: ${theme.spacing.large}; // Add this line
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: ${theme.spacing.medium};
  text-align: center;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ExperiencesContainer = styled(motion.div)`
  display: flex;
  overflow-x: auto;
  gap: ${theme.spacing.medium};
  padding: ${theme.spacing.medium};  // Add padding to match TravelSection
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  width: 100%;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const CardContainer = styled(motion.div)`
//   flex: 0 0 300px;
//   min-width: 300px;
//   max-width: 300px;
//   margin: 0 ${theme.spacing.small};
  
//   @media (max-width: ${theme.breakpoints.mobile}) {
//     min-width: 260px;
//   }
// `;
const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
      <SectionContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
      >
          <SectionTitle
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
              Experience & Education
          </SectionTitle>
          <ExperiencesContainer>
              {experiences.map((experience, index) => (
                  <ExperienceCard
                      key={index}
                      {...experience}
                  />
              ))}
          </ExperiencesContainer>
      </SectionContainer>
  );
};

export default ExperienceSection;