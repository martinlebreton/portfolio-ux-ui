import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import CustomerElement from "../components/CustomerElement";
import { customers } from "../data/customers";

function Home({ onProjectClick, setCurrentPage }) {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br animated-background from-indigo-100 to-indigo-200 pt-40 pb-32">
        <div className="container text-center">
          <h1 className="">John DOE</h1>
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
          <button className="btn-white text-lg ml-4">Me contacter</button>
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
              onClick={() => setCurrentPage("projects")}
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
