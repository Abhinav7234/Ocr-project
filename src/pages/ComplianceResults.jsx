import { useParams } from "react-router-dom";
import { mockInspections } from "../data/mockData";

export default function ComplianceResults() {
  const { inspectionId } = useParams();
  const inspection =
    mockInspections.find((i) => i.inspectionId === inspectionId) ||
    mockInspections[0];

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>Compliance Results</h1>
      <h2>{inspection.productName}</h2>
      <p>Inspection ID: {inspection.inspectionId}</p>
      <p>Manufacturer: {inspection.manufacturer || "Not detected"}</p>
      <p>Net Quantity: {inspection.netQuantity || "Not detected"}</p>
      <p>MRP: {inspection.mrp || "Not detected"}</p>
      <h3>Object Recognition</h3>
      <p>
        {inspection.objectRecognition.label} (
        {Math.round(inspection.objectRecognition.confidence * 100)}% confidence)
      </p>
      <h3>Extracted Label Text</h3>
      <p>{inspection.extractedText}</p>
      <h3>Status: {inspection.complianceStatus}</h3>
      {inspection.violations.length > 0 && (
        <ul>
          {inspection.violations.map((v, idx) => (
            <li key={idx}>{v}</li>
          ))}
        </ul>
      )}
      {inspection.warnings.length > 0 && (
        <ul>
          {inspection.warnings.map((w, idx) => (
            <li key={idx} style={{ color: "orange" }}>{w}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
