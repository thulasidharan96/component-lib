import { Badge as FBadge, type BadgeProps as FBadgeProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type BadgeProps = FBadgeProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Badge({ vars, style, ...props }: BadgeProps) {
  return <FBadge style={mergeStyleVars(style, vars)} {...props} />;
}
