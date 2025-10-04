import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Overview } from './pages/Overview';
import { Theming } from './pages/Theming';
import { ComponentsPage } from './pages/Components';
import { OrgProvider, ToggleButton, H1 } from '@org/ui';

export function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  return (
    <HashRouter>
      <OrgProvider theme={theme}>
        <Layout
          header={
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <H1 style={{ margin: 0 }}>@org/ui</H1>
              <ToggleButton onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
                Theme: {theme}
              </ToggleButton>
            </div>
          }
          sidebar={
            <nav style={{ display: 'grid', gap: 8 }}>
              <NavLink to="/">Overview</NavLink>
              <NavLink to="/theming">Theming</NavLink>
              <NavLink to="/components">Components</NavLink>
            </nav>
          }
        >
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/theming" element={<Theming />} />
            <Route path="/components" element={<ComponentsPage />} />
          </Routes>
        </Layout>
      </OrgProvider>
    </HashRouter>
  );
}
