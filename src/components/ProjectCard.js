function ProjectCard({ project, onProjectClick }) {
  return (
    <div
      className="card cursor-pointer group overflow-hidden"
      onClick={() => onProjectClick(project.id)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-primary font-medium text-sm">{project.category}</p>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-600 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
