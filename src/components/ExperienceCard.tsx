import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  logoUrl: string;
}

// Update the width in ExperienceCard styled component
const CardContainer = styled(motion.div)`
  flex: 0 0 400px;  // Update to match TravelCard width
  min-width: 400px;
  background-color: transparent;
  color: ${theme.colors.background};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: ${theme.spacing.medium};  // Update to match TravelCard margin
  padding: ${theme.spacing.large};
  border: 2px solid ${theme.colors.primary};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: 300px;
  }
`;

const Title = styled.h3`
  color: ${theme.colors.text};
  font-size: 1.4rem;
  margin-bottom: ${theme.spacing.small};
`;

const Organization = styled.h4`
  color: ${theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.small};
`;

const Logo = styled.img`
  width: 200px;  // Fixed width for consistency
  height: 60px;  // Fixed height for consistency
  object-fit: contain;  // Preserve aspect ratio
  margin-bottom: ${theme.spacing.medium};
`;

const Period = styled.p`
  color: ${theme.colors.text};
  font-size: 1rem;
  margin-bottom: ${theme.spacing.medium};
  font-style: italic;
`;

const Description = styled.p`
  color: ${theme.colors.text};
  font-size: 1rem;
  line-height: 1.5;
`;
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  organization,
  period,
  description,
  logoUrl
}) => {
  return (
      <CardContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
      >
          <Logo src={logoUrl} alt={`${organization} logo`} />
          <Title>{title}</Title>
          <Organization>{organization}</Organization>
          <Period>{period}</Period>
          <Description>{description}</Description>
      </CardContainer>
  );
};

export default ExperienceCard;