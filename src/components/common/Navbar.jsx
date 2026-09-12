import { Link } from "react-router-dom";
export default function Navbar() {
return (
<nav className=
"navbar">
<div className=
"navbar
brand">Compliance Checker</div>
__
<div className=
"navbar
actions">
__
<Link to=
"/dashboard">Dashboard</Link>
<Link to=
"/upload">Upload</Link>
<Link to=
"/history">History</Link>
<Link to=
"/reports">Reports</Link>
</div>
</nav>
);
}
