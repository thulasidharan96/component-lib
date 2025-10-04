import { Dialog as FDialog, DialogTrigger, DialogSurface, DialogBody, DialogTitle, DialogContent, type DialogProps as FDialogProps } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type DialogProps = PropsWithChildren<FDialogProps & { vars?: CSSVarValues; style?: CSSProperties; title?: ReactNode }>;

export function Dialog({ vars, style, title, children, ...props }: DialogProps) {
  return (
    <FDialog {...props}>
      <DialogSurface style={mergeStyleVars(style, vars)}>
        {title && (
          <DialogBody>
            <DialogTitle>{title}</DialogTitle>
          </DialogBody>
        )}
        <DialogContent>{children}</DialogContent>
      </DialogSurface>
    </FDialog>
  );
}

export { DialogTrigger };
