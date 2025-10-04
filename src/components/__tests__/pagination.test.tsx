import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('clicks through pages', () => {
    const onChange = vi.fn();
    render(<Pagination page={2} totalPages={3} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    expect(onChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(onChange).toHaveBeenCalledWith(3);
  });
});
