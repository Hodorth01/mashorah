import React from "react";
import "./Values.css";
import innovation from "../assets/innovation.png";
import teamwork from "../assets/teamwork.png";
import sustainability from "../assets/sustainability.png";
import governance from "../assets/governance.png";
import growth from "../assets/growth.png";
import partnership from "../assets/partnership.png";
import Heading from "./Heading";

const values = [
  { text: "الابتكار و الإبداع", icon: innovation },
  { text: "التعاون", icon: teamwork },
  { text: "الاستدامة", icon: sustainability },
  { text: "الحوكمة", icon: governance },
  { text: "التطوير المستمر", icon: growth },
  { text: "الشراكات والتكامل", icon: partnership },
];

const Values = () => {
  return (
    <div className="values-container">
      <Heading text="القيم" color="#1B0B53" align="right" />

      <div className="values-grid">
        {values.map((value, idx) => (
          <div key={idx} className="value-item">
            <img src={value.icon} alt={value.text} />
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
