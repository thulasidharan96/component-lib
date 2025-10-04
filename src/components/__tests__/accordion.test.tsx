import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Accordion } from '../Accordion';

describe('Accordion', () => {
  it('renders items', () => {
    render(
      <Accordion items={[{ value: '1', header: 'H1', content: 'C1' }, { value: '2', header: 'H2', content: 'C2' }]} />
    );
    expect(screen.getByText('H1')).toBeInTheDocument();
    expect(screen.getByText('H2')).toBeInTheDocument();
  });
});
