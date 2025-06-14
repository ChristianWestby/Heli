export default function StatusPanel({
  lightOn,
  rotorOn,
  landingGearDown,
  heisActive,
  flightMode,
}) {
  return (
    <div className="bg-gray-900 border border-green-500 p-4 rounded shadow">
      <h2 className="text-xl mb-4">System Status</h2>
      <ul className="space-y-2">
        <li>
          💡 Lights:{" "}
          <span className={lightOn ? "text-green-300" : "text-red-400"}>
            {lightOn ? "ON" : "OFF"}
          </span>
        </li>
        <li>
          🌀 Rotor:{" "}
          <span className={rotorOn ? "text-green-300" : "text-red-400"}>
            {rotorOn ? "ACTIVE" : "OFF"}
          </span>
        </li>
        <li>
          ⚙️ Landing Gear:{" "}
          <span className={landingGearDown ? "text-green-300" : "text-yellow-300"}>
            {landingGearDown ? "DOWN" : "UP"}
          </span>
        </li>
        <li>
          🪢 Heis:{" "}
          <span className={heisActive ? "text-green-300" : "text-gray-400"}>
            {heisActive ? "ACTIVE" : "INACTIVE"}
          </span>
        </li>
        <li>
          🎯 Mode:{" "}
          <span className="text-green-300">
            {flightMode.charAt(0).toUpperCase() + flightMode.slice(1)}
          </span>
        </li>
      </ul>
     
    </div>
  );
}