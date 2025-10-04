import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Stack } from '../Stack';

describe('Stack', () => {
  it('renders children', () => {
    render(
      <Stack>
        <button>One</button>
        <button>Two</button>
      </Stack>
    );
    expect(screen.getByRole('button', { name: /one/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /two/i })).toBeInTheDocument();
  });
});
