import { Popover as FPopover, PopoverTrigger, PopoverSurface, type PopoverProps as FPopoverProps } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type PopoverProps = PropsWithChildren<FPopoverProps & { vars?: CSSVarValues; style?: CSSProperties; content?: ReactNode }>;

export function Popover({ vars, style, content, children, ...props }: PopoverProps) {
  return (
    <FPopover {...props}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverSurface style={mergeStyleVars(style, vars)}>{content}</PopoverSurface>
    </FPopover>
  );
}
