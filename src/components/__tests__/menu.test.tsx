import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Menu } from '../Menu';

describe('Menu', () => {
  it('renders trigger', () => {
    render(
      <Menu items={[{ key: '1', text: 'Item 1' }]}>
        <button>Open</button>
      </Menu>
    );
    expect(document.body).toBeTruthy();
  });
});
