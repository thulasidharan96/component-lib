import { Toaster as FToaster, useToastController, Toast, ToastTitle, ToastBody, type ToasterProps as FToasterProps } from '@fluentui/react-components';
import { useMemo } from 'react';

export { useToastController };

export type ToasterProps = FToasterProps;

export function Toaster(props: ToasterProps) {
  return <FToaster {...props} />;
}

export function buildToast(title: string, body?: string) {
  return (
    <Toast>
      <ToastTitle>{title}</ToastTitle>
      {body && <ToastBody>{body}</ToastBody>}
    </Toast>
  );
}
