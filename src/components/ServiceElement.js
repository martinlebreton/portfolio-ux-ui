function ServiceElement({ service, setCurrentPage }) {
  return (
    <div className="  hover:bg-gray-50 transition-colors">
      <p className="text-6xl text-primary">{service.icon}</p>
      <p className="text-2xl font-semibold text-slate-600 mt-4">
        {service.title}
      </p>
      <h3 className="text-lg font-medium text-slate-800 mt-2">
        {service.intro}
      </h3>
      <p className="text-gray-600 my-4">{service.description}</p>
      <button className="btn-primary" onClick={() => setCurrentPage("contact")}>
        {service.cta}
      </button>
    </div>
  );
}

export default ServiceElement;
