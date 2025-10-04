import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Combobox } from '../Combobox';

describe('Combobox', () => {
  it('renders options when open', () => {
    render(<Combobox defaultOpen options={[{ key: 'a', text: 'A' }, { key: 'b', text: 'B' }]} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});
