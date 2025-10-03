function SkillBar({ name, level }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-900">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;
