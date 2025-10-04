import { Tooltip as FTooltip, type TooltipProps as FTooltipProps } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type TooltipProps = PropsWithChildren<FTooltipProps & { vars?: CSSVarValues; style?: CSSProperties }> & {
  children: ReactElement;
};

export function Tooltip({ vars, style, children, ...props }: TooltipProps) {
  return (
    <FTooltip {...props}>
      {({ ref, ...triggerProps }) =>
        // FTooltip doesn't take style; we pass vars to child via style
        // Consumers can also style child directly
        (
          <span ref={ref as any} {...triggerProps} style={mergeStyleVars(style, vars)}>
            {children}
          </span>
        )
      }
    </FTooltip>
  );
}
