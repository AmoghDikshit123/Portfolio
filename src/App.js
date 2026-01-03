import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-card:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .timeline-item:hover .timeline-content {
          transform: scale(1.02);
        }

        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: translateX(0);
        }

        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
        }
      `}</style>

      {/* Navigation Bar */}
      <nav style={{
        ...styles.navbar,
        background: scrolled ? 'rgba(15, 15, 35, 0.98)' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(102, 126, 234, 0.3)' : 'none',
      }}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Amogh Dikshit</div>
          <div style={styles.navLinks}>
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.toLowerCase() ? '#667eea' : scrolled ? '#e0e0e0' : '#ffffff',
                  fontWeight: activeSection === item.toLowerCase() ? '600' : '500',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent} className="fade-in-up">
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Hi, I'm <span style={styles.gradient}>Amogh Dikshit</span>
            </h1>
            <h2 style={styles.heroSubtitle}>Full Stack Developer</h2>
            <p style={styles.heroDescription}>
              Crafting scalable web applications with React, Node.js, and AI-powered automation
            </p>
            <div style={styles.heroButtons}>
              <button
                onClick={() => scrollToSection('projects')}
                style={styles.primaryButton}
                className="pulse"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                style={styles.secondaryButton}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div style={styles.heroImage} className="float">
            <div style={styles.avatarCircle}>
              <div style={styles.avatarText}>AD</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={{...styles.container, paddingBottom:'30px'}}>
          <h2 style={styles.sectionTitle} className="fade-in-up">About Me</h2>
          <div style={styles.aboutContent}>
            <div style={styles.aboutText} className="slide-in-left">
              <h3 style={styles.aboutSubtitle}>Career Objective</h3>
              <p style={styles.aboutDescription}>
                Entry-level Full Stack Developer with strong React expertise, seeking to build scalable 
                and high-performance web applications using modern frontend practices, RESTful architectures, 
                and Agentic AI-based automation.
              </p>
              <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                  <strong>Location:</strong> Bengaluru, Karnataka
                </div>
                <div style={styles.infoItem}>
                  <strong>Education:</strong> BE - CSE (Data Science)
                </div>
                <div style={styles.infoItem}>
                  <strong>CGPA:</strong> 9.42
                </div>
                <div style={styles.infoItem}>
                  <strong>College:</strong> Dayananda Sagar College
                </div>
              </div>
            </div>
            <div style={styles.summaryBox} className="slide-in-right">
              <h3 style={styles.summaryTitle}>Summary</h3>
              <p style={styles.summaryText}>
                Detail-oriented Full Stack Developer specializing in React.js, JavaScript, HTML, and CSS 
                with backend exposure to Node.js and Express. Experienced in JWT-based authentication, 
                frontend performance optimization, responsive UI development, and clean modular coding practices. 
                Strong foundation in Data Structures and Algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.skillsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Technical Skills</h2>
          <div style={styles.skillsGrid}>
            {[
              { category: 'Frontend', skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript (ES6+)', 'React.js', 'Flexbox'] },
              { category: 'Backend', skills: ['Node.js', 'Express', 'Python'] },
              { category: 'Databases', skills: ['MySQL', 'MongoDB', 'SQLite'] },
              { category: 'AI & Automation', skills: ['Agentic AI', 'AI Agents', 'Workflow Automation'] },
              { category: 'Core CS', skills: ['Data Structures', 'Algorithms', 'OOPs'] },
              { category: 'Tools & Others', skills: ['Git', 'GitHub', 'REST APIs', 'JWT Auth', 'Tableau'] },
            ].map((group, index) => (
              <div
                key={group.category}
                className="skill-card fade-in-up"
                style={{
                  ...styles.skillCard,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <h3 style={styles.skillCategory}>{group.category}</h3>
                <div style={styles.skillTags}>
                  {group.skills.map((skill) => (
                    <span key={skill} style={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" style={styles.section}>
        <div style={{...styles.container,paddingBottom:'30px'}}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Experience & Education</h2>
          <div style={styles.timeline}>
            {[
              {
                year: '2022 - 2026',
                title: 'B.E. Computer Science & Engineering',
                subtitle: 'Dayananda Sagar College of Engineering',
                description: 'Specialization in Data Science | CGPA: 9.42',
                type: 'education',
              },
              {
                year: '2024-2025',
                title: 'NxtWave Codeverse Program',
                subtitle: 'Technical Experience',
                description: 'Developed full stack applications using React, Node.js, Express, and SQLite. Practiced REST API integration, responsive UI development, and modular component architecture.',
                type: 'experience',
              },
              {
                year: '2020 - 2022',
                title: '12th Grade - PCMB',
                subtitle: 'Disha PU College of Science',
                description: 'Score: 96.5%',
                type: 'education',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="timeline-item fade-in-up"
                style={{
                  ...styles.timelineItem,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div style={styles.timelineMarker}>
                  <div style={{
                    ...styles.timelineDot,
                    background: item.type === 'experience' 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  }}></div>
                  {index < 3 && <div style={styles.timelineLine}></div>}
                </div>
                <div className="timeline-content" style={styles.timelineContent}>
                  <div style={styles.timelineYear}>{item.year}</div>
                  <h3 style={styles.timelineTitle}>{item.title}</h3>
                  <h4 style={styles.timelineSubtitle}>{item.subtitle}</h4>
                  <p style={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.projectsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Featured Projects</h2>
          <div style={styles.projectsGrid}>
            {[
              {
                title: 'NxtTrendz E-Commerce',
                description: 'Amazon/Flipkart clone with multi-page React application featuring Login, Products, and Product Details pages.',
                tech: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'REST APIs', 'JWT'],
                features: [
                  'Secure JWT-based authentication',
                  'Search, filter, and sorting functionality',
                  'Optimized performance with debouncing',
                ],
                link: 'https://nxtdzz.ccbp.tech/',
              },
              {
                title: 'Wikipedia Search App',
                description: 'Responsive search interface with asynchronous API calls and dynamic result rendering.',
                tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST APIs'],
                features: [
                  'Asynchronous fetch API calls',
                  'Dynamic search results rendering',
                  'External navigation support',
                ],
                link: 'https://wikiiiiiwdwd.ccbp.tech',
              },
              {
                title: 'LinkedIn AutoPoster',
                description: 'AI agent for automating LinkedIn content posting workflows using Agentic AI principles.',
                tech: ['Agentic AI', 'AI Agents', 'Workflow Automation'],
                features: [
                  'Autonomous task planning',
                  'Automated content posting',
                  'AI-driven execution',
                ],
                link: null,
              },
            ].map((project, index) => (
              <div
                key={project.title}
                className="project-card fade-in-up"
                style={{
                  ...styles.projectCard,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div style={styles.projectHeader}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.projectLink}
                    >
                      View Live →
                    </a>
                  )}
                </div>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.projectTech}>
                  {project.tech.map((tech) => (
                    <span key={tech} style={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul style={styles.projectFeatures}>
                  {project.features.map((feature) => (
                    <li key={feature} style={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={{...styles.container,padding:'30px'}}>
          <h2 style={styles.sectionTitle} className="fade-in-up">Get In Touch</h2>
          <p style={styles.contactSubtitle} className="fade-in-up">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div style={styles.contactCard} className="fade-in-up">
            <div style={styles.contactInfo} className="slide-in-left">
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>📧</div>
                <div>
                  <div style={styles.contactLabel}>Email</div>
                  <a href="mailto:dikshitamogh941@gmail.com" style={styles.contactValue}>
                    dikshitamogh941@gmail.com
                  </a>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>📱</div>
                <div>
                  <div style={styles.contactLabel}>Phone</div>
                  <a href="tel:+919380654698" style={styles.contactValue}>
                    +91 9380654698
                  </a>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.contactIcon}>📍</div>
                <div>
                  <div style={styles.contactLabel}>Location</div>
                  <div style={styles.contactValue}>Bengaluru, Karnataka - 560111</div>
                </div>
              </div>
            </div>
            <div style={styles.socialLinks} className="slide-in-right">
              <h3 style={styles.socialTitle}>Connect With Me</h3>
              <div style={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/amogh-dikshit-394077270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={styles.socialIcon}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="url(#linkedin)" />
                    <path d="M14 16H18V26H14V16ZM16 14C14.895 14 14 13.105 14 12C14 10.895 14.895 10 16 10C17.105 10 18 10.895 18 12C18 13.105 17.105 14 16 14ZM27 26H23V21C23 19.5 22 19 21 19C20 19 19 19.5 19 21V26H15V16H19V17.5C19.5 16.5 21 15 23 15C25.5 15 27 16.5 27 19.5V26Z" fill="white" />
                    <defs>
                      <linearGradient id="linkedin" x1="0" y1="0" x2="40" y2="40">
                        <stop stopColor="#0077B5" />
                        <stop offset="1" stopColor="#00A0DC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://github.com/AmoghDikshit123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={styles.socialIcon}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="url(#github)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 10C14.477 10 10 14.477 10 20C10 24.418 12.865 28.166 16.839 29.489C17.339 29.579 17.521 29.272 17.521 29.007C17.521 28.771 17.512 28.098 17.508 27.217C14.726 27.821 14.139 25.928 14.139 25.928C13.685 24.774 13.029 24.469 13.029 24.469C12.121 23.848 13.098 23.861 13.098 23.861C14.101 23.931 14.629 24.888 14.629 24.888C15.521 26.403 16.97 25.961 17.539 25.706C17.631 25.061 17.889 24.619 18.175 24.371C15.955 24.119 13.62 23.258 13.62 19.514C13.62 18.425 14.01 17.535 14.649 16.838C14.546 16.587 14.203 15.575 14.747 14.212C14.747 14.212 15.586 13.942 17.497 15.256C18.294 15.037 19.149 14.927 20 14.923C20.85 14.927 21.706 15.037 22.504 15.256C24.413 13.942 25.251 14.212 25.251 14.212C25.796 15.575 25.453 16.587 25.351 16.838C25.991 17.535 26.378 18.425 26.378 19.514C26.378 23.267 24.039 24.116 21.811 24.361C22.168 24.669 22.491 25.276 22.491 26.204C22.491 27.533 22.479 28.605 22.479 28.007C22.479 28.274 22.659 28.583 23.167 29.488C27.138 28.163 30 24.417 30 20C30 14.477 25.523 10 20 10Z" fill="white" />
                    <defs>
                      <linearGradient id="github" x1="0" y1="0" x2="40" y2="40">
                        <stop stopColor="#24292e" />
                        <stop offset="1" stopColor="#40444b" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.footerText}>
            © 2026 Amogh Dikshit. Built with React.js
          </p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    background: '#0a0a1a',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '15px 0',
    transition: 'all 0.3s ease',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '5px 0',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
    padding: '100px 30px 50px',
    position: 'relative',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    flexWrap: 'wrap',
  },
  heroText: {
    flex: '1',
    minWidth: '300px',
    color: 'white',
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  gradient: {
    background: 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '20px',
    opacity: '0.9',
  },
  heroDescription: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '40px',
    opacity: '0.9',
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '15px 35px',
    fontSize: '16px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  },
  secondaryButton: {
    padding: '15px 35px',
    fontSize: '16px',
    fontWeight: '600',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  heroImage: {
    flex: '0 0 auto',
  },
  avatarCircle: {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2a2a5a 0%, #1e1e3f 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
    border: '3px solid rgba(102, 126, 234, 0.5)',
  },
  avatarText: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    padding: '100px 30px',
    background: '#0f0f23',
  },
  sectionTitle: {
    fontSize: '42px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '60px',
    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  aboutContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '60px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '40px',
    
    borderRadius: '20px',
    color: 'white',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
  },
  aboutText: {
    flex: '1',
    minWidth: '300px',
  },
  aboutSubtitle: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#e0e0e0',
  },
  aboutDescription: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#b0b0b0',
    marginBottom: '30px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
  },
  infoItem: {
    fontSize: '15px',
    color: '#b0b0b0',
    lineHeight: '1.6',
  },
  summaryBox: {
    flex: '1',
    minWidth: '300px',
    padding: '40px',
    background: 'linear-gradient(135deg, #1e1e3f 0%, #2a2a5a 100%)',
    borderRadius: '20px',
    color: 'white',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
  },
  summaryTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  summaryText: {
    fontSize: '15px',
    lineHeight: '1.8',
    opacity: '0.95',
  },
  skillsSection: {
    padding: '100px 30px',
    background: 'linear-gradient(180deg, #0a0a1a 0%, #0f0f23 100%)',
  },
  skillsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  skillCard: {
    padding: '30px',
    background: 'rgba(30, 30, 63, 0.6)',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(102, 126, 234, 0.2)',
  },
  skillCategory: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#e0e0e0',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  skillTag: {
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
  },
  timeline: {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
  },
  timelineItem: {
    display: 'flex',
    gap: '30px',
    marginBottom: '50px',
  },
  timelineMarker: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timelineDot: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  timelineLine: {
    width: '2px',
    flex: '1',
    background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
    marginTop: '10px',
  },
  timelineContent: {
    flex: '1',
    padding: '25px',
    background: 'rgba(30, 30, 63, 0.6)',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(102, 126, 234, 0.2)',
  },
  timelineYear: {
    display: 'inline-block',
    padding: '5px 15px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '15px',
  },
  timelineTitle: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#e0e0e0',
  },
  timelineSubtitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#667eea',
    marginBottom: '12px',
  },
  timelineDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#b0b0b0',
  },
  projectsSection: {
    padding: '100px 30px',
    background: '#0a0a1a',
  },
  projectsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
  },
  projectCard: {
    padding: '35px',
    background: 'linear-gradient(135deg, rgba(30, 30, 63, 0.8) 0%, rgba(26, 26, 58, 0.8) 100%)',
    borderRadius: '20px',
    boxShadow: '0 5px 25px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(102, 126, 234, 0.3)',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px',
    gap: '15px',
  },
  projectTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#e0e0e0',
  },
  projectLink: {
    fontSize: '14px',
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  projectDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#b0b0b0',
    marginBottom: '20px',
  },
  projectTech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
  },
  techBadge: {
    padding: '6px 12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '500',
  },
  projectFeatures: {
    listStyle: 'none',
    padding: '0',
  },
  featureItem: {
    fontSize: '14px',
    color: '#b0b0b0',
    marginBottom: '8px',
    paddingLeft: '20px',
    position: 'relative',
    lineHeight: '1.5',
    '::before': {
      content: '"✓"',
      position: 'absolute',
      left: 0,
      color: '#667eea',
      fontWeight: 'bold',
    },
  },
  contactContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    gap: '60px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  
  contactSection: {
  padding: '100px 30px',
  background: 'linear-gradient(135deg, #1a1a3e 0%, #0f0f23 100%)',
  color: 'white',
},

contactSubtitle: {
  fontSize: '18px',
  textAlign: 'center',
  opacity: '0.9',
  maxWidth: '600px',
  margin: '0 auto 60px',
},

/* Main glass card */
contactCard: {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '50px',
  display: 'flex',
  gap: '60px',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  background: 'rgba(30, 30, 63, 0.6)',
  borderRadius: '24px',
  border: '1px solid rgba(102, 126, 234, 0.25)',
  boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(8px)',
},

/* Left side info */
contactInfo: {
  flex: '1',
  minWidth: '260px',
},

contactItem: {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  marginBottom: '30px',
  transition: 'transform 0.3s ease',
},

contactIcon: {
  fontSize: '32px',
  lineHeight: '1',
},

contactLabel: {
  fontSize: '14px',
  opacity: '0.8',
  marginBottom: '6px',
},

contactValue: {
  fontSize: '18px',
  fontWeight: '500',
  color: 'white',
  textDecoration: 'none',
},

/* Right side social */
socialLinks: {
  flex: '1',
  minWidth: '260px',
  marginTop: '10px',
},

socialTitle: {
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '30px',
},

socialIcons: {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
},

socialIcon: {
  display: 'inline-block',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
},
  footer: {
    padding: '30px',
    background: '#1a1a2e',
    color: 'white',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '14px',
    opacity: '0.8',
  },
};

export default Portfolio;