import { Popover as FPopover, PopoverTrigger, PopoverSurface, type PopoverProps as FPopoverProps } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren, ReactNode, Ref, HTMLAttributes } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type PopoverProps = PropsWithChildren<FPopoverProps & { vars?: CSSVarValues; style?: CSSProperties; content?: ReactNode }>;

export function Popover({ vars, style, content, children, ...props }: PopoverProps) {
  return (
    <FPopover {...props}>
      <PopoverTrigger>
        {(triggerProps) => {
          // Normalize trigger props so they are compatible with a <span>
          const { ref, href, ...rest } = triggerProps as {
            ref?: Ref<unknown>;
            href?: string;
          } & HTMLAttributes<HTMLSpanElement>;

          return (
            <span
              {...(rest as HTMLAttributes<HTMLSpanElement>)}
              ref={ref as Ref<HTMLSpanElement>}
            >
              {children}
            </span>
          );
        }}
      </PopoverTrigger>
      <PopoverSurface style={mergeStyleVars(style, vars)}>{content}</PopoverSurface>
    </FPopover>
  );
}
