function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <h1>À propos de John DOE</h1>
        <p>UX/UI Designer avec 3 ans d'expérience</p>
      </div>

      <div className="about-content">
        <div className="bio">
          <h2>Mon parcours</h2>
          <p>
            Passionné par le design centré utilisateur, je crée des interfaces
            intuitives et élégantes.
          </p>
          <p>Formation en design graphique, spécialisé en UX/UI depuis 2021.</p>
        </div>

        <div className="skills">
          <h2>Compétences</h2>
          <ul>
            <li>Figma, Adobe XD</li>
            <li>Recherche utilisateur</li>
            <li>Prototypage</li>
            <li>Design System</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
