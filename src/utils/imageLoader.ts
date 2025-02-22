interface ImageModule {
    default: string;
  }
  
  export const loadGalleryImages = async (location: string): Promise<string[]> => {
    try {
      // Convert location URL parameter to gallery folder name
      const galleryFolder = `${location.toLowerCase()}-gallery`;
      console.log('🔍 Looking for gallery folder:', galleryFolder);
      
      // Import all images using a case-insensitive pattern
      const importedImages = import.meta.glob(
        '/src/assets/images/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
        { eager: true }
      );
      
      // Log all available paths
      console.log('📁 All available image paths:', Object.keys(importedImages));
      
      // Filter and log matching images
      const matchingPaths = Object.keys(importedImages).filter(path => {
        const normPath = path.toLowerCase();
        const matches = normPath.includes(`/${galleryFolder}/`);
        console.log(`🔎 Checking path: ${path} matches: ${matches}`);
        return matches;
      });
      
      console.log('✅ Matching paths:', matchingPaths);
      
      // Convert to image URLs
      const galleryImages = matchingPaths.map(path => {
        const imageModule = importedImages[path] as ImageModule;
        console.log('🖼️ Converting path to URL:', path, '→', imageModule.default);
        return imageModule.default;
      });
      
      console.log('🎯 Final gallery images:', galleryImages);
      return galleryImages;
      
    } catch (error) {
      console.error('❌ Error loading gallery images:', error);
      console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
      return [];
    }
  };