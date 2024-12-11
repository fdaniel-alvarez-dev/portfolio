import React, { useState, useEffect } from 'react';
import { Camera, Code, Layout, Palette, Send, Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadedStates, setImageLoadedStates] = useState({});

  const aiContent = {
    tagline: "Full Stack Developer & Solutions Architect",
    description: "Building scalable end-to-end solutions with React, Vue.js, Flask and containerized microservices. Transforming complex requirements into elegant, production-ready applications."
  };

  const projects = [
    {
      title: "EasyMart!, Small scale. Smart shopping",
      description: "A minimalist e-commerce MVP that proves simplicity is the ultimate sophistication...",
      tags: ["React", "Tailwind", "JavaScript"],
      // Imagen local con path relativo al dominio de GitHub Pages
      image: process.env.PUBLIC_URL + '/images/ecommerce.jpeg',
      link: "https://fdaniel-alvarez-dev.github.io/ecommerce/"
    },
    {
      title: "Smart Portfolio Generator",
      description: "A minimalist Portfolio website generator for creatives MVP",
      tags: ["Next.js", "Machine Learning", "Design"],
      image: process.env.PUBLIC_URL + '/images/portfolio.webp',
      link: "https://fdaniel-alvarez-dev.github.io/portfolio-generator/"
    },
    {
      title: "Design System Creator",
      description: "A minimalist Automated design system generation MVP",
      tags: ["Design Systems", "AI", "Components"],
      image: process.env.PUBLIC_URL + '/images/system_design.webp',
      link: "https://fdaniel-alvarez-dev.github.io/design-system-creator/"
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
    // Inicializar estados de carga de imágenes
    const initialLoadStates = {};
    projects.forEach((_, index) => {
      initialLoadStates[index] = false;
    });
    setImageLoadedStates(initialLoadStates);
  }, []);

  const handleImageLoad = (index) => {
    setImageLoadedStates(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">Welcome to my Portfolio</div>
            <div className="flex space-x-6">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{aiContent.tagline}</h1>
              <p className="text-xl text-gray-600 mb-8">{aiContent.description}</p>
            </>
          )}
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  {!imageLoadedStates[index] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-110 ${
                      imageLoadedStates[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = process.env.PUBLIC_URL + '/images/fallback.jpg';
                      
                      handleImageLoad(index);
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Freddy Daniel Alvarez's Portfolio - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;