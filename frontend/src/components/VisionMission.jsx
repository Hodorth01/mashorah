import React from "react";
import "./VisionMission.css";
import Heading from "./Heading";
import Body from "./Body";

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="mission-card">
        <Heading text="الرسالة" color="#1B0B53" align="right" size="50px" />
        <Body
          text="
        بناء بيئة بحثية وابتكارية تحول الأفكار إلى حلول مبتكرة، من خلال توفير
        الموارد وصناعة الشراكات الاستراتيجية."
        />
      </div>

      <div className="vision-card">
        <Heading text="الرؤية" color="#1B0B53" align="right" size="50px" />
        <Body text="مجتمـع مبتـكـر يقـود التحـول نحو اقتصـاد مستــدام قـائم على المعرفـة." />
      </div>
    </div>
  );
};

export default VisionMission;
