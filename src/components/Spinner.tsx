import { Spinner as FSpinner, type SpinnerProps as FSpinnerProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type SpinnerProps = FSpinnerProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Spinner({ vars, style, ...props }: SpinnerProps) {
  return <FSpinner style={mergeStyleVars(style, vars)} {...props} />;
}
