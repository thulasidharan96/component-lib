import { Dialog as FDialog, DialogSurface, DialogBody, DialogTitle, DialogActions, Button } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type AlertDialogProps = PropsWithChildren<{
  open: boolean;
  title?: ReactNode;
  description?: ReactNode;
  actionText?: string;
  onAction?: () => void;
  onOpenChange?: (open: boolean) => void;
  vars?: CSSVarValues;
  style?: CSSProperties;
}>;

export function AlertDialog({ open, title, description, actionText = 'OK', onAction, onOpenChange, vars, style, children }: AlertDialogProps) {
  return (
    <FDialog open={open} onOpenChange={(_, d) => onOpenChange?.(d.open)}>
      <DialogSurface style={mergeStyleVars(style, vars)}>
        <DialogBody>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description}
          {children}
          <DialogActions>
            <Button appearance="primary" onClick={onAction}>{actionText}</Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </FDialog>
  );
}
