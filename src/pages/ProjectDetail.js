import { projects } from "../data/projects";

function ProjectDetail({ projectId, setCurrentPage }) {
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Projet non trouvé
          </h1>
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

  const sections = [
    {
      title: "Le Contexte",
      icon: "🎯",
      content:
        "Ce projet est né d'un besoin d'améliorer l'expérience utilisateur et de moderniser l'interface existante. L'objectif était de créer une solution intuitive et engageante.",
    },
    {
      title: "Le Défi",
      icon: "⚡",
      content:
        "Repenser entièrement l'architecture de l'information tout en conservant les fonctionnalités existantes. Créer une interface moderne qui réponde aux attentes des utilisateurs actuels.",
    },
    {
      title: "La Solution",
      icon: "✨",
      content:
        "Mise en place d'un design system cohérent, refonte de l'arborescence, prototypage et tests utilisateurs itératifs jusqu'à validation du concept final.",
    },
    {
      title: "Les Résultats",
      icon: "📈",
      content:
        "Augmentation de 40% de l'engagement utilisateur, réduction de 60% du taux de rebond, et satisfaction client mesurée à 4.8/5.",
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
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
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
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
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous aimez ce projet ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez mes autres réalisations ou contactez-moi pour en discuter
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setCurrentPage("projects")}
              className="btn-primary"
            >
              Voir tous les projets
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-white text-primary hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
