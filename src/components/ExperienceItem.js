function ExperienceItem({ year, role, company, description, isLast }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
      {!isLast && (
        <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200 -translate-x-0.5"></div>
      )}
      <div className="bg-gray-50 p-6 rounded-xl ml-4">
        <div className="text-primary font-semibold mb-1">{year}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{role}</h3>
        <div className="text-gray-600 font-medium mb-3">{company}</div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
