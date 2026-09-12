import React from 'react';

const STATUS_MAP = {
  compliant: { label: 'Compliant', className: 'status-badge--compliant' },
  'non-compliant': { label: 'Non-Compliant', className: 'status-badge--violation' },
  violation: { label: 'Non-Compliant', className: 'status-badge--violation' },
  pending: { label: 'Pending', className: 'status-badge--pending' },
  processing: { label: 'Pending', className: 'status-badge--pending' },
};

export default function StatusBadge({ status, className = '' }) {
  const key = String(status || '').toLowerCase().trim();
  const match = STATUS_MAP[key] || { label: status || 'Unknown', className: 'status-badge--pending' };
  return (
    <span className={['status-badge', match.className, className].filter(Boolean).join(' ')}>
      {match.label}
    </span>
  );
}
