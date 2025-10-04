import { Card as FCard, type CardProps as FCardProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type CardProps = FCardProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
};

export function Card({ vars, style, children, ...props }: CardProps) {
  return (
    <FCard style={mergeStyleVars(style, vars)} {...props}>
      {children}
    </FCard>
  );
}
