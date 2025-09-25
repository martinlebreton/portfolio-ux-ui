import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>John DOE</h1>
        <p>UX/UI Designer passionné par les expériences utilisateur</p>
        <button>Voir mes projets</button>
      </div>

      <div className="projects-section">
        <h2>Mes derniers projets</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
