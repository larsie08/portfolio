import React from "react";
import Link from "next/link";

import ProjectCard from "./components/ProjectCard";
import DarkMode from "./components/DarkMode";
import { projects, miniProjects } from "./assets/data/projects";

function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <Link className="header__link" href="/profile">
          Profile
        </Link>

        <DarkMode />
      </header>
      <main>
        <div className="container">
          <h1 className="title" data-aos="fade-left">
            Portfolio
          </h1>
          <h2 className="subtitle" data-aos="fade-right">
            Projects
          </h2>

          <div className="projects">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>

          <h2 className="subtitle">Mini Projects</h2>

          <div className="mini-projects">
            {miniProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
