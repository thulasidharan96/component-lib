import { Drawer as FDrawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, type DrawerProps as FDrawerProps } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type DrawerProps = PropsWithChildren<FDrawerProps & {
  title?: ReactNode;
  vars?: CSSVarValues;
  style?: CSSProperties;
}>;

export function Drawer({ title, vars, style, children, ...props }: DrawerProps) {
  return (
    <FDrawer {...props}>
      <DrawerHeader style={mergeStyleVars(style, vars)}>
        {title && <DrawerHeaderTitle>{title}</DrawerHeaderTitle>}
      </DrawerHeader>
      <DrawerBody>
        {children}
      </DrawerBody>
    </FDrawer>
  );
}
