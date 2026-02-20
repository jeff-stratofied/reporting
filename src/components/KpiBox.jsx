// src/components/KpiBox.jsx
import React from "react";

function KpiBox({ label, value, subtitle = "" }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "16px",
        minWidth: "180px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <div style={{ color: "#64748b", fontSize: "14px", marginBottom: "4px" }}>
        {label}
      </div>
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "#0f172a" }}>
        {value}
      </div>
      {subtitle && (
        <div style={{ color: "#64748b", fontSize: "12px", marginTop: "4px" }}>
          {subtitle}
        </div>
      )}
    </div>
  );
}

export default KpiBox;
