import { Link, useLocation } from "react-router-dom";
import React from "react";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageLabel = (path) => {
    const labels = {
      "/": "Accueil",
      "/projects": "Projets",
      "/about": "À propos",
      "/contact": "Contact",
    };
    return labels[path];
  };

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/projects", label: "Projets" },
    { path: "/about", label: "À propos" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors"
          >
            John DOE
          </Link>
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
