import { Combobox as FCombobox, Option, type ComboboxProps as FComboboxProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type ComboboxOption = { key: string; text: string; disabled?: boolean };
export type ComboboxProps = FComboboxProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
  options?: ComboboxOption[];
};

export function Combobox({ vars, style, options, children, ...props }: ComboboxProps) {
  return (
    <FCombobox style={mergeStyleVars(style, vars)} {...props}>
      {options ? options.map((o) => <Option key={o.key} disabled={o.disabled}>{o.text}</Option>) : children}
    </FCombobox>
  );
}
