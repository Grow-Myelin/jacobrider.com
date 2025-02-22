import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  text-align: center;
  padding: ${theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.small};
  border-top: 1px solid ${theme.colors.background};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${theme.spacing.large};
`;

const SocialLink = styled.a`
  color: ${theme.colors.background};
    font-size: 1.5rem;

  &:hover {
    color: ${theme.colors.background};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialLink href="https://www.linkedin.com/in/jacobrider/" target="_blank">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/Grow-Myelin" target="_blank">
          <FaGithub />
        </SocialLink>
      </SocialIcons>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;