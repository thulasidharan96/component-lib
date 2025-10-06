import React from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type HeaderProps = {
  style?: CSSProperties;
  vars?: CSSVarValues;
  logo?: ReactNode;
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
};

export function Header({ style, vars, logo, left, center, right }: HeaderProps) {
  return (
    <header
      style={mergeStyleVars(
        {
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          gap: 12,
          height: 56,
          padding: '0 16px',
          background: '#22505f',
          color: '#ffffff'
        },
        vars
      )}
    >
      <div style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', gap: 8 }}>
        {logo}
        {left}
      </div>
      <div style={{ justifySelf: 'start' }}>{center}</div>
      <div style={{ justifySelf: 'end' }}>{right}</div>
    </header>
  );
}
