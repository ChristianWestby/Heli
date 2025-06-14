import { useState } from "react";

export default function LandingGearControl() {
  const [gearDown, setGearDown] = useState(true);

  const toggleGear = () => {
    const newState = !gearDown;
    setGearDown(newState);
    sendCommand("landingGear", newState ? "down" : "up");
  };

  const sendCommand = async (command, value) => {
    try {
      await fetch("http://raspberrypi.local:5000/api/command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command, value }),
      });
    } catch (err) {
      console.error("Feil ved sendCommand:", err);
    }
  };

  return (
    <div className="bg-gray-900 border border-green-500 p-4 rounded shadow">
      <h2 className="text-xl mb-3">Landing Gear</h2>
      <button
        onClick={toggleGear}
        className={`px-4 py-2 rounded font-bold ${
          gearDown
            ? "bg-green-700 text-black"
            : "bg-gray-700 text-green-300 hover:bg-green-600"
        }`}
      >
        {gearDown ? "Gear DOWN (🔽)" : "Gear UP (🔼)"}
      </button>
    </div>
  );
}