"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CodeSync",
    description: "Real-time collaborative code editor: Create Rooms, share RoomIDs, and pair program with friends or colleagues for remote interviews or troubleshooting.",
    image: "codesync.png",
    techStack: "Reactjs, Nodejs, Socket.io, UUID, Codemon",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/ieshaaa/realtime_code_editor",
    previewUrl: "https://realtime-code-editorr.onrender.com/",
  },
  {
    id: 2,
    title: "EaseMySearch",
    description: "Admin-centric flight enquiry system. Empowers with secure MySQL database management, server-side validation for data integrity. Use maiID: admin@gmail.com and Password: 12345 for login.",
    image: "easemysearch.png",
    techStack: "Nodejs, Expressjs, MySQL, Cloudinary, CleverDB ",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/ieshaaa/EaseMySear",
    previewUrl: "https://easemysearch-flight-g1ax.onrender.com",
  },
  {
    id: 3,
    title: "MovieX",
    description: "Ultimate Movie Website featuring a responsive dark theme, API data fetching, animated banners, filters, and a scroll-effect header.",
    image: "moviex.png",
    techStack: "HTML5, VanillaCSS, JavaScript, Reactjs ",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/ieshaaa/Stream-Movie-Website",
    previewUrl: "https://stream-movie-website-fd1d.vercel.app/",
  },
  {
    id: 4,
    title: "BlooGy",
    description: "A blog website, facilitating post create, update, and delete posts. Designed and implemented a secure user authentication and authorization system.",
    image: "bloogy.png",
    techStack: "CSS3, JS, Reactjs, Nodejs, Expressjs, MongoDB ",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/ieshaaa/Blog_Application",
    previewUrl: "https://github.com/ieshaaa/Blog_Application",
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "My portfolio website designed and developed by me, keeping in mind swift User experience and detailed user interface.",
    image: "myportfolio.png",
    techStack: "HTML5, Reactjs, Nextjs ",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Kanban Board",
    description: "An agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency.",
    image: "kanban.png",
    techStack: "Reactjs, Redux, Nextjs, TailwindCSS ",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/ieshaaa/Kanban-Board",
    previewUrl: "https://github.com/ieshaaa/Kanban-Board",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

  return (
    <div id="projects" className="project-container">
      <div className='skill-heading-container'>
          <div className="section-1">
          <div className="icon">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  style={{
            width: "35px", height: "auto",
             fill: "#ffffff",
            }}><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" style={{
            width: "35px", height: "auto",
             fill: "#ffffff",
            }} viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>
          <span className='icon1-gradient' style={{backgroundColor: "#fc5c65"}}></span>
          </div>

            <div className="git-line" style={{background: 'linear-gradient(to bottom, #fc5c65, #161515)'}}></div>
            </div>
            <div className="section-2">
          <div className='h'>PROJECTS</div>
          <div style={{margin:"15px 0 40px 0"}}>
        <h5 className="my-heading">
          <span className="color-head" style={{color: "#fc5c65"}}>Making use of the above technologies and tools <development></development></span>
           below are the projects I’ve worked on to provide unique and flabagasting interfaces to users.
        </h5>
      </div>

            </div>
          </div>
          <div className="projecttss">
      {/* <h2>My Projects</h2> */}
      <div className="Gradient-proj-1"></div>
      <div className="Gradient-proj-2"></div>
      <div className="Gradient-proj-3"></div>

      <div className="tag-container">
        <div>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        </div>
        <div>
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full-Stack"
          isSelected={tag === "Full-Stack"}
        />
        </div>
      </div>
      <ul ref={ref} className="grid-container">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              techStack= {project.techStack}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default ProjectsSection;