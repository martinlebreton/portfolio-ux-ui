function AvatarCard({ emoji = "👨‍💻", bgClass = "from-primary to-blue-600" }) {
  return (
    <div
      className={`w-64 h-64 bg-gradient-to-br ${bgClass} rounded-2xl mx-auto flex items-center justify-center`}
    >
      <div className="text-6xl text-white">{emoji}</div>
    </div>
  );
}

export default AvatarCard;
