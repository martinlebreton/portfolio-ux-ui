function About() {
  const skills = [
    { name: "Figma", level: 95 },
    { name: "Adobe XD", level: 85 },
    { name: "Sketch", level: 80 },
    { name: "Prototypage", level: 90 },
    { name: "Recherche UX", level: 85 },
    { name: "Design System", level: 80 },
  ];

  const experience = [
    {
      year: "2021 - Présent",
      role: "UX/UI Designer Freelance",
      company: "Indépendant",
      description:
        "Conception d'interfaces et expériences utilisateur pour diverses entreprises",
    },
    {
      year: "2019 - 2021",
      role: "Designer Graphique",
      company: "Studio Créatif",
      description: "Design d'identités visuelles et supports de communication",
    },
    ,
    {
      year: "2014 - 2018",
      role: "Chargé de communication digitale",
      company: "Rautureau Appleshoes",
      description: "Design d'identités visuelles et supports de communication",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero About */}
      <div className="bg-white py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                À propos de John DOE
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                UX/UI Designer passionné avec 3+ années d'expérience dans la
                création d'expériences digitales exceptionnelles.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-gray-600">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                <div className="text-6xl text-white">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mes Compétences
            </h2>
            <p className="text-xl text-gray-600">
              Outils et expertises que je maîtrise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-primary font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mon Parcours
            </h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de mon évolution professionnelle
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                {index !== experience.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200 -translate-x-0.5"></div>
                )}
                <div className="bg-gray-50 p-6 rounded-xl ml-4">
                  <div className="text-primary font-semibold mb-1">
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-gray-600 font-medium mb-3">
                    {exp.company}
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
