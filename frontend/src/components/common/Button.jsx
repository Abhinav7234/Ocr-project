import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}