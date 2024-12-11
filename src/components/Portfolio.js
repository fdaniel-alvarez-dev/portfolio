import React, { useState, useEffect } from 'react';
import { Camera, Code, Layout, Palette, Send, Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  // Simulated AI-generated content
  const aiContent = {
    tagline: "Full Stack Developer & Solutions Architect",
    description: "Building scalable end-to-end solutions with React, Vue.js, Flask and containerized microservices. Transforming complex requirements into elegant, production-ready applications."
  };

  // Project data con imágenes actualizadas y enlaces
  const projects = [
    {
      title: "EasyMart!, Small scale. Smart shopping",
      description: "A minimalist e-commerce MVP that proves simplicity is the ultimate sophistication. Focused on clean code architecture and intuitive UX/UI design principles.",
      tags: ["React", "Tailwind", "JavaScript"],
      image: "https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?w=800&h=400&q=80",
      link: "https://fdaniel-alvarez-dev.github.io/ecommerce/"
    },
    {
      title: "Smart Portfolio Generator",
      description: "AI-assisted portfolio website generator for creatives",
      tags: ["Next.js", "Machine Learning", "Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&q=80",
      link: "https://fdaniel-alvarez-dev.github.io/portfolio-generator/"
    },
    {
      title: "Design System Creator",
      description: "Automated design system generation using AI",
      tags: ["Design Systems", "AI", "Components"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=400&q=80",
      link: "https://fdaniel-alvarez-dev.github.io/design-system-creator/"
    }
  ];

  // ... resto del código existente sin cambios hasta la sección de proyectos

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation y Hero section se mantienen igual */}
      <nav>...</nav>
      <section>...</section>

      {/* Projects Grid - Actualizado con enlaces */}
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
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
        <p>© 2024 Freddy Daniel Alvarez's Portfolio - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;