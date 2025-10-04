import { makeStyles, shorthands } from '@fluentui/react-components';
import type { CSSProperties, PropsWithChildren } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type StackProps = PropsWithChildren<{
  direction?: 'row' | 'column';
  gap?: string;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  style?: CSSProperties;
  vars?: CSSVarValues;
}>;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    ...shorthands.gap('var(--org-space-md, 12px)')
  }
});

export function Stack({ direction = 'row', gap, align, justify, style, vars, children }: StackProps) {
  const classes = useStyles();
  const mergedStyle: CSSProperties = {
    flexDirection: direction,
    ...(gap ? { gap } : {}),
    ...(align ? { alignItems: align } : {}),
    ...(justify ? { justifyContent: justify } : {}),
  };
  return (
    <div className={classes.root} style={mergeStyleVars({ ...mergedStyle, ...(style || {}) }, vars)}>
      {children}
    </div>
  );
}
