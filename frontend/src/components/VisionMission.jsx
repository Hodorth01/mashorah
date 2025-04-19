import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <div className="mission-card">
        <h2 className="title">الرسالة</h2> <p>
          بناء بيئة بحثية وابتكارية تحول الأفكار إلى حلول مبتكرة، من خلال
          توفير الموارد وصناعة الشراكات الاستراتيجية.
        </p>
      </div>
      <div className="vision-card">
        <h2 className="title">الرؤية</h2><p>مجتمع مبتكر يقود التحول نحو اقتصاد مستدام قائم على المعرفة.</p>
      </div>
    </div>
  );
};

export default VisionMission;
