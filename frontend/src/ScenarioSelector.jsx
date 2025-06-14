import { useState } from "react";

export default function ScenarioSelector({ onSelect }) {
  const [selected, setSelected] = useState("mountain");

  const scenarios = {
    mountain: "Fjell",
    ocean: "Sjø",
    night: "Natt",
    rescue: "Redning",
  };

  const handleChange = (key) => {
    setSelected(key);
    onSelect(key); // Forteller VideoBackground å bytte video
  };

  return (
    <div className="bg-gray-900 border border-green-500 p-4 rounded shadow mt-6">
      <h2 className="text-xl mb-3">Flight Scenario</h2>
      <div className="flex flex-wrap gap-3">
        {Object.entries(scenarios).map(([key, label]) => (
          <button
            key={key}
            onClick={() => handleChange(key)}
            className={`px-4 py-2 rounded font-bold ${
              selected === key
                ? "bg-green-700 text-black"
                : "bg-gray-700 text-green-300 hover:bg-green-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}