import { Textarea as FTextarea, type TextareaProps as FTextareaProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type TextareaProps = FTextareaProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Textarea({ vars, style, ...props }: TextareaProps) {
  return <FTextarea style={mergeStyleVars(style, vars)} {...props} />;
}
