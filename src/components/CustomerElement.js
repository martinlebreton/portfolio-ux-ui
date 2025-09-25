function CustomerElement({ customer }) {
  return (
    <li className="customer-item">
      <a href={customer.link}>{customer.title}</a>
    </li>
  );
}

export default CustomerElement;
