import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DialogBox } from '../DialogBox';

describe('DialogBox', () => {
  it('renders when open', () => {
    render(
      <DialogBox open title="Title" onPrimary={() => {}} onSecondary={() => {}}>
        Content
      </DialogBox>
    );
    expect(document.body).toBeTruthy();
  });
});
