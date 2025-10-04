import type { Preview } from 'storybook';
import React from 'react';
import { OrgProvider } from '@org/ui';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
    },
    defaultValue: 'light',
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'dark';
      return (
        <OrgProvider theme={theme}>
          <div style={{ padding: 16 }}>
            <Story />
          </div>
        </OrgProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
