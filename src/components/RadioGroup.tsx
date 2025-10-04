import { RadioGroup as FRadioGroup, Radio, type RadioGroupProps as FRadioGroupProps } from '@fluentui/react-components';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type RadioGroupOption = { value: string; label: ReactNode; disabled?: boolean };

export type RadioGroupProps = FRadioGroupProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
  options?: RadioGroupOption[];
};

export function RadioGroup({ vars, style, options, children, ...props }: RadioGroupProps) {
  return (
    <FRadioGroup style={mergeStyleVars(style, vars)} {...props}>
      {options
        ? options.map((opt) => (
            <Radio key={opt.value} value={opt.value} label={opt.label} disabled={opt.disabled} />
          ))
        : children}
    </FRadioGroup>
  );
}
