import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com/in/john-doe" },
    { name: "Behance", icon: "🎨", url: "https://behance.net/johndoe" },
    { name: "Dribbble", icon: "🏀", url: "https://dribbble.com/johndoe" },
    { name: "Instagram", icon: "📸", url: "https://instagram.com/johndoe" },
  ];

  const quickLinks = [
    { name: "Accueil", path: "/" },
    { name: "Projets", path: "/projects" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* À propos */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">John DOE</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
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
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400">
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
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} John DOE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/legal"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                to="/privacy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
