import React from 'react';
import { Stack, Button, ToggleButton, Text } from '@org/ui';
import { Highlight, themes } from 'prism-react-renderer';

const code = `// Per-component CSS var override
<Button vars={{ '--org-radius-md': '20px' }}>Rounded</Button>

// Global Fluent token override
<OrgProvider fluentThemeOverrides={{ colorNeutralForeground1: 'rebeccapurple' }}>
  ...
</OrgProvider>`;

export function Theming() {
  return (
    <Stack direction="column" gap="16px">
      <Text>Use CSS variables via the \`vars\` prop or override Fluent tokens globally.</Text>
      <Stack gap="12px" align="center">
        <Button vars={{ '--org-radius-md': '20px' }}>Rounded</Button>
        <ToggleButton>Toggle</ToggleButton>
      </Stack>
      <Highlight theme={themes.github} code={code} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: 16, borderRadius: 8 }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Stack>
  );
}
