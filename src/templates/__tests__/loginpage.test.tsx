import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from '../LoginPage';

describe('LoginPage', () => {
  it('submits email and password', () => {
    const onSubmit = vi.fn();
    render(<LoginPage onSubmit={onSubmit} />);
    fireEvent.change(screen.getByPlaceholderText('email@example.com'), { target: { value: 'a@b.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'secret' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(onSubmit).toHaveBeenCalledWith({ email: 'a@b.com', password: 'secret' });
  });
});
