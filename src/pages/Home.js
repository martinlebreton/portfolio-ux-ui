import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import CustomerElement from "../components/CustomerElement";
import { customers } from "../data/customers";

function Home({ onProjectClick }) {
  return (
    <section className="home">
      <div className="hero">
        <h1>John DOE</h1>
        <p>UX/UI Designer passionné par les expériences utilisateur</p>
        <button onClick={() => window.scrollTo(0, 400)}>
          Voir mes projets
        </button>
      </div>

      <div className="projects-section">
        <h2>Mes derniers projets</h2>
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
