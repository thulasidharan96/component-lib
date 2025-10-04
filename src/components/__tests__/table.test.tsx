import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataTable } from '../Table';

type Row = { id: string; name: string };

describe('DataTable', () => {
  it('renders rows', () => {
    const items: Row[] = [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' }
    ];
    render(
      <DataTable<Row>
        items={items}
        columns={[
          { id: 'name', header: 'Name', cell: (r) => r.name }
        ]}
        getRowId={(r) => r.id}
      />
    );
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});
