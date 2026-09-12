import { Link } from "react-router-dom";
import { mockInspections } from "../data/mockData";

export default function Dashboard() {
  const total = mockInspections.length;
  const compliant = mockInspections.filter(
    (i) => i.complianceStatus === "Compliant"
  ).length;
  const nonCompliant = total - compliant;

  return (
    <div style={{ padding: "24px" }}>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
        <div style={{ border: "1px solid #ccc", padding: "16px", flex: 1 }}>
          <h3>Total Inspections</h3>
          <p style={{ fontSize: "24px" }}>{total}</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "16px", flex: 1 }}>
          <h3>Compliant</h3>
          <p style={{ fontSize: "24px" }}>{compliant}</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "16px", flex: 1 }}>
          <h3>Non-Compliant</h3>
          <p style={{ fontSize: "24px" }}>{nonCompliant}</p>
        </div>
      </div>
      <h3>Recent Inspections</h3>
      <ul>
        {mockInspections.map((i) => (
          <li key={i.inspectionId}>
            <Link to={`/results/${i.inspectionId}`}>
              {i.productName} — {i.complianceStatus}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
