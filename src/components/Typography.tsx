import { Text as FText, Title1, Title2, Title3, Subtitle1 } from '@fluentui/react-components';
import type { ComponentProps, CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type TextProps = ComponentProps<typeof FText> & { vars?: CSSVarValues; style?: CSSProperties };
export type TitleProps = { children: ReactNode; style?: CSSProperties; vars?: CSSVarValues };

export function Text(props: TextProps) {
  const { style, vars, ...rest } = props;
  return <FText style={mergeStyleVars(style, vars)} {...rest} />;
}

export function H1({ children, style, vars }: TitleProps) {
  return <Title1 style={mergeStyleVars(style, vars)}>{children}</Title1>;
}
export function H2({ children, style, vars }: TitleProps) {
  return <Title2 style={mergeStyleVars(style, vars)}>{children}</Title2>;
}
export function H3({ children, style, vars }: TitleProps) {
  return <Title3 style={mergeStyleVars(style, vars)}>{children}</Title3>;
}
export function Subtle({ children, style, vars }: TitleProps) {
  return <Subtitle1 style={mergeStyleVars(style, vars)}>{children}</Subtitle1>;
}
