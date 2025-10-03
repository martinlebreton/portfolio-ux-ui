import { projects } from "../data/projects";
import ProjectInfoCard from "../components/ProjectInfoCard";
import ProjectCTA from "../components/ProjectCTA";

function ProjectDetail({ projectId, setCurrentPage }) {
  const project = projects.find((p) => p.id === parseInt(projectId));

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

  const processSteps = [
    {
      step: "01",
      title: "Recherche",
      description: "Analyse des besoins et étude des utilisateurs",
    },
    {
      step: "02",
      title: "Idéation",
      description: "Brainstorming et premières esquisses",
    },
    {
      step: "03",
      title: "Wireframes",
      description: "Architecture de l'information et wireframes",
    },
    {
      step: "04",
      title: "Design",
      description: "Conception visuelle et design system",
    },
    {
      step: "05",
      title: "Prototype",
      description: "Prototypage interactif haute-fidélité",
    },
    {
      step: "06",
      title: "Tests",
      description: "Tests utilisateurs et itérations",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b sticky z-40">
        <div className="container py-4">
          <button
            onClick={() => setCurrentPage("projects")}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors font-medium"
          >
            <span>←</span>
            <span>Retour aux projets</span>
          </button>
        </div>
      </div>

      {/* Hero Project */}
      <div className="bg-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-6">
              {project.category}
            </div>
            <h1 className="">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium"
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
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
      <div className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
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

      {/* Processus de design */}
      <div className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Processus de Design
              </h2>
              <p className="text-xl text-gray-600">
                Les étapes clés de la conception
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 rounded-2xl hover:shadow-xl transition-shadow">
                    <div className="text-5xl font-bold opacity-20 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200"></div>
                  )}
                </div>
              ))}
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
