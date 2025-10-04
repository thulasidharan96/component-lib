export type ColorTokens = {
  primary: string;
  primaryText: string;
  surface: string;
  surfaceText: string;
  critical: string;
  warning: string;
  success: string;
};

export type RadiusTokens = {
  sm: string;
  md: string;
  lg: string;
  full: string;
};

export type SpaceTokens = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type ThemeTokens = {
  color: ColorTokens;
  radius: RadiusTokens;
  space: SpaceTokens;
};

export const defaultTokens: ThemeTokens = {
  color: {
    primary: 'var(--org-color-primary, #115ea3)',
    primaryText: 'var(--org-color-primary-text, #ffffff)',
    surface: 'var(--org-color-surface, #ffffff)',
    surfaceText: 'var(--org-color-surface-text, #111111)',
    critical: 'var(--org-color-critical, #c50f1f)',
    warning: 'var(--org-color-warning, #f7630c)',
    success: 'var(--org-color-success, #107c10)'
  },
  radius: {
    sm: 'var(--org-radius-sm, 4px)',
    md: 'var(--org-radius-md, 8px)',
    lg: 'var(--org-radius-lg, 12px)',
    full: 'var(--org-radius-full, 9999px)'
  },
  space: {
    xs: 'var(--org-space-xs, 4px)',
    sm: 'var(--org-space-sm, 8px)',
    md: 'var(--org-space-md, 12px)',
    lg: 'var(--org-space-lg, 16px)',
    xl: 'var(--org-space-xl, 24px)'
  }
};
