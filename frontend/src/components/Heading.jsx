import React from "react";

function Heading({ text, color = "#1B0B53", align = "center" }) {
  return (
    <div className="header-container">
      <h2
        className="heading"
        style={{
          color: color,
          paddingBottom: "0.5rem",
          textAlign: align,
          fontFamily: "Brando-Arabic",
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        {text}
      </h2>
    </div>
  );
}

export default Heading;
