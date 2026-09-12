import React from 'react';
import { NavLink } from 'react-router-dom';
const LINKS = [
{ to: '/dashboard'
{ to: '/upload'
{ to: '/history'
{ to: '/reports'
, label: 'Dashboard' },
, label: 'New Inspection' },
, label: 'History' },
, label: 'Reports' },
];
export default function Sidebar() {
return (
<aside className=
"sidebar">
<div className=
"sidebar
brand">Compliance Checker</div>
__
<nav className=
"sidebar
nav">
__
{LINKS.map((link) => (
<NavLink
key={link.to}
to={link.to}
className={({ isActive }) =>
'sidebar
link' + (isActive ? ' sidebar
link--active' : '')
__
__
}
>
{link.label}
</NavLink>
))}
</nav>
</aside>
);
}
