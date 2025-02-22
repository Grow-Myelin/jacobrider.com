import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    githubLink?: string;
    demoLink?: string;
}

interface ProjectSectionProps {
    projects: Project[];
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

const ProjectsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.medium};
    justify-content: center;
    width: 100%;
    max-width: 1200px;
`;

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
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
        Projects
      </SectionTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default ProjectSection;