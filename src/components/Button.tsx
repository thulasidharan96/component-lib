import { Button as FButton, type ButtonProps as FButtonProps, makeStyles, shorthands } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';
import { defaultTokens } from '../theme/tokens';

export type ButtonProps = FButtonProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
};

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius(`var(--org-radius-md, 8px)`),
  }
});

export function Button({ vars, style, ...props }: ButtonProps) {
  const styles = useStyles();
  return (
    <FButton
      className={styles.root}
      style={mergeStyleVars(style, vars)}
      {...props}
    />
  );
}

export const buttonVars = {
  '--org-radius-md': defaultTokens.radius.md,
};
