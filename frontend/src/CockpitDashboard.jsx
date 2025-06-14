import { useState } from "react";
import VideoBackground from "./VideoBackground";
import StatusPanel from "./StatusPanel";
import ControlPanel from "./ControlPanel";
import ModeSelector from "./ModeSelector";
import LandingGearControl from "./LandingGearControl";
import HeisControl from "./HeisControl";
import ScenarioSelector from "./ScenarioSelector";




export default function CockpitDashboard() {
  const [scenario, setScenario] = useState("mountain");

    const [lightOn, setLightOn] = useState(false);
    const [rotorOn, setRotorOn] = useState(false);
    const [landingGearDown, setLandingGearDown] = useState(true);
    const [heisActive, setHeisActive] = useState(false);
    const [flightMode, setFlightMode] = useState("idle");
    const [rotorSpeed, setRotorSpeed] = useState(50);

  return (
    <div className="relative bg-black text-green-400 min-h-screen p-4 font-mono overflow-hidden">
      <VideoBackground scenario={scenario} />

      <h1 className="text-3xl text-center mb-6 tracking-wider relative z-10">
        AIRBUS COCKPIT SYSTEM
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        <div className="col-span-1 space-y-6">
          <StatusPanel
            lightOn={lightOn}
            rotorOn={rotorOn}
            landingGearDown={landingGearDown}
            heisActive={heisActive}
            flightMode={flightMode}
            />
          <LandingGearControl />
        </div>
        <div className="md:col-span-2 space-y-6">
          <ControlPanel
  lightOn={lightOn}
  setLightOn={setLightOn}
  rotorOn={rotorOn}
  setRotorOn={setRotorOn}
  rotorSpeed={rotorSpeed}
  setRotorSpeed={setRotorSpeed}
/>

<ModeSelector
  flightMode={flightMode}
  setFlightMode={setFlightMode}
/>

<LandingGearControl
  landingGearDown={landingGearDown}
  setLandingGearDown={setLandingGearDown}
/>

<HeisControl
  heisActive={heisActive}
  setHeisActive={setHeisActive}
/>

<ScenarioSelector onSelect={setScenario} />
        </div>
      </div>
    </div>
  );
}