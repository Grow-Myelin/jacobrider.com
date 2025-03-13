
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import TravelSection from '../components/TravelSection';
import ExperienceSection from '../components/ExperienceSection';
// import CookingSection from '../components/CookingSection';

// Import JPG images
import japanImage from '../assets/images/japan.jpg';
import londonImage from '../assets/images/london.jpg';
import phillipinesImage from '../assets/images/phillipines.jpg';
import chicagoImage from '../assets/images/chicago.jpg';
import newYorkImage from '../assets/images/newyork.jpg';
import bostonImage from '../assets/images/boston.jpg';
import amsterdamImage from '../assets/images/amsterdam.jpg';
import italyImage from '../assets/images/italy.jpg';
import deltaLogo from '../assets/images/experiences/delta.png';
import gsuRobinsonLogo from '../assets/images/experiences/GSU_robinson.png';
import mercedesLogo from '../assets/images/experiences/mercedes.png';
import gsuLogo from '../assets/images/experiences/GSU.png';
// import pastaImage from '../assets/images/cooking/pasta.jpg';
// import breadImage from '../assets/images/cooking/bread.jpg';
interface Project {
    title: string;
    description: string;
    imageUrl: string;
    githubLink: string;
    demoLink: string;
}

interface Travel {
    title: string;
    description: string;
    imageUrl: string;
    galleryFolder: string;  // Changed to reference a folder path
}

interface Experience {
    title: string;
    organization: string;
    period: string;
    date: string;
    description: string;
    type: 'work' | 'education';
    logoUrl: string;  // Add this new field
  }
  
const projectsData: Project[] = [
    {
        title: 'Project 3',
        description:
            'This is a brief description of the project. It may have specific features and functionalities, and I would talk about it a bit more.',
        imageUrl: 'https://placekitten.com/302/202',
        githubLink: 'https://www.github.com/john-doe/project3',
        demoLink: 'https://project3.com',
    },
    {
        title: 'Project 4',
        description:
            'This is a brief description of the project. It may have specific features and functionalities, and I would talk about it a bit more.',
        imageUrl: 'https://placekitten.com/303/203',
        githubLink: 'https://www.github.com/john-doe/project4',
        demoLink: 'https://project4.com',
    },
];

const travelsData: Travel[] = [
    {
        title: 'England',
        description: 'Exploring the historic streets and modern attractions of London.',
        imageUrl: londonImage,
        galleryFolder: 'london-gallery'  // This should match your assets folder structure
    },
    {
        title: 'Japan',
        description: 'Experiencing the unique blend of tradition and technology in Tokyo.',
        imageUrl: japanImage,
        galleryFolder: 'japan-gallery'
    },
    {
        title: 'Philippines',
        description: 'Discovering the vibrant culture of the Philippines.',
        imageUrl: phillipinesImage,
        galleryFolder: 'philippines-gallery'
    },
    {
        title: 'Chicago, USA',
        description: 'Exploring the Windy City\'s architecture and culture.',
        imageUrl: chicagoImage,
        galleryFolder: 'chicago-gallery'
    },
    {
        title: 'New York City, USA',
        description: 'Adventures in the city that never sleeps.',
        imageUrl: newYorkImage,
        galleryFolder: 'nyc-gallery'
    },
    {
        title: 'Boston, USA',
        description: 'Walking through America\'s historic revolutionary city.',
        imageUrl: bostonImage,
        galleryFolder: 'boston-gallery'
    },
    {
        title: 'Amsterdam, Netherlands',
        description: 'Exploring the beautiful canals and rich history.',
        imageUrl: amsterdamImage,
        galleryFolder: 'amsterdam-gallery'
    },
    {
        title: 'Italy',
        description: 'Experiencing the eternal city\'s ancient wonders.',
        imageUrl: italyImage,
        galleryFolder: 'italy-gallery'
    }
];
const experienceData: Experience[] = [
    {
      title: 'Data Engineer',
      organization: 'Delta Air Lines',
      period: 'Jun 2022 - Present',
      date: 'Jun 2022',
      description: 'Insert description of delta job here',
      type: 'work',
      logoUrl: deltaLogo
    },
    {
        title: 'M.S. Quantitative Risk Analysis & Management',
        organization: 'Georgia State University',
        period: 'Aug 2024 - Present',
        date: 'Aug 2024',
        description: 'Insert description of graduate program',
        type: 'education',
        logoUrl: gsuRobinsonLogo
      },
    {
        title: 'Business Analyst',
        organization: 'Mercedes-Benz',
        period: 'Mar 2021 - Dec 2021',
        date: 'Mar 2021',
        description: 'Insert description of mercedes job here',
        type: 'work',
        logoUrl: mercedesLogo
      },
    {
        title: 'B.S. Mathematics & Economics',
        organization: 'Georgia State University',
        period: 'Dec 2020',
        date: 'Dec 2020',
        description: 'Insert description of undergraduate program',
        type: 'education',
        logoUrl: gsuLogo
      }
  ];
  
// // Add recipe data
// const recipesData = [
//     {
//         title: 'Homemade Pasta',
//         description: 'Fresh pasta made from scratch with simple ingredients',
//         imageUrl: pastaImage,
//         galleryFolder: 'pasta-gallery'
//     },
//     {
//         title: 'Sourdough Bread',
//         description: 'Artisanal sourdough bread with perfect crust',
//         imageUrl: breadImage,
//         galleryFolder: 'bread-gallery'
//     },
//     // Add more recipes as needed
// ];
const Home = (): JSX.Element => {
    return (
        <>
            <HeroSection />
            <ExperienceSection experiences={experienceData} />
            <ProjectSection projects={projectsData} />
            <TravelSection travels={travelsData} />
            {/* <CookingSection recipes={recipesData} /> */}
        </>
    );
};

export default Home;