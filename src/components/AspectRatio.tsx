import React, { CSSProperties, PropsWithChildren } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type AspectRatioProps = PropsWithChildren<{
  ratio: number; // width / height
  style?: CSSProperties;
  vars?: CSSVarValues;
}>;

export function AspectRatio({ ratio, style, vars, children }: AspectRatioProps) {
  const wrapperStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    aspectRatio: String(ratio),
    ...mergeStyleVars(style, vars),
  };
  const contentStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'grid',
    placeItems: 'center',
  };
  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>{children}</div>
    </div>
  );
}
