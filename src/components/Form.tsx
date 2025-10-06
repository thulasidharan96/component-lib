import React from 'react';
import type { CSSProperties, FormHTMLAttributes, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  style?: CSSProperties;
  vars?: CSSVarValues;
  children?: ReactNode;
};

export function Form({ style, vars, children, ...props }: FormProps) {
  return (
    <form
      {...props}
      style={mergeStyleVars(
        {
          display: 'grid',
          gap: '12px',
        },
        vars
      )}
    >
      {children}
    </form>
  );
}

export type FormRowProps = {
  style?: CSSProperties;
  vars?: CSSVarValues;
  label?: ReactNode;
  input?: ReactNode;
  hint?: ReactNode;
};

export function FormRow({ style, vars, label, input, hint }: FormRowProps) {
  return (
    <div style={mergeStyleVars({ display: 'grid', gap: 6 }, vars)}>
      {label}
      {input}
      {hint && <div style={{ color: '#64748b', fontSize: 12 }}>{hint}</div>}
    </div>
  );
}

export type FormActionsProps = {
  style?: CSSProperties;
  vars?: CSSVarValues;
  children?: ReactNode;
};

export function FormActions({ style, vars, children }: FormActionsProps) {
  return (
    <div style={mergeStyleVars({ display: 'flex', gap: 8, justifyContent: 'flex-end' }, vars)}>
      {children}
    </div>
  );
}
