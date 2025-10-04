import React, { PropsWithChildren, ReactNode } from 'react';

export function Layout({ header, sidebar, children }: PropsWithChildren<{ header: ReactNode; sidebar: ReactNode }>) {
  return (
    <div style={{ display: 'grid', gridTemplateRows: '56px 1fr', gridTemplateColumns: '240px 1fr', minHeight: '100dvh' }}>
      <header style={{ gridColumn: '1 / span 2', display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid #e5e7eb' }}>
        {header}
      </header>
      <aside style={{ padding: 16, borderRight: '1px solid #e5e7eb' }}>{sidebar}</aside>
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
