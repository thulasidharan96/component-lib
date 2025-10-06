import React from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type FooterProps = {
  style?: CSSProperties;
  vars?: CSSVarValues;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
};

export function Footer({ style, vars, left, center, right }: FooterProps) {
  return (
    <footer
      style={mergeStyleVars(
        {
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 12,
          height: 56,
          padding: '0 16px',
          borderTop: '1px solid #e5e7eb'
        },
        vars
      )}
    >
      <div style={{ justifySelf: 'start' }}>{left}</div>
      <div style={{ justifySelf: 'center' }}>{center}</div>
      <div style={{ justifySelf: 'end' }}>{right}</div>
    </footer>
  );
}
