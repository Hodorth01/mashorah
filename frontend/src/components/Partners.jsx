import React from "react";
import PartnersImg from "/Partners.svg";

const Partners = () => {
  return (
    <div
      className="partners-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <img
        src={PartnersImg}
        alt="Partners"
        style={{
          width: "100%",
          height: "auto",
          margin: "0px 60px",
          padding: "60px 0px",
        }}
      />
    </div>
  );
};

export default Partners;
