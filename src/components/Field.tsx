import { Field as FField, type FieldProps as FFieldProps } from '@fluentui/react-components';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type FieldProps = FFieldProps & { vars?: CSSVarValues; style?: CSSProperties; description?: ReactNode };

export function Field({ vars, style, description, ...props }: FieldProps) {
  return <FField hint={{ children: description as any }} style={mergeStyleVars(style, vars)} {...props} />;
}
