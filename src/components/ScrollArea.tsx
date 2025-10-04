import React, { CSSProperties, PropsWithChildren } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type ScrollAreaProps = PropsWithChildren<{
  style?: CSSProperties;
  vars?: CSSVarValues;
  height?: CSSProperties['height'];
}>;

export function ScrollArea({ style, vars, height = 240, children }: ScrollAreaProps) {
  return (
    <div style={mergeStyleVars({ overflow: 'auto', height }, vars)}>
      {children}
    </div>
  );
}
