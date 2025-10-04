import { Card } from '../components/Card';
import { Stack } from '../components/Stack';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Text } from '../components/Typography';
import type { CSSProperties, FormEvent } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type LoginPageProps = {
  title?: string;
  subtitle?: string;
  onSubmit: (data: { email: string; password: string }) => void | Promise<void>;
  submitText?: string;
  emailLabel?: string;
  passwordLabel?: string;
  forgotPasswordText?: string;
  onForgotPassword?: () => void;
  footer?: React.ReactNode;
  style?: CSSProperties;
  vars?: CSSVarValues;
};

export function LoginPage({
  title = 'Welcome back',
  subtitle,
  onSubmit,
  submitText = 'Sign in',
  emailLabel = 'Email',
  passwordLabel = 'Password',
  forgotPasswordText = 'Forgot password?',
  onForgotPassword,
  footer,
  style,
  vars
}: LoginPageProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get('email') || '');
    const password = String(form.get('password') || '');
    onSubmit({ email, password });
  }

  return (
    <div style={mergeStyleVars({ display: 'grid', placeItems: 'center', minHeight: '100dvh' }, vars)}>
      <Card style={{ width: 360, ...style }}>
        <Stack direction="column" gap="var(--org-space-md, 12px)">
          <Text size={600}>{title}</Text>
          {subtitle && <Text>{subtitle}</Text>}
          <form onSubmit={handleSubmit}>
            <Stack direction="column" gap="var(--org-space-md, 12px)">
              <label>
                <div>{emailLabel}</div>
                <Input name="email" placeholder="email@example.com" />
              </label>
              <label>
                <div>{passwordLabel}</div>
                <Input name="password" type="password" />
              </label>
              <Stack justify="space-between" align="center">
                <Button appearance="transparent" type="button" onClick={onForgotPassword}>
                  {forgotPasswordText}
                </Button>
                <Button appearance="primary" type="submit">
                  {submitText}
                </Button>
              </Stack>
            </Stack>
          </form>
          {footer}
        </Stack>
      </Card>
    </div>
  );
}
