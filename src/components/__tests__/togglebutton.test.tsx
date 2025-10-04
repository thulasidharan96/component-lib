import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleButton } from '../ToggleButton';

describe('ToggleButton', () => {
  it('toggles pressed', () => {
    render(<ToggleButton>On</ToggleButton>);
    const btn = screen.getByRole('button', { name: 'On' });
    expect(btn).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-pressed', 'true');
  });
});
