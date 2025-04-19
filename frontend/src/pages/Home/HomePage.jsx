import React from "react";
import VisionMission from "../../components/VisionMission";
import Values from "../../components/Values";
import StrategicGoals from "../../components/StrategicGoals";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <img src="/src/assets/M_logo3.png" className="bg-top-left" alt="" />
      <img src="/src/assets/M_logo1.png" className="bg-top-right" alt="" />
      <img src="/src/assets/M_logo2.png" className="bg-bottom-left" alt="" />
      <img src="/src/assets/M_logo.png" className="bg-bottom-right" alt="" />

      <VisionMission />
      <Values />
      <StrategicGoals />
    </div>
  );
};

export default HomePage;
