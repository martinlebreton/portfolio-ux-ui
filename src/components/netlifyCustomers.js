import { useEffect, useState } from "react";

function NetlifyCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.netlify/functions/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement des clients...</div>;

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Ils m'ont fait confiance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="card p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <a
                href={customer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-primary hover:underline text-center"
              >
                {customer.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NetlifyCustomers;
