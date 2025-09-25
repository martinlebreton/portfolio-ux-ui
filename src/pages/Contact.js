import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message envoyé ! (simulation)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact">
      <div className="contact-hero">
        <h1>Contactez-moi</h1>
        <p>Parlons de votre projet !</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Informations</h2>
          <p>📧 john.doe@email.com</p>
          <p>📱 +33 6 12 34 56 78</p>
          <p>📍 Paris, France</p>
        </div>

        <div className="contact-form">
          <h2>Envoyez-moi un message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
