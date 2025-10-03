function ProjectInfoCard({ title, children, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start">
      <div className="flex items-center mb-4">
        {icon && <span className="text-3xl mr-3">{icon}</span>}
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>
      <div className="text-slate-700 text-lg">{children}</div>
    </div>
  );
}

export default ProjectInfoCard;
