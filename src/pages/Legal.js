function Legal({ setCurrentPage }) {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          {/* Bouton retour */}
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors font-medium mb-8"
          >
            <span>←</span>
            <span>Retour à l&apos;accueil</span>
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Mentions légales
          </h1>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Éditeur du site
              </h2>
              <p className="leading-relaxed">
                <strong>Nom :</strong> John DOE
                <br />
                <strong>Statut :</strong> Designer Freelance
                <br />
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:john.doe@email.com"
                  className="text-primary hover:underline"
                >
                  john.doe@email.com
                </a>
                <br />
                <strong>Téléphone :</strong> +33 6 12 34 56 78
                <br />
                <strong>Adresse :</strong> Paris, France
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Hébergement
              </h2>
              <p className="leading-relaxed">
                Ce site est hébergé par :<br />
                <strong>Nom de l&apos;hébergeur :</strong> [À compléter]
                <br />
                <strong>Adresse :</strong> [À compléter]
                <br />
                <strong>Site web :</strong> [À compléter]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="leading-relaxed">
                L&apos;ensemble de ce site relève de la législation française et
                internationale sur le droit d&apos;auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Protection des données personnelles
              </h2>
              <p className="leading-relaxed">
                Conformément à la loi « Informatique et Libertés » du 6 janvier
                1978 modifiée et au RGPD, vous disposez d&apos;un droit
                d&apos;accès, de rectification et de suppression des données
                vous concernant. Pour exercer ce droit, contactez-nous par email
                à{" "}
                <a
                  href="mailto:john.doe@email.com"
                  className="text-primary hover:underline"
                >
                  john.doe@email.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Cookies
              </h2>
              <p className="leading-relaxed">
                Ce site n&apos;utilise actuellement aucun cookie de tracking ou
                de marketing. Seuls des cookies techniques nécessaires au bon
                fonctionnement du site peuvent être utilisés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Crédits
              </h2>
              <p className="leading-relaxed">
                <strong>Design et développement :</strong> John DOE
                <br />
                <strong>Technologies utilisées :</strong> React, Tailwind CSS
                <br />
                <strong>Images :</strong> [Préciser les sources]
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Legal;
