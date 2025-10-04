import { Select as FSelect, Option, type SelectProps as FSelectProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type SelectOption = { key: string; text: string; disabled?: boolean };
export type SelectProps = FSelectProps & { vars?: CSSVarValues; style?: CSSProperties; options?: SelectOption[] };

export function Select({ vars, style, options, children, ...props }: SelectProps) {
  return (
    <FSelect style={mergeStyleVars(style, vars)} {...props}>
      {options ? options.map((o) => <Option key={o.key} disabled={o.disabled}>{o.text}</Option>) : children}
    </FSelect>
  );
}
