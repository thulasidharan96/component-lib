import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders items', () => {
    render(<Breadcrumbs items={[{ key: 'h', text: 'Home' }, { key: 'p', text: 'Products' }]} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
