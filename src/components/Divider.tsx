import { Divider as FDivider, type DividerProps as FDividerProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type DividerProps = FDividerProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Divider({ vars, style, ...props }: DividerProps) {
  return <FDivider style={mergeStyleVars(style, vars)} {...props} />;
}
