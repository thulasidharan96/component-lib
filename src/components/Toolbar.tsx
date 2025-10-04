import { Toolbar as FToolbar, ToolbarButton, ToolbarToggleButton, ToolbarDivider, type ToolbarProps as FToolbarProps } from '@fluentui/react-components';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type ToolbarItem =
  | { type: 'button'; key: string; content: ReactNode; onClick?: () => void }
  | { type: 'toggle'; key: string; content: ReactNode; defaultPressed?: boolean; onClick?: () => void }
  | { type: 'divider'; key: string };

export type ToolbarProps = FToolbarProps & { vars?: CSSVarValues; style?: CSSProperties; items?: ToolbarItem[] };

export function Toolbar({ vars, style, items, children, ...props }: ToolbarProps) {
  return (
    <FToolbar style={mergeStyleVars(style, vars)} {...props}>
      {items
        ? items.map((i) => {
            if (i.type === 'divider') return <ToolbarDivider key={i.key} />;
            if (i.type === 'button')
              return (
                <ToolbarButton key={i.key} onClick={i.onClick}>
                  {i.content}
                </ToolbarButton>
              );
            return (
              <ToolbarToggleButton key={i.key} onClick={i.onClick}>
                {i.content}
              </ToolbarToggleButton>
            );
          })
        : children}
    </FToolbar>
  );
}
