import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Drawer } from '../Drawer';

describe('Drawer', () => {
  it('renders closed without crashing', () => {
    render(<Drawer open={false} position="end" title="Title">Content</Drawer>);
    expect(document.body).toBeTruthy();
  });
});
