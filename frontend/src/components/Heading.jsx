import React from "react";

function Heading({ text, color = "#1B0B53", align = "center", size = "60px" }) {
  return (
    <div className="header-container">
      <div
        className="heading"
        style={{
          color: color,
          paddingBottom: "0.5rem",
          textAlign: align,
          fontFamily: "Brando-Arabic",
          fontSize: size,
          fontWeight: "bold",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Heading;
