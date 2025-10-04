import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Popover } from '../Popover';

// Smoke test only; Popover interactions are handled by Fluent

describe('Popover', () => {
  it('renders trigger without crashing', () => {
    render(
      <Popover content={<div>content</div>}>
        <button>Open</button>
      </Popover>
    );
    expect(document.body).toBeTruthy();
  });
});
