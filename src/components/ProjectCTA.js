function ProjectCTA({ onProjectsClick, onContactClick }) {
  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Vous aimez ce projet ?
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          Découvrez mes autres réalisations ou contactez-moi pour en discuter
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={onProjectsClick} className="btn-primary">
            Voir tous les projets
          </button>
          <button onClick={onContactClick} className="btn-outline">
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCTA;
