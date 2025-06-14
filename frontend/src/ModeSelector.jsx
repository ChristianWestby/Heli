export default function ModeSelector({ flightMode, setFlightMode }) {
  const modes = ["idle", "takeoff", "landing", "hover", "rescue", "max"];

  const handleSelect = (mode) => {
    setFlightMode(mode);
    sendCommand("mode", mode);
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
      <h2 className="text-xl mb-3">Flight Mode</h2>
      <div className="flex flex-wrap gap-3">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => handleSelect(mode)}
            className={`px-4 py-2 rounded font-bold capitalize ${
              flightMode === mode
                ? "bg-green-700 text-black"
                : "bg-gray-700 text-green-300 hover:bg-green-600"
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
}