import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px 24px", borderBottom: "1px solid #333", display: "flex", gap: "16px" }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/history">History</Link>
      <Link to="/reports">Reports</Link>
    </nav>
  );
}
