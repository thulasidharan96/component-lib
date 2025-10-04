import { Skeleton as FSkeleton, type SkeletonProps as FSkeletonProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type SkeletonProps = FSkeletonProps & { vars?: CSSVarValues; style?: CSSProperties };

export function Skeleton({ vars, style, ...props }: SkeletonProps) {
  return <FSkeleton style={mergeStyleVars(style, vars)} {...props} />;
}
