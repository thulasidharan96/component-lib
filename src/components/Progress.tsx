import { ProgressBar, type ProgressBarProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type ProgressProps = ProgressBarProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Progress({ vars, style, ...props }: ProgressProps) {
  return <ProgressBar style={mergeStyleVars(style, vars)} {...props} />;
}
