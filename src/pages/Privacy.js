function Privacy({ setCurrentPage }) {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors font-medium mb-8"
          >
            <span>←</span>
            <span>Retour à l&apos;accueil</span>
          </button>

          <h1 className="">Politique de confidentialité</h1>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Collecte des données
              </h2>
              <p className="leading-relaxed">
                Lorsque vous utilisez le formulaire de contact, nous collectons
                uniquement les informations suivantes :<br />
                - Votre nom
                <br />
                - Votre adresse email
                <br />- Le contenu de votre message
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Utilisation des données
              </h2>
              <p className="leading-relaxed">
                Ces données sont utilisées uniquement pour :<br />
                - Répondre à vos demandes de contact
                <br />
                - Vous fournir des informations sur mes services
                <br />- Améliorer la qualité de mon service
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Conservation des données
              </h2>
              <p className="leading-relaxed">
                Vos données personnelles sont conservées pendant une durée
                maximale de 3 ans à compter de notre dernier contact, sauf
                obligation légale contraire.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Vos droits
              </h2>
              <p className="leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants :<br />
                - Droit d&apos;accès à vos données
                <br />
                - Droit de rectification
                <br />
                - Droit à l&apos;effacement
                <br />
                - Droit à la limitation du traitement
                <br />
                - Droit à la portabilité
                <br />- Droit d&apos;opposition
              </p>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:john.doe@email.com"
                  className="text-primary hover:underline"
                >
                  john.doe@email.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Sécurité
              </h2>
              <p className="leading-relaxed">
                Nous mettons en œuvre toutes les mesures techniques et
                organisationnelles appropriées afin de garantir un niveau de
                sécurité adapté au risque.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Contact
              </h2>
              <p className="leading-relaxed">
                Pour toute question concernant cette politique de
                confidentialité, vous pouvez nous contacter à :{" "}
                <a
                  href="mailto:john.doe@email.com"
                  className="text-primary hover:underline"
                >
                  john.doe@email.com
                </a>
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

export default Privacy;
