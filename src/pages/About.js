import AvatarCard from "../components/AvatarCard";
import StatsCard from "../components/StatsCard";
import SkillBar from "../components/SkillBar";
import ExperienceItem from "../components/ExperienceItem";

function About() {
  const skills = [
    { name: "Figma", level: 95 },
    { name: "WordPress", level: 85 },
    { name: "Illustrator", level: 85 },
    { name: "Prototypage", level: 90 },
    { name: "Recherche UX", level: 75 },
    { name: "Design System", level: 60 },
    { name: "React", level: 20 },
    { name: "SEO", level: 70 },
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
      <div className="bg-white pt-32 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="">À propos de John DOE</h1>
              <p className="text-xl text-gray-600 mb-8">
                UX/UI Designer passionné avec 3+ années d'expérience dans la
                création d'expériences digitales exceptionnelles.
              </p>
              <div className="flex space-x-6">
                <StatsCard value="50+" label="Projets réalisés" />
                <StatsCard value="25+" label="Clients satisfaits" />
                <StatsCard value="3+" label="Années d'expérience" />
              </div>
            </div>
            <div className="relative">
              <AvatarCard emoji="👨‍💻" />
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
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
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
              <ExperienceItem
                key={index}
                year={exp.year}
                role={exp.role}
                company={exp.company}
                description={exp.description}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
