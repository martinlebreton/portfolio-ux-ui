function StatsCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default StatsCard;
