import "./services.css";
import Plyr from "plyr-react";
import 'plyr-react/plyr.css';

export default function Services() {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "/vid1.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <section className="services">
      <h2 className="header-section">Services</h2>
      <div className="container">
        <Plyr source={videoSrc}/>
       <h5>We <span>Build</span> Your Online Presence</h5>
      </div>
    </section>
  );
}
