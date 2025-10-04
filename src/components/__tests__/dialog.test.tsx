import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { OrgProvider } from '../../provider/OrgProvider';
import { Dialog, DialogTrigger } from '../Dialog';

// Smoke test for rendering structure

describe('Dialog', () => {
  it('renders without crashing', () => {
    render(
      <OrgProvider>
        <Dialog>
          <DialogTrigger>
            <button>Open</button>
          </DialogTrigger>
          <div>Content</div>
        </Dialog>
      </OrgProvider>
    );
    expect(document.body).toBeTruthy();
  });
});
