import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbDivider, BreadcrumbButton, type BreadcrumbProps } from '@fluentui/react-components';
import type { CSSProperties } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type Crumb = { key: string; text: string; onClick?: () => void };
export type BreadcrumbsProps = BreadcrumbProps & { items?: Crumb[]; vars?: CSSVarValues; style?: CSSProperties };

export function Breadcrumbs({ items, vars, style, children, ...props }: BreadcrumbsProps) {
  return (
    <Breadcrumb style={mergeStyleVars(style, vars)} {...props}>
      {items
        ? items.map((c, i) => (
            <React.Fragment key={c.key}>
              <BreadcrumbItem>
                <BreadcrumbButton onClick={c.onClick} aria-current={i === items.length - 1 ? 'page' : undefined}>
                  {c.text}
                </BreadcrumbButton>
              </BreadcrumbItem>
              {i < items.length - 1 && <BreadcrumbDivider />}
            </React.Fragment>
          ))
        : children}
    </Breadcrumb>
  );
}
