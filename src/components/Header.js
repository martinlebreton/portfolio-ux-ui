function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const getPageLabel = (page) => {
    const labels = {
      home: "Accueil",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
    };
    return labels[page];
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <span
            className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors"
            onClick={() => handleNavClick("home")}
          >
            John DOE
          </span>
          <nav className="flex space-x-8">
            {["home", "projects", "about", "contact"].map((page) => (
              <button
                key={page}
                className={`font-medium transition-colors ${
                  currentPage === page
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => handleNavClick(page)}
              >
                {getPageLabel(page)}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
