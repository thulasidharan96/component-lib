import { Avatar as FAvatar, type AvatarProps as FAvatarProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type AvatarProps = FAvatarProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Avatar({ vars, style, ...props }: AvatarProps) {
  return <FAvatar style={mergeStyleVars(style, vars)} {...props} />;
}
