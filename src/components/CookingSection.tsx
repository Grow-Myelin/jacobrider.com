import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import CookingCard from './CookingCard';
import { motion } from 'framer-motion';

interface Recipe {
    title: string;
    description: string;
    imageUrl: string;
    recipeLink?: string;
    galleryFolder: string;
}

interface CookingSectionProps {
    recipes: Recipe[];
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
    margin-top: ${theme.spacing.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RecipesContainer = styled(motion.div)`
    display: flex;
    flex-wrap: nowrap;
    gap: ${theme.spacing.medium};
    width: 100%;
    padding: ${theme.spacing.medium};
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
        display: none;
    }
    
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const CookingSection: React.FC<CookingSectionProps> = ({ recipes }) => {
    return (
        <SectionContainer>
            <SectionTitle
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Cooking
            </SectionTitle>
            <RecipesContainer>
                {recipes.map((recipe, index) => (
                    <CookingCard
                        key={index}
                        {...recipe}
                    />
                ))}
            </RecipesContainer>
        </SectionContainer>
    );
};

export default CookingSection;