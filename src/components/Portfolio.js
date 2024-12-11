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

  // Project data
  const projects = [
    {
      title: "AI-Driven E-commerce",
      description: "An e-commerce platform with AI-powered product recommendations",
      tags: ["React", "AI", "UI/UX"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Smart Portfolio Generator",
      description: "AI-assisted portfolio website generator for creatives",
      tags: ["Next.js", "Machine Learning", "Design"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Design System Creator",
      description: "Automated design system generation using AI",
      tags: ["Design Systems", "AI", "Components"],
      image: "/api/placeholder/400/300"
    }
  ];

  // Skills data with progress
  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Front-end Development", level: 85 },
    { name: "AI Integration", level: 80 },
    { name: "Responsive Design", level: 95 },
    { name: "Design Systems", level: 88 }
  ];

  useEffect(() => {
    // Simulate AI content loading
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Projects Grid */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h2>
          <div className="max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
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