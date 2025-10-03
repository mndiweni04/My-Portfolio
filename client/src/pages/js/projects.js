import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import '../styling/projects.css';

import employeeManagementImage from '../images/emp-app.jpg'; 
import portfolioImage from '../images/portfolio.jpeg'; 
import calendarImage from '../images/calendar.jpg'; 
import calcImage from '../images/calc.jpg'; 

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      image: employeeManagementImage, 
      description: "A desktop application with CRUD functionality built to manage employee data, applying OOP principles and integrated with PostgreSQL for database operations.",
      techStack: ["Java", "Java Swing", "PostgreSQL", "OOP", "CRUD"],
      demoLink: "#", 
      githubLink: "https://github.com/mndiweni04/PRG361-EmployeeApp" 
    },
    {
      title: "Portfolio Website",
      image: portfolioImage, 
      description: "A responsive personal portfolio designed and developed to showcase academic projects and technical skills to potential employers.",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Netlify"],
      demoLink: "https://mandla-ndiweni-portfolio.netlify.app/", 
      githubLink: "https://github.com/mndiweni04/My-Portfolio" 
    },
    {
      title: "Calendar & Timetable App",
      image: calendarImage, 
      description: "A scheduling app focusing on user-friendly UI and responsive design, featuring a built-in timetable and full event creation/management functionality.",
      techStack: ["C#", "Responsive Design", "Time Management"],
      demoLink: "#", 
      githubLink: "https://github.com/mndiweni04/Array-Manipulation" 
    },
    {
      title: "My-Calculator",
      image: calcImage, 
      description: "A functional calculator supporting basic arithmetic operations with an intuitive user interface.",
      techStack: ["Java", "Intuitive UI"],
      demoLink: "#", 
      githubLink: "https://github.com/mndiweni04/My-Calculator" 
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} 
        navigation={true} 
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
            768: {
                slidesPerView: 1,
                centeredSlides: true,
            },
        }}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                      GitHub
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;