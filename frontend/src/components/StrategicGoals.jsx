import React from "react";
import "./StrategicGoals.css";
import Heading from "./Heading";

const goals = [
  "1. بناء الشراكات الاستراتيجية مع المؤسسات البحثية والأكاديمية والربحية.",
  "2. تعزيز منظومة البحث والتطوير لدعم الابتكار وريادة الأعمال.",
  "3. رفع الوعي المجتمعي ونشر المعرفة في البحث العلمي.",
  "4. صناعة مجتمع ابتكاري.",
  "5. تمكين وتطوير الكوادر الوطنية.",
  "6. الاستدامة في الموارد.",
];

const StrategicGoals = () => {
  return (
    <div className="goals-container">
      <Heading text="الأهداف الاستراتيجية" color="#1B0B53" align="right" />
      <div className="goals-grid">
        {goals.map((goal, idx) => (
          <div key={idx} className="goal-card">
            {goal}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategicGoals;
