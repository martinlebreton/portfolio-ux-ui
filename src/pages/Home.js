import ProjectCard from "../components/ProjectCard";
import ServiceElement from "../components/ServiceElement";

import { projects } from "../data/projects";
import { services } from "../data/services";

function Home({ onProjectClick, setCurrentPage }) {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br animated-background from-indigo-100 via-slate-100 to-indigo-200 pt-64 pb-32">
        <div
          className="container text-center animate-fade-in"
          style={{ animationDelay: `0.1s` }}
        >
          <h1 className="">John DOE</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Test UX/UI Designer passionné par les expériences utilisateur
            exceptionnelles
          </p>
          <button
            className="btn-primary text-lg"
            onClick={() => {
              document
                .getElementById("projets")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Découvrir mes projets
          </button>
          <button
            className="btn-white text-lg ml-4"
            onClick={() => {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Mes services
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">
              Mes derniers projets
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques-uns de mes projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onProjectClick={onProjectClick}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="btn-primary"
              onClick={() => setCurrentPage("projects")}
            >
              Voir tous les projets
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">
              Mes services
            </h2>
            <p className="text-xl text-gray-600">
              Design web, performance SEO et identité visuelle : trois leviers
              pour un site utile, visible et cohérent. Découvrez comment je mets
              mes compétences spécifiques au service de votre projet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceElement key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
