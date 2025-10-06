import React from 'react';
import { H2, Text, Stack, Button, Card } from '@org/ui';

export function Overview() {
  return (
    <Stack direction="column" gap="16px">
      <H2>Overview</H2>
      <Text>
        @org/ui is a TypeScript React component library built on Fluent UI v9, with dynamic CSS
        variables theming and a clean API suitable for large-scale organizations.
      </Text>
      <Card>
        <Stack gap="12px">
          <Button>Default</Button>
          <Button appearance="primary">Primary</Button>
        </Stack>
      </Card>
    </Stack>
  );
}
