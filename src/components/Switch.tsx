import { Switch as FSwitch, type SwitchProps as FSwitchProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type SwitchProps = FSwitchProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
};

export function Switch({ vars, style, ...props }: SwitchProps) {
  return <FSwitch style={mergeStyleVars(style, vars)} {...props} />;
}
