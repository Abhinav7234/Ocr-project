import { useParams, Link } from 'react-router-dom'
import { documents, getDocumentById, getStatusCounts } from '
import StatusBadge from '
../components/common/StatusBadge'
import '
./ComplianceResults.css'
../data/mockData'
export default function ComplianceResults() {
const { id } = useParams()
const doc = id ? getDocumentById(id) : null
if (id && !doc) {
return (
<div className=
"cr-page">
<p className=
"cr-empty">
No document found for id "{id}"
</p>
</div>
. <Link to=
"/compliance-results">Back to all results</Link>
)
}
return doc ? <DetailView doc={doc} /> : <ListView />
}
function ListView() {
const counts = getStatusCounts()
return (
<div className=
"cr-page">
<header className=
"cr-header">
<h1>Compliance results</h1>
<p className=
"cr-subhead">
Every processed upload, checked against the current compliance rules.
</p>
</header>
<div className=
"cr-summary">
<SummaryStat label=
"Compliant" value={counts.compliant} tone=
"compliant" />
<SummaryStat label=
"Flagged" value={counts.flagged} tone=
"flagged" />
<SummaryStat label=
"Needs review" value={counts.pending} tone=
"pending" />
</div>
<div className=
"cr-grid">
{documents.map((doc) => (
<Link to={`/compliance-results/${doc.id}`} key={doc.id} className=
"cr-card">
<div className=
"cr-card-top">
<span className=
"cr-doctype">{doc.documentType}</span>
<StatusBadge status={doc.compliance.status} />
</div>
<p className=
"cr-filename">{doc.fileName}</p>
<p className=
"cr-meta">
OCR confidence {Math.round(doc.ocr.confidence * 100)}% · uploaded{' '}
{formatDate(doc.uploadedAt)}
</p>
</Link>
))}
</div>
</div>
)
}
function DetailView({ doc }) {
return (
<div className=
"cr-page">
<Link to=
"/compliance-results" className=
"cr-back">
← All results
</Link>
<header className=
"cr-header cr-header--detail">
<div>
<h1>{doc.fileName}</h1>
<p className=
"cr-subhead">
{doc.documentType} · uploaded {formatDate(doc.uploadedAt)}
</p>
</div>
<StatusBadge status={doc.compliance.status} />
</header>
<div className=
"cr-detail-grid">
<section className=
"cr-panel cr-panel--paper">
<h2>Extracted text</h2>
<p className=
"cr-confidence">
OCR confidence: {Math.round(doc.ocr.confidence * 100)}%
</p>
<pre className=
"cr-rawtext">{doc.ocr.rawText}</pre>
{Object.keys(doc.ocr.fields).length > 0 && (
<>
<h3>Fields</h3>
<dl className=
"cr-fields">
{Object.entries(doc.ocr.fields).map(([key, value]) => (
<div className=
"cr-field-row" key={key}>
<dt>{fieldLabel(key)}</dt>
<dd>{value ?? '
—
'}</dd>
</div>
))}
</dl>
</>
)}
</section>
<section className=
"cr-panel">
<h2>Detected objects</h2>
<ul className=
"cr-tags">
{doc.objectRecognition.detectedObjects.map((obj) => (
<li key={obj.label} className=
"cr-tag">
{obj.label}
<span className=
"cr-tag-confidence">{Math.round(obj.confidence * 100)}%</span>
</li>
))}
</ul>
<h2>Compliance checks</h2>
<ul className=
"cr-checks">
{doc.compliance.checks.map((check) => (
<li key={check.rule} className={`
cr-check cr-check--${check.passed ? 'pass' : 'fail'}`}>
<span className=
"cr-check-mark">{check.passed ? '✓' : '✕'}</span>
<div>
<p className=
"cr-check-rule">{check.rule}</p>
{check.note && <p className=
"cr-check-note">{check.note}</p>}
</div>
</li>
))}
</ul>
</section>
</div>
</div>
)
}
function SummaryStat({ label, value, tone }) {
return (
<div className={`
cr-stat cr-stat--${tone}`}>
<span className=
"cr-stat-value">{value}</span>
<span className=
"cr-stat-label">{label}</span>
</div>
)
}
function fieldLabel(key) {
return key
.replace(/([A-Z])/g,
' $1')
.replace(/^
./, (c) => c.toUpperCase())
.trim()
}
function formatDate(isoString) {
return new Date(isoString).toLocaleDateString('en-IN'
day: '2-digit'
month: 'short'
,
,
year: 'numeric'
,
, {
})
}
