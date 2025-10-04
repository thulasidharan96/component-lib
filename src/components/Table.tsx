import { Table as FTable, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell, createTableColumn, type TableProps as FTableProps } from '@fluentui/react-components';
import type { CSSProperties, ReactNode } from 'react';
import { mergeStyleVars, type CSSVarValues } from '../utils/styleVars';

export type ColumnDef<T> = {
  id: string;
  header: ReactNode;
  cell: (item: T) => ReactNode;
  width?: number | string;
};

export type DataTableProps<T> = FTableProps & {
  vars?: CSSVarValues;
  style?: CSSProperties;
  items: T[];
  columns: ColumnDef<T>[];
  getRowId?: (item: T, index: number) => string | number;
};

export function DataTable<T>({ vars, style, items, columns, getRowId, ...props }: DataTableProps<T>) {
  const tableColumns = columns.map((c) =>
    createTableColumn<any>({
      columnId: c.id,
      renderHeaderCell: () => <>{c.header}</>,
      renderCell: (item) => <>{c.cell(item)}</>
    })
  );

  return (
    <FTable style={mergeStyleVars(style, vars)} {...props}>
      <TableHeader>
        <TableRow>
          {columns.map((c) => (
            <TableHeaderCell key={c.id} style={c.width ? { width: c.width } : undefined}>
              {c.header}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, idx) => (
          <TableRow key={String(getRowId ? getRowId(item, idx) : idx)}>
            {columns.map((c) => (
              <TableCell key={c.id}>{c.cell(item)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </FTable>
  );
}
