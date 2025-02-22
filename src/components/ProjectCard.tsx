import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    githubLink?: string;
    demoLink?: string;
}

const CardContainer = styled(motion.div)`
  background-color: transparent;
  color: ${theme.colors.background};
  border-radius: 8px;
  width: calc(45% - ${theme.spacing.medium}); // Increased width
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: ${theme.spacing.medium};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px; // Increased height
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const ProjectTitle = styled.h3`
    margin: ${theme.spacing.medium} 0;
    font-size: 1.2rem;
    text-align: center;
`;

const ProjectDescription = styled.p`
    margin-bottom: ${theme.spacing.medium};
    font-size: 0.9rem;
    text-align: left;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: ${theme.spacing.medium};
    margin-top: auto;
    background-color: #4A0404; // Explicit maroon color
    padding: ${theme.spacing.small};
    border-radius: 0 0 8px 8px;
    margin: 0 -${theme.spacing.medium} -${theme.spacing.medium};
`;

const IconLink = styled(motion.a)`
    color: ${theme.colors.background}; // Cream icons
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: rgba(245, 230, 211, 0.8); // Slightly transparent cream for hover
    }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, githubLink, demoLink }) => {
  return (
    <CardContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3}}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
    >
      <ProjectImage src={imageUrl} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <LinkContainer>
        {githubLink && (
            <IconLink href={githubLink} target="_blank">
              <FaGithub />
            </IconLink>
          )}
        {demoLink && (
          <IconLink href={demoLink} target="_blank">
            <FaExternalLinkAlt />
          </IconLink>
        )}
      </LinkContainer>
    </CardContainer>
  );
};

export default ProjectCard;