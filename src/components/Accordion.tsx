import { Accordion as FAccordion, AccordionItem, AccordionHeader, AccordionPanel, type AccordionProps as FAccordionProps } from '@fluentui/react-components';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type AccordionItemData = {
  value: string;
  header: ReactNode;
  content: ReactNode;
  disabled?: boolean;
};

export type AccordionProps = FAccordionProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
  items?: AccordionItemData[];
};

export function Accordion({ vars, style, items, children, ...props }: AccordionProps) {
  return (
    <FAccordion style={mergeStyleVars(style, vars)} {...props}>
      {items
        ? items.map((it) => (
            <AccordionItem key={it.value} value={it.value} disabled={it.disabled}>
              <AccordionHeader>{it.header}</AccordionHeader>
              <AccordionPanel>{it.content}</AccordionPanel>
            </AccordionItem>
          ))
        : children}
    </FAccordion>
  );
}
