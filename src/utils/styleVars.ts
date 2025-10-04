import type { CSSProperties } from 'react';

export type CSSVarValues = Record<string, string | number>;

export function mergeStyleVars(
  style: CSSProperties | undefined,
  vars?: CSSVarValues
): CSSProperties | undefined {
  if (!vars) return style;
  const next: CSSProperties = { ...(style || {}) };
  for (const [name, value] of Object.entries(vars)) {
    if (!name.startsWith('--')) continue;
    (next as any)[name] = String(value);
  }
  return next;
}
