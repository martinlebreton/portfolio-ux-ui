function CustomerElement({ customer }) {
  return (
    <div className="card group hover:bg-gray-50 transition-colors">
      <a
        href={customer.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center space-y-4"
      >
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
          <span className="text-2xl font-bold">{customer.title.charAt(0)}</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors text-center">
          {customer.title}
        </h3>
      </a>
    </div>
  );
}

export default CustomerElement;
