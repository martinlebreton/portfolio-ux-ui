function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/john-doe" },
    { name: "Instagram", icon: "📸", url: "https://instagram.com/johndoe" },
  ];

  const quickLinks = [
    { name: "Accueil", page: "home" },
    { name: "Projets", page: "projects" },
    { name: "À propos", page: "about" },
    { name: "Contact", page: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* À propos */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">John DOE</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              UX/UI Designer passionné par la création d&apos;expériences
              digitales exceptionnelles. Basé à Paris, disponible pour des
              projets freelance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-2xl"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setCurrentPage(link.page);
                      window.scrollTo(0, 0);
                    }}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:john.doe@email.com"
                  className="hover:text-primary transition-colors"
                >
                  john.doe@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33612345678"
                  className="hover:text-primary transition-colors"
                >
                  +33 6 12 34 56 78
                </a>
              </li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} John DOE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => {
                  setCurrentPage("legal");
                  window.scrollTo(0, 0);
                }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Mentions légales
              </button>
              <button
                onClick={() => {
                  setCurrentPage("privacy");
                  window.scrollTo(0, 0);
                }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
