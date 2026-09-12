import React from 'react';

export default function Card({
  title,
  meta,
  accent = false,
  children,
  className = '',
  ...rest
}) {
  const classes = ['card', accent ? 'card--accent' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {title && <div className="card__title">{title}</div>}
      {meta && <p className="card__meta">{meta}</p>}
      {children}
    </div>
  );
}