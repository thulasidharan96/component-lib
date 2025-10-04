import { Dialog, DialogSurface, DialogBody, DialogTitle, DialogActions, Button } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type DialogBoxProps = PropsWithChildren<{
  open: boolean;
  title?: ReactNode;
  primaryText?: string;
  secondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  onOpenChange?: (open: boolean) => void;
  vars?: CSSVarValues;
  style?: CSSProperties;
}>;

export function DialogBox({ open, title, primaryText = 'OK', secondaryText = 'Cancel', onPrimary, onSecondary, onOpenChange, vars, style, children }: DialogBoxProps) {
  return (
    <Dialog open={open} onOpenChange={(_, d) => onOpenChange?.(d.open)}>
      <DialogSurface style={mergeStyleVars(style, vars)}>
        <DialogBody>
          {title && <DialogTitle>{title}</DialogTitle>}
          {children}
          <DialogActions>
            {secondaryText && <Button appearance="secondary" onClick={onSecondary}>{secondaryText}</Button>}
            {primaryText && <Button appearance="primary" onClick={onPrimary}>{primaryText}</Button>}
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
