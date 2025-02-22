import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { theme } from '../styles/theme';
import { motion } from 'framer-motion';
import { loadGalleryImages } from '../utils/imageLoader';

const PageContainer = styled(motion.div)`
  padding: ${theme.spacing.large};
  min-height: 80vh;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.medium};
  margin-top: ${theme.spacing.large};
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled(motion.img)`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

const LocationTitle = styled.h1`
  text-align: center;
  margin-bottom: ${theme.spacing.large};
  color: ${theme.colors.text};
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${theme.colors.text};
`;

const TravelDetail: React.FC = () => {
  const { location } = useParams<{ location: string }>();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Map the URL paths to the correct gallery folder names
  const locationToGalleryMap: { [key: string]: { folder: string, title: string } } = {
    'amsterdam': { folder: 'amsterdam', title: 'Amsterdam, Netherlands' },
    'boston': { folder: 'boston', title: 'Boston, USA' },
    'chicago': { folder: 'chicago', title: 'Chicago, USA' },
    'italy': { folder: 'italy', title: 'Italy' },
    'japan': { folder: 'japan', title: 'Japan' },
    'england': { folder: 'england', title: 'England' },
    'new-york': { folder: 'nyc', title: 'New York City, USA' },
    'philippines': { folder: 'philippines', title: 'Philippines' }
  };

  useEffect(() => {
    const loadImages = async () => {
      if (location) {
        setLoading(true);
        try {
          // Get the correct gallery folder name from the map
          const locationKey = location.toLowerCase();
          const galleryInfo = locationToGalleryMap[locationKey];
          
          if (galleryInfo) {
            console.log('Loading images for location:', galleryInfo.folder);
            const loadedImages = await loadGalleryImages(galleryInfo.folder);
            console.log('Loaded images:', loadedImages);
            setImages(loadedImages);
          } else {
            console.error('Invalid location:', locationKey);
            setImages([]);
          }
        } catch (error) {
          console.error('Error loading images:', error);
          setImages([]);
        } finally {
          setLoading(false);
        }
      }
    };

    loadImages();
  }, [location]);

  const getLocationTitle = () => {
    if (location && locationToGalleryMap[location.toLowerCase()]) {
      return locationToGalleryMap[location.toLowerCase()].title;
    }
    return 'Location Not Found';
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LocationTitle>{getLocationTitle()}</LocationTitle>
      {loading ? (
        <LoadingMessage>Loading gallery...</LoadingMessage>
      ) : images.length > 0 ? (
        <>
          <GalleryGrid>
            {images.map((imageUrl, index) => (
              <Image 
                key={index}
                src={imageUrl}
                alt={`${location} gallery image ${index + 1}`}
                onClick={() => handleImageClick(imageUrl)}
              />
            ))}
          </GalleryGrid>

          {selectedImage && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <ModalImage 
                src={selectedImage}
                alt="Maximized gallery image"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15 }}
              />
            </Modal>
          )}
        </>
      ) : (
        <LoadingMessage>No images found for this location.</LoadingMessage>
      )}
    </PageContainer>
  );
};

export default TravelDetail;