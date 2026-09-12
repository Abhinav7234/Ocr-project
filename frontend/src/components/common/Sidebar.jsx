import React from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/upload', label: 'New Inspection' },
  { to: '/history', label: 'History' },
  { to: '/reports', label: 'Reports' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">Compliance Checker</div>
      <nav className="sidebar__nav">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              'sidebar__link' + (isActive ? ' sidebar__link--active' : '')
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}