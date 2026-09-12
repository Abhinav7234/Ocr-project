import React from 'react';
export default function Card({
title,
meta,
accent = false,
children,
className =
''
,
...rest
}) {
const classes = ['card'
.filter(Boolean)
.join(' ');
, accent ? 'card--accent' : ''
, className]
return (
<div className={classes} {...rest}>
{title && <div className=
"card
{meta && <p className=
"card
__
{children}
</div>
title">{title}</div>}
__
meta">{meta}</p>}
}
);
