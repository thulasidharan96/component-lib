import { useToastController, Toaster } from '@fluentui/react-components';
import React, { useId, useMemo } from 'react';

export type NotifyHandle = {
  success: (title: string, body?: string) => void;
  error: (title: string, body?: string) => void;
  info: (title: string, body?: string) => void;
  warning: (title: string, body?: string) => void;
  Toaster: () => React.ReactElement;
};

export function useNotify(): NotifyHandle {
  const toasterId = useId();
  const { dispatchToast } = useToastController(toasterId);

  function show(kind: 'success' | 'error' | 'info' | 'warning', title: string, body?: string) {
    dispatchToast({ body, title } as any, { position: 'top-end' as any, intent: kind as any });
  }

  return useMemo(() => {
    const ToasterComponent = () => React.createElement(Toaster as any, { toasterId });
    return {
      success: (t: string, b?: string) => show('success', t, b),
      error: (t: string, b?: string) => show('error', t, b),
      info: (t: string, b?: string) => show('info', t, b),
      warning: (t: string, b?: string) => show('warning', t, b),
      Toaster: ToasterComponent,
    } as const;
  }, [toasterId]);
}
