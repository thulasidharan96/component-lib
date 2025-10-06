import React from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type NavbarLink = { key: string; content: ReactNode; href?: string; onClick?: () => void };

export type NavbarProps = {
  style?: CSSProperties;
  vars?: CSSVarValues;
  items?: NavbarLink[];
  children?: ReactNode;
};

export function Navbar({ style, vars, items, children }: NavbarProps) {
  return (
    <nav
      style={mergeStyleVars(
        {
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          padding: '10px 16px',
          background: '#22505f',
          color: '#ffffff'
        },
        vars
      )}
    >
      {items
        ? items.map((i) =>
            i.href ? (
              <a
                key={i.key}
                href={i.href}
                onClick={i.onClick}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {i.content}
              </a>
            ) : (
              <button
                key={i.key}
                onClick={i.onClick}
                style={{
                  background: 'transparent',
                  border: 0,
                  padding: 0,
                  cursor: 'pointer',
                  color: 'inherit'
                }}
              >
                {i.content}
              </button>
            )
          )
        : children}
    </nav>
  );
}
