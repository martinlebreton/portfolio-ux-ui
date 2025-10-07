import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

import { useEffect } from "react";

function Projects({ onProjectClick }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tous les projets" },
    ...Array.from(new Set(projects.map((p) => p.category))).map((cat) => ({
      id: cat,
      name: cat,
    })),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Projects */}
      <div className="bg-white pt-32 pb-20">
        <div className="container text-center">
          <h1 className="">Mes projets</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez mes réalisations en UX/UI Design. Chaque projet raconte
            une histoire unique de résolution de problèmes utilisateurs.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="pb-20 pt-10">
        <div className="container">
          {/* Results Counter 
          <div className="mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-primary">
                {filteredProjects.length}
              </span>
              {filteredProjects.length > 1
                ? " projets trouvés"
                : " projet trouvé"}
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  dans la catégorie <strong>{selectedCategory}</strong>
                </span>
              )}
            </p>
          </div>*/}

          {/* Projects Grid with Animation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard
                  project={project}
                  onProjectClick={onProjectClick}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-600 mb-8">
                Essayez de changer de catégorie pour voir plus de projets
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="btn-primary"
              >
                Voir tous les projets
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
