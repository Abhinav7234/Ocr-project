import '
./StatusBadge.css'
const LABELS = {
compliant: 'Compliant'
,
flagged: 'Flagged'
,
pending: 'Needs review'
,
}
export default function StatusBadge({ status }) {
const label = LABELS[status] || status
return <span className={`
status-badge status-badge--${status}`}>{label}</span>
}
