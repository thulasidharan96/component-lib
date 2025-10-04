import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import type { PropsWithChildren } from 'react';

export type OrgProviderProps = PropsWithChildren<{
  theme?: 'light' | 'dark';
  fluentThemeOverrides?: Partial<typeof webLightTheme>;
  className?: string;
}>;

export function OrgProvider({ theme = 'light', fluentThemeOverrides, className, children }: OrgProviderProps) {
  const baseTheme = theme === 'dark' ? webDarkTheme : webLightTheme;
  const mergedTheme = { ...baseTheme, ...(fluentThemeOverrides || {}) } as any;
  return (
    <FluentProvider className={className} theme={mergedTheme} style={{ colorScheme: theme }}>
      {children}
    </FluentProvider>
  );
}
