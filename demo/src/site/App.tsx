import React from 'react';
import {
  OrgProvider,
  Stack,
  Button,
  ToggleButton,
  Input,
  Textarea,
  Checkbox,
  Switch,
  Slider,
  RadioGroup,
  Avatar,
  Popover,
  Menu,
  Tabs,
  Card,
  Badge,
  Spinner,
  Progress,
  Tooltip,
  Dialog,
  DialogTrigger,
  DialogBox,
  Accordion,
  Combobox,
  Select,
  Field,
  Divider,
  Link,
  Skeleton,
  Toolbar,
  DataTable,
  Pagination,
  useNotify,
  Breadcrumbs,
  Drawer,
  H1,
  H2,
  H3,
  Subtle,
  Text,
  LoginPage,
} from '@org/ui';

export function App() {
  const notify = useNotify();
  const [open, setOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [page, setPage] = React.useState(2);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  return (
    <OrgProvider theme={theme}>
      <notify.Toaster />
      <div style={{ padding: 24 }}>
        <Stack direction="column" gap="24px">
          <H1>@org/ui Demo</H1>

          <Card>
            <H2>Theming</H2>
            <Stack gap="12px" align="center">
              <ToggleButton onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
                Theme: {theme}
              </ToggleButton>
              <Button vars={{ '--org-radius-md': '18px' }}>Radius via CSS var</Button>
            </Stack>
          </Card>

          <Card>
            <H2>Buttons</H2>
            <Stack gap="12px">
              <Button>Default</Button>
              <Button appearance="primary">Primary</Button>
              <ToggleButton>Toggle</ToggleButton>
              <Button onClick={() => notify.success('Saved', 'Your changes were saved.')}>Notify</Button>
            </Stack>
          </Card>

          <Card>
            <H2>Inputs</H2>
            <Stack direction="column" gap="12px">
              <Field label="Email" description="We won't share it">
                <Input placeholder="email@example.com" />
              </Field>
              <Field label="Message">
                <Textarea placeholder="Write here" />
              </Field>
              <Stack gap="12px">
                <Checkbox label="Accept" />
                <Switch labelPosition="after" />
              </Stack>
              <Slider min={0} max={100} defaultValue={40} />
              <RadioGroup options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} />
              <Combobox options={[{ key: 'ap', text: 'Apple' }, { key: 'bn', text: 'Banana' }]} defaultOpen />
              <Select options={[{ key: '1', text: 'One' }, { key: '2', text: 'Two' }]} defaultValue="1" />
            </Stack>
          </Card>

          <Card>
            <H2>Navigation</H2>
            <Tabs defaultSelectedValue="one" tabs={[{ key: 'one', content: 'Tab One' }, { key: 'two', content: 'Tab Two' }]} />
            <Accordion items={[{ value: 'a', header: 'Section A', content: 'Alpha' }, { value: 'b', header: 'Section B', content: 'Beta' }]} />
            <Breadcrumbs items={[{ key: 'home', text: 'Home' }, { key: 'prod', text: 'Products' }, { key: 'shoes', text: 'Shoes' }]} />
          </Card>

          <Card>
            <H2>Overlays</H2>
            <Stack gap="12px">
              <Popover content={<div>Popover content</div>}>
                <Button>Popover</Button>
              </Popover>
              <Menu items={[{ key: '1', text: 'Item 1' }]}>
                <Button>Menu</Button>
              </Menu>
              <Dialog open={open} onOpenChange={(_, d) => setOpen(d.open)}>
                <DialogTrigger>
                  <Button>Dialog</Button>
                </DialogTrigger>
              </Dialog>
              <DialogBox open={open} onOpenChange={setOpen} title="Confirm" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)}>
                Are you sure?
              </DialogBox>
              <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
              <Drawer open={drawerOpen} onOpenChange={(_, d) => setDrawerOpen(d.open)} title="Drawer">
                Drawer content
              </Drawer>
            </Stack>
          </Card>

          <Card>
            <H2>Display & Misc</H2>
            <Stack gap="12px" align="center">
              <Avatar name="Jane Doe" />
              <Badge>New</Badge>
              <Spinner />
              <Progress value={0.4} />
              <Tooltip content="Hello"><Button>Hover</Button></Tooltip>
              <Skeleton shape="rectangle" width={120} height={24} />
              <Link href="https://github.com" target="_blank">GitHub</Link>
              <Divider />
              <Toolbar items={[{ type: 'button', key: 'save', content: 'Save' }, { type: 'divider', key: 'd' }, { type: 'toggle', key: 'bold', content: 'Bold' }]} />
            </Stack>
            <Divider />
            <H3>Typography</H3>
            <Stack direction="column" gap="6px">
              <H1>Heading 1</H1>
              <H2>Heading 2</H2>
              <H3>Heading 3</H3>
              <Subtle>Subtle text</Subtle>
              <Text>Body text example</Text>
            </Stack>
          </Card>

          <Card>
            <H2>Table & Pagination</H2>
            <DataTable
              items={[{ id: '1', name: 'Alice' }, { id: '2', name: 'Bob' }]}
              columns={[{ id: 'name', header: 'Name', cell: (r: any) => r.name }]}
              getRowId={(r: any) => r.id}
            />
            <Pagination page={page} totalPages={5} onChange={setPage} />
          </Card>

          <Card>
            <H2>Template: LoginPage</H2>
            <LoginPage
              title="Sign in"
              subtitle="Use your work email"
              onSubmit={({ email, password }) => notify.info('Login submit', `${email}/${password}`)}
            />
          </Card>
        </Stack>
      </div>
    </OrgProvider>
  );
}
