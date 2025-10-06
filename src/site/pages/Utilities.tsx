import React from 'react';
import { Card, H2, Stack, Text } from '@org/ui';
import { CodeBlock } from '../components/CodeBlock';

export function Utilities() {
  return (
    <Stack direction="column" gap="24px">
      <H2>Utilities</H2>
      <Card>
        <Text>CSS variables helper</Text>
        <CodeBlock code={`// All components accept a 'vars' prop\n<Button vars={{ '--org-radius-md': '20px' }}>Rounded</Button>`} />
      </Card>
    </Stack>
  );
}
