import { Tab, TabList, type TabListProps } from '@fluentui/react-components';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type TabsProps = TabListProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
  tabs: Array<{ key: string; content: ReactNode; disabled?: boolean }>; 
};

export function Tabs({ vars, style, tabs, ...props }: TabsProps) {
  return (
    <TabList style={mergeStyleVars(style, vars)} {...props}>
      {tabs.map((t) => (
        <Tab key={t.key} value={t.key} disabled={t.disabled}>
          {t.content}
        </Tab>
      ))}
    </TabList>
  );
}
