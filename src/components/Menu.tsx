import { Menu as FMenu, MenuList, MenuItem, MenuPopover, MenuTrigger, type MenuProps as FMenuProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type MenuItemData = { key: string; text: string; disabled?: boolean; onSelect?: () => void };
export type MenuProps = FMenuProps & { vars?: CSSVarValues; style?: CSSProperties; items?: MenuItemData[] };

export function Menu({ vars, style, items, children, ...props }: MenuProps) {
  return (
    <FMenu {...props}>
      <MenuTrigger>{children}</MenuTrigger>
      <MenuPopover style={mergeStyleVars(style, vars)}>
        <MenuList>
          {items?.map((i) => (
            <MenuItem key={i.key} disabled={i.disabled} onClick={i.onSelect}>
              {i.text}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </FMenu>
  );
}
