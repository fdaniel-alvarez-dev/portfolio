import React, { useState, useEffect } from 'react';
import { Camera, Code, Layout, Palette, Send, Github, Linkedin, Mail, Phone, Database, Server } from 'lucide-react';

const About = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
      <div className="prose max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          As a Senior Full Stack Developer with over 8 years of experience, I specialize in transforming complex business requirements into elegant, scalable solutions. My expertise lies in building end-to-end applications that drive business growth and enhance user experience.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          What sets me apart is my ability to bridge the gap between technical excellence and business value. I've successfully led teams in delivering mission-critical projects for enterprises across various industries, consistently exceeding expectations and meeting tight deadlines.
        </p>
        <p className="text-lg text-gray-600">
          My approach combines technical mastery with strategic thinking, enabling businesses to not just solve current challenges, but build sustainable, future-proof solutions. Whether it's optimizing performance, implementing complex architectures, or mentoring development teams, I bring a wealth of experience and a proven track record of success.
        </p>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        "React.js", "Vue.js", "Next.js", "JavaScript (ES6+)", 
        "TypeScript", "HTML5", "CSS3", "Sass/SCSS",
        "Tailwind CSS", "Redux", "Vuex", "RESTful APIs",
        "GraphQL", "Responsive Design", "Web Performance Optimization"
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Python", "Flask", "Node.js", "Express.js",
        "RESTful API Design", "GraphQL API Design",
        "Authentication & Authorization", "Microservices Architecture"
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "MongoDB", "PostgreSQL", "Redis", "Docker",
        "Kubernetes", "CI/CD", "AWS", "Azure",
        "Git", "GitHub Actions", "Jenkins"
      ]
    },
    {
      title: "Tools & Methodologies",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Agile/Scrum", "Test-Driven Development",
        "Unit Testing", "Integration Testing",
        "Performance Testing", "Code Review",
        "Technical Documentation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <a href="mailto:falvarezpinto@gmail.com" className="text-blue-600 hover:text-blue-800">
                falvarezpinto@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
              <a href="https://wa.me/59177805759" className="text-blue-600 hover:text-blue-800">
                +591 77805759
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Github className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
              <a href="https://github.com/fdaniel-alvarez-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                fdaniel-alvarez-dev
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
              <a href="https://linkedin.com/in/fdaniel-alvarez" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                fdaniel-alvarez
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoadedStates, setImageLoadedStates] = useState({});

  const aiContent = {
    tagline: "Full Stack Developer & Solutions Architect",
    description: "Building scalable end-to-end solutions with React, Vue.js, Flask and containerized microservices. Transforming complex requirements into elegant, production-ready applications."
  };

  const projects = [
    {
      title: "EasyMart!, Small scale. Smart shopping",
      description: "A minimalist e-commerce MVP that proves simplicity is the ultimate sophistication. Built with scalability in mind, featuring real-time inventory management and seamless payment integration.",
      tags: ["React", "Tailwind", "JavaScript"],
      image: process.env.PUBLIC_URL + '/images/ecommerce.jpeg',
      link: "https://fdaniel-alvarez-dev.github.io/ecommerce/"
    },
    {
      title: "Smart Portfolio Generator",
      description: "A minimalist Portfolio website generator for creatives. Leveraging AI to create unique, personalized portfolio layouts that showcase your work effectively.",
      tags: ["Next.js", "Machine Learning", "Design"],
      image: process.env.PUBLIC_URL + '/images/portfolio.webp',
      link: "https://fdaniel-alvarez-dev.github.io/portfolio-generator/"
    },
    {
      title: "Design System Creator",
      description: "An automated design system generation tool that streamlines the process of creating and maintaining consistent design languages across large applications.",
      tags: ["Design Systems", "AI", "Components"],
      image: process.env.PUBLIC_URL + '/images/system_design.webp',
      link: "https://fdaniel-alvarez-dev.github.io/design-system-creator/"
    }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
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

  const renderProjects = () => (
    <section className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.20))] py-12 px-6 bg-white">
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
  );

  const renderContent = () => {
    const heroContent = (
      <>
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
        {renderProjects()}
      </>
    );

    switch(activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return renderProjects();
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      case 'hero':
        return heroContent;
      default:
        return heroContent;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="text-xl font-bold text-gray-800 cursor-pointer" 
              onClick={() => setActiveSection('hero')}
            >
              Welcome to my Portfolio
            </div>
            <div className="flex space-x-6">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {renderContent()}

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>© 2024 Freddy Daniel Alvarez's Portfolio - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;