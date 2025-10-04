import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OrgProvider } from '../../provider/OrgProvider';
import { Input } from '../Input';

describe('Input', () => {
  it('renders', () => {
    render(
      <OrgProvider>
        <Input placeholder="name" />
      </OrgProvider>
    );
    expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
  });

  it('applies vars', () => {
    render(
      <OrgProvider>
        <Input containerProps={{ 'data-testid': 'input-wrap' }} placeholder="email" vars={{ '--org-space-md': '24px' }} />
      </OrgProvider>
    );
    const wrapper = screen.getByTestId('input-wrap');
    expect(wrapper).toHaveStyle('--org-space-md: 24px');
  });
});
