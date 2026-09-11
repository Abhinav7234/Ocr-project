import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">Compliance Checker</div>
      <div className="navbar__actions">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/history">History</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
}