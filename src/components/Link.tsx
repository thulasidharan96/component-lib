import { Link as FLink, type LinkProps as FLinkProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type LinkProps = FLinkProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Link({ vars, style, ...props }: LinkProps) {
  return <FLink style={mergeStyleVars(style, vars)} {...props} />;
}
