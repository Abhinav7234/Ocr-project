import { Link } from "react-router-dom";
import { mockInspections } from "../data/mockData";

export default function History() {
  return (
    <div style={{ padding: "24px" }}>
      <h2>Inspection History</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={cellStyle}>Product</th>
            <th style={cellStyle}>Manufacturer</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          {mockInspections.map((i) => (
            <tr key={i.inspectionId}>
              <td style={cellStyle}>{i.productName}</td>
              <td style={cellStyle}>{i.manufacturer || "—"}</td>
              <td style={cellStyle}>{i.complianceStatus}</td>
              <td style={cellStyle}>
                <Link to={`/results/${i.inspectionId}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};
