import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation envoi (2 secondes)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message après 3 secondes
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "john.doe@email.com",
      action: "mailto:john.doe@email.com",
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "+33 6 12 34 56 78",
      action: "tel:+33612345678",
    },
    {
      icon: "📍",
      title: "Localisation",
      value: "Paris, France",
      action: "https://maps.google.com",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "john-doe-designer",
      action: "https://linkedin.com/in/john-doe",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 ">
      <div className="bg-white pt-32 pb-20">
        <div className="container text-center">
          <h1 className="">Contactez-moi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un projet en tête ? Une question ? N&apos;hésitez pas à me
            contacter. Je vous réponds généralement sous 24h.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Restons en contact
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="card group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Disponibilité</h3>
                <p className="mb-6">
                  Je suis actuellement disponible pour de nouveaux projets. Mon
                  planning se remplit rapidement, contactez-moi dès maintenant !
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Disponible immédiatement</span>
                </div>
              </div>
            </div>

            <div>
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Envoyez-moi un message
                </h2>

                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                    ✅ Message envoyé avec succès ! Je vous recontacte
                    rapidement.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Projet de refonte UX/UI"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre projet, vos besoins, votre timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary py-4 px-6 rounded-lg transition-all ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "btn-primary hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
