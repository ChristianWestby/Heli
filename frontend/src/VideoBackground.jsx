export default function VideoBackground({ scenario }) {
  const getVideoSrc = () => {
    switch (scenario) {
      case "ocean":
        return "/videos/flight-ocean.mp4";
      case "night":
        return "/videos/flight-night.mp4";
      case "rescue":
        return "/videos/flight-rescue.mp4";
      case "mountain":
      default:
        return "/videos/flight-mountain.mp4";
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        key={scenario} // restart video on change
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover brightness-50"
      >
        <source src={getVideoSrc()} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}