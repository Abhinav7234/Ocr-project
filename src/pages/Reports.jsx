import { mockInspections } from "../data/mockData";

export default function Reports() {
  const totalViolations = mockInspections.reduce(
    (sum, i) => sum + i.violations.length,
    0
  );
  const totalWarnings = mockInspections.reduce(
    (sum, i) => sum + i.warnings.length,
    0
  );

  return (
    <div style={{ padding: "24px" }}>
      <h2>Reports</h2>
      <p>Total inspections: {mockInspections.length}</p>
      <p>Total violations found: {totalViolations}</p>
      <p>Total warnings raised: {totalWarnings}</p>
      <h3>Violations by Product</h3>
      <ul>
        {mockInspections
          .filter((i) => i.violations.length > 0)
          .map((i) => (
            <li key={i.inspectionId}>
              <strong>{i.productName}</strong>: {i.violations.join(", ")}
            </li>
          ))}
      </ul>
    </div>
  );
}
