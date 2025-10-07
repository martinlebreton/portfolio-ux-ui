import { useEffect, useState } from "react";
import CustomerElement from "./CustomerElement";

function NetlifyCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.netlify/functions/customers")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur fetch customers:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement des clients...</div>;

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Ils m'ont fait confiance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {customers.map((customer) => (
            <CustomerElement key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NetlifyCustomers;
