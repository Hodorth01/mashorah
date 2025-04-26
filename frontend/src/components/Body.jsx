import React from "react";

function Body({ text, color = "#1B0B53", align = "right", size = "20px" }) {
  return (
    <div className="body-container">
      <div
        className="text-body"
        style={{
          color: color,
          paddingBottom: "0.5rem",
          textAlign: align,
          fontFamily: "Brando-Arabic",
          fontSize: size,
          fontWeight: "regular",
          lineHeight: "190%",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Body;
