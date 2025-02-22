import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CookingCardProps {
    title: string;
    description: string;  // Keep this as it might be used later
    imageUrl: string;
    recipeLink?: string;
    galleryFolder: string;
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
    height: 400px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const RecipeImage = styled.img`
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

const RecipeTitle = styled.h3`
    color: ${theme.colors.background};
    font-size: 1.2rem;
    text-align: center;
    margin: ${theme.spacing.medium} 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const CookingCard: React.FC<CookingCardProps> = ({ title, imageUrl }) => {
    return (
        <CardLink to={`/recipe/${title.toLowerCase().replace(/\s+/g, '-')}`}>
            <CardContainer
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
            >
                <ImageContainer>
                    <RecipeImage src={imageUrl} alt={title} />
                    <TitleOverlay>
                        <RecipeTitle>{title}</RecipeTitle>
                    </TitleOverlay>
                </ImageContainer>
            </CardContainer>
        </CardLink>
    );
};

export default CookingCard;