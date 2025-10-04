import { Input as FInput, type InputProps as FInputProps } from '@fluentui/react-components';
import type { CSSProperties, HTMLAttributes } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type InputProps = FInputProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
  containerProps?: HTMLAttributes<HTMLDivElement> & Record<string, any>;
};

export function Input({ vars, style, containerProps, ...props }: InputProps) {
  return (
    <div {...containerProps} style={mergeStyleVars(containerProps?.style ?? style, vars)}>
      <FInput {...props} />
    </div>
  );
}
