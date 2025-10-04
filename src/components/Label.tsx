import { Label as FLabel, type LabelProps as FLabelProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type LabelProps = FLabelProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Label({ vars, style, ...props }: LabelProps) {
  return <FLabel style={mergeStyleVars(style, vars)} {...props} />;
}
