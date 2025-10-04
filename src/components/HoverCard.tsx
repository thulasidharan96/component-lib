// Fluent v9 doesn't expose HoverCard in core; provide simple hover popover wrapper
import React, { CSSProperties, PropsWithChildren, ReactNode, useState } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type HoverCardProps = PropsWithChildren<{ content: ReactNode; vars?: CSSVarValues; style?: CSSProperties }>;

export function HoverCard({ content, vars, style, children }: HoverCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open && (
        <div style={mergeStyleVars({ position: 'absolute', top: '100%', left: 0, background: 'var(--org-color-surface, white)', color: 'var(--org-color-surface-text, #111)', border: '1px solid #e5e7eb', borderRadius: 6, padding: 8, marginTop: 6, zIndex: 50 }, vars)}>
          {content}
        </div>
      )}
    </span>
  );
}
