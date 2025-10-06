import React from 'react';
import { Card, H2, Stack, LoginPage, Text } from '@org/ui';
import { CodeBlock } from '../components/CodeBlock';

export function Templates() {
  return (
    <Stack direction="column" gap="24px">
      <H2>Templates</H2>
      <Card>
        <Text>LoginPage</Text>
        <LoginPage title="Sign in" subtitle="Use your work email" onSubmit={() => {}} />
        <CodeBlock code={`<LoginPage title=\"Sign in\" subtitle=\"Use your work email\" onSubmit={({ email, password }) => {}} />`} />
      </Card>
    </Stack>
  );
}
