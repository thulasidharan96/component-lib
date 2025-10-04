import { ToggleButton as FToggleButton, type ToggleButtonProps as FToggleButtonProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type ToggleButtonProps = FToggleButtonProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
};

export function ToggleButton({ vars, style, ...props }: ToggleButtonProps) {
  return <FToggleButton style={mergeStyleVars(style, vars)} {...props} />;
}
