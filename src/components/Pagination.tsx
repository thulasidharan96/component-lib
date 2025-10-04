import { Button } from './Button';
import { Stack } from './Stack';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  style?: CSSProperties;
  vars?: CSSVarValues;
};

export function Pagination({ page, totalPages, onChange, style, vars }: PaginationProps) {
  const canPrev = page > 1;
  const canNext = page < totalPages;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <Stack style={mergeStyleVars(style, vars)} align="center" gap="var(--org-space-sm, 8px)">
      <Button disabled={!canPrev} onClick={() => onChange(page - 1)}>
        Prev
      </Button>
      {pages.map((p) => (
        <Button key={p} appearance={p === page ? 'primary' : 'secondary'} onClick={() => onChange(p)}>
          {p}
        </Button>
      ))}
      <Button disabled={!canNext} onClick={() => onChange(page + 1)}>
        Next
      </Button>
    </Stack>
  );
}
