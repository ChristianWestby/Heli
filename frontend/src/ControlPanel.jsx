import { useState } from "react";

export default function ControlPanel({
  lightOn,
  setLightOn,
  rotorOn,
  setRotorOn,
  rotorSpeed,
  setRotorSpeed,
}) {
  const sendCommand = async (command, value) => {
    try {
      await fetch("http://raspberrypi.local:5000/api/command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command, value }),
      });
    } catch (error) {
      console.error("Feil ved sending:", error);
    }
  };

  const toggleLight = () => {
    const newState = !lightOn;
    setLightOn(newState);
    sendCommand("light", newState);
  };

  const toggleRotor = () => {
    const newState = !rotorOn;
    setRotorOn(newState);
    sendCommand("rotor", newState);
  };

  const updateSpeed = (e) => {
    const speed = parseInt(e.target.value, 10);
    setRotorSpeed(speed);
    sendCommand("rotorSpeed", speed);
  };

  return (
    <div className="bg-gray-900 border border-green-500 p-6 rounded shadow space-y-4">
      <h2 className="text-xl mb-4">Control Panel</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button
          onClick={toggleLight}
          className={`py-2 px-4 rounded font-bold ${
            lightOn ? "bg-green-700 text-black" : "bg-gray-700 text-green-300"
          }`}
        >
          {lightOn ? "Lights ON" : "Lights OFF"}
        </button>

        <button
          onClick={toggleRotor}
          className={`py-2 px-4 rounded font-bold ${
            rotorOn ? "bg-green-700 text-black" : "bg-gray-700 text-green-300"
          }`}
        >
          {rotorOn ? "Stop Rotor" : "Start Rotor"}
        </button>

        <div className="col-span-2 md:col-span-3">
          <label className="block mb-1">
            Rotor Speed: <strong>{rotorSpeed}%</strong>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={rotorSpeed}
            onChange={updateSpeed}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}