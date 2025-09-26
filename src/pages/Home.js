import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { customers } from "../data/customers";
import CustomerElement from "../components/CustomerElement";

function Home({ onProjectClick }) {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            John DOE
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            UX/UI Designer passionné par les expériences utilisateur
            exceptionnelles
          </p>
          <button
            className="btn-primary text-lg"
            onClick={() => window.scrollTo(0, 500)}
          >
            Découvrir mes projets
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mes derniers projets
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez quelques-unes de mes réalisations récentes
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
              onClick={() =>
                onProjectClick ? {} : (window.location.hash = "projects")
              }
            >
              Voir tous les projets
            </button>
          </div>
        </div>
      </div>
      {/* Clients Section */}
      <div className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ils m'ont fait confiance
            </h2>
            <p className="text-xl text-gray-600">
              Quelques clients pour qui j'ai eu le plaisir de travailler
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customers.map((customer) => (
              <CustomerElement key={customer.id} customer={customer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
