export default function HeisControl({ heisActive, setHeisActive }) {
  const toggleHeis = () => {
    const newState = !heisActive;
    setHeisActive(newState);
    sendCommand("winch", newState ? "start" : "stop");
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
      <h2 className="text-xl mb-3">Redningsheis</h2>
      <button
        onClick={toggleHeis}
        className={`px-4 py-2 rounded font-bold ${
          heisActive
            ? "bg-green-700 text-black"
            : "bg-gray-700 text-green-300 hover:bg-green-600"
        }`}
      >
        {heisActive ? "Stop Heis (🛑)" : "Start Heis (🪢)"}
      </button>
    </div>
  );
}