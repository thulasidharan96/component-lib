import { useToastController, Toaster } from '@fluentui/react-components';
import { useId, useMemo } from 'react';

export type NotifyHandle = {
  success: (title: string, body?: string) => void;
  error: (title: string, body?: string) => void;
  info: (title: string, body?: string) => void;
  warning: (title: string, body?: string) => void;
  Toaster: () => JSX.Element;
};

export function useNotify(): NotifyHandle {
  const toasterId = useId('toaster-');
  const { dispatchToast } = useToastController(toasterId);

  function show(kind: 'success' | 'error' | 'info' | 'warning', title: string, body?: string) {
    dispatchToast(
      {
        intent: kind,
        title,
        body
      } as any,
      { position: 'top-end' as any }
    );
  }

  return useMemo(
    () => ({
      success: (t, b) => show('success', t, b),
      error: (t, b) => show('error', t, b),
      info: (t, b) => show('info', t, b),
      warning: (t, b) => show('warning', t, b),
      Toaster: () => <Toaster toasterId={toasterId} />
    }),
    [toasterId]
  );
}
