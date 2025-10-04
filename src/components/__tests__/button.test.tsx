import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OrgProvider } from '../../provider/OrgProvider';
import { Button } from '../Button';

describe('Button', () => {
  it('renders text', () => {
    render(
      <OrgProvider>
        <Button>Click me</Button>
      </OrgProvider>
    );
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('accepts dynamic css vars', () => {
    render(
      <OrgProvider>
        <Button vars={{ '--org-radius-md': '20px' }}>Vars</Button>
      </OrgProvider>
    );
    const btn = screen.getByRole('button', { name: /vars/i });
    expect(btn).toHaveStyle('--org-radius-md: 20px');
  });
});
