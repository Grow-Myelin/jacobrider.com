import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  padding: ${theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${theme.spacing.medium};
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.large};
`;

const About: React.FC = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle>About Me</SectionTitle>
      <Paragraph>
        Hello, I'm John Doe, and I'm a software engineer passionate about building
        robust and user-friendly web applications. I have a strong interest in
        clean code and modern web practices using technologies such as React,
        Node.js, and Styled Components.
      </Paragraph>
      <Paragraph>
        I've worked on a variety of projects, from small personal websites to
        larger-scale applications and I'm always looking for new opportunities to
        learn and grow as a developer. When I'm not coding, you can find me
        exploring new hobbies and taking part in side projects.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;