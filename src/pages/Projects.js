import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects({ onProjectClick }) {
  return (
    <section className="projects-page">
      <div className="projects-hero">
        <h1>Mes Projets</h1>
        <p>Découvrez mes réalisations en UX/UI Design</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onProjectClick={onProjectClick}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
