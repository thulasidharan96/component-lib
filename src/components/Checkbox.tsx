import { Checkbox as FCheckbox, type CheckboxProps as FCheckboxProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type CheckboxProps = FCheckboxProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
};

export function Checkbox({ vars, style, ...props }: CheckboxProps) {
  return <FCheckbox style={mergeStyleVars(style, vars)} {...props} />;
}
