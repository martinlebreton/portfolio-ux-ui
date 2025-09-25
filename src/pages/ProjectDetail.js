import { projects } from "../data/projects";

function ProjectDetail({ projectId, setCurrentPage }) {
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) return <div>Projet non trouvé</div>;

  return (
    <section className="project-detail">
      <button onClick={() => setCurrentPage("projects")}>
        ← Retour aux projets
      </button>

      <div className="project-hero">
        <h1>{project.title}</h1>
        <p className="category">{project.category}</p>
      </div>

      <div className="project-content">
        <img src={project.image} alt={project.title} />
        <h2>Description</h2>
        <p>{project.description}</p>

        <h2>Technologies utilisées</h2>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h2>Processus de design</h2>
        <p>
          Recherche utilisateur → Wireframes → Prototypage → Tests → Livraison
        </p>
      </div>
    </section>
  );
}

export default ProjectDetail;
