function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo" onClick={() => handleNavClick("home")}>
          John DOE
        </h1>
        <nav>
          <button
            className={currentPage === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            Accueil
          </button>
          <button
            className={currentPage === "projects" ? "active" : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projets
          </button>
          <button
            className={currentPage === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            À propos
          </button>
          <button
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
