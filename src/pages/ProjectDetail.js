import { projects } from "../data/projects";
import ProjectInfoCard from "../components/ProjectInfoCard";
import ProjectCTA from "../components/ProjectCTA";

import { useEffect } from "react";

function ProjectDetail({ projectId, setCurrentPage }) {
  const project = projects.find((p) => p.id === parseInt(projectId));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (!project) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl mb-4">Projet non trouvé</h1>
          <button
            onClick={() => setCurrentPage("projects")}
            className="btn-primary"
          >
            Retour aux projets
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white  sticky mt-16 z-40">
        <div className="container py-4">
          <button
            onClick={() => setCurrentPage("projects")}
            className="flex items-center space-x-2 text-slate-500 hover:text-primary transition-colors font-medium"
          >
            <span>←</span>
            <span>Retour aux projets</span>
          </button>
        </div>
      </div>

      {/* Hero Project */}
      <div className="bg-white py-20">
        <div className="container">
          <div
            className="max-w-4xl mx-auto text-center animate-fade-in"
            style={{ animationDelay: ` 0.1s` }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-6">
              {project.category}
            </div>
            <h1 className="">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image principale */}
      <div className="py-12 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sections du projet */}
      <div className="py-20 bg-white">
        <div className="container ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              L'histoire du projet {project.title}
            </h2>
            <p className="text-xl text-slate-600">Un aperçu de la démarche</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <ProjectInfoCard title="Contexte" icon="🎯">
                {project.contexte}
              </ProjectInfoCard>
              <ProjectInfoCard title="Défi" icon="⚡">
                {project.defi}
              </ProjectInfoCard>
              <ProjectInfoCard title="Solution" icon="✨">
                {project.solution}
              </ProjectInfoCard>
              <ProjectInfoCard title="Résultat" icon="📈">
                {project.resultat}
              </ProjectInfoCard>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Navigation */}
      <ProjectCTA
        onProjectsClick={() => setCurrentPage("projects")}
        onContactClick={() => setCurrentPage("contact")}
      />
    </section>
  );
}

export default ProjectDetail;
