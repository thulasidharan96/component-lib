import React from 'react';
import {
  Stack, Card, Field, Input, Textarea, Checkbox, Switch, Slider, RadioGroup,
  Combobox, Select, Button, ToggleButton, Avatar, Badge, Spinner, Progress, Tooltip,
  Tabs, Accordion, Breadcrumbs, Link, Divider, Skeleton, Toolbar, Popover, Menu, Dialog, DialogTrigger, DialogBox,
  DataTable, Pagination, Drawer, H2, H3, Subtle, Text, Header, Navbar, Footer, Form, FormRow, FormActions,
} from '@org/ui';
import { AspectRatio, HoverCard, Label, ScrollArea, Separator, Sheet, AlertDialog } from '@org/ui';
import { CodeBlock } from '../components/CodeBlock';

export function ComponentsPage() {
  const [open, setOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);

  return (
    <Stack direction="column" gap="24px">
      <Card>
        <H2>Layout: Header, Navbar, Footer</H2>
        <Header logo={<div style={{ width: 28, height: 28, borderRadius: 6, background: '#fff' }} />} left={<Text>Logo</Text>} center={<Text>Title</Text>} right={<Button>Action</Button>} />
        <Navbar items={[{ key: 'home', content: 'Home' }, { key: 'docs', content: 'Docs' }, { key: 'about', content: 'About' }]} />
        <div style={{ padding: 12 }}>Page content here</div>
        <Footer left={<Text>© 2025</Text>} center={<Text>Center</Text>} right={<Text>v0.1.0</Text>} />
        <CodeBlock code={`<Header left={<Text>Logo</Text>} center={<Text>Title</Text>} right={<Button>Action</Button>} />\n<Navbar items={[{ key: 'home', content: 'Home' }]} />\n<Footer left={<Text>© 2025</Text>} right={<Text>v0.1.0</Text>} />`} />
      </Card>

      <Card>
        <H2>Forms</H2>
        <Form onSubmit={(e) => { e.preventDefault(); }}>
          <FormRow label={<Field label="Email" />} input={<Input placeholder="email@example.com" />} />
          <FormRow label={<Field label="Password" />} input={<Input type="password" placeholder="••••••" />} />
          <FormActions>
            <Button appearance="primary" type="submit">Submit</Button>
            <Button type="reset">Reset</Button>
          </FormActions>
        </Form>
      </Card>
      <Card>
        <H2>Buttons</H2>
        <Stack gap="12px">
          <Button>Default</Button>
          <Button appearance="primary">Primary</Button>
          <ToggleButton>Toggle</ToggleButton>
        </Stack>
        <CodeBlock code={`<Button>Default</Button>\n<Button appearance=\"primary\">Primary</Button>\n<ToggleButton>Toggle</ToggleButton>`} />
      </Card>

      <Card>
        <H2>Inputs</H2>
        <Stack direction="column" gap="12px">
          <Field label="Email"><Input placeholder="email@example.com" /></Field>
          <Field label="Message"><Textarea placeholder="Write here" /></Field>
          <Stack gap="12px"><Checkbox label="Accept" /><Switch labelPosition="after" /></Stack>
          <Slider min={0} max={100} defaultValue={40} />
          <RadioGroup options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} />
          <Combobox options={[{ key: 'ap', text: 'Apple' }, { key: 'bn', text: 'Banana' }]} defaultOpen />
          <Select options={[{ key: '1', text: 'One' }, { key: '2', text: 'Two' }]} defaultValue="1" />
        </Stack>
        <CodeBlock code={`<Field label=\"Email\"><Input placeholder=\"email@example.com\" /></Field>\n<Field label=\"Message\"><Textarea /></Field>\n<Checkbox label=\"Accept\" /> <Switch labelPosition=\"after\" />\n<Slider min={0} max={100} defaultValue={40} />\n<RadioGroup options={[{ value: 'a', label: 'A' }]} />\n<Combobox options={[{ key: 'ap', text: 'Apple' }]} />\n<Select options={[{ key: '1', text: 'One' }]} />`} />
      </Card>

      <Card>
        <H2>Navigation</H2>
        <Tabs defaultSelectedValue="one" tabs={[{ key: 'one', content: 'Tab One' }, { key: 'two', content: 'Tab Two' }]} />
        <Accordion items={[{ value: 'a', header: 'Section A', content: 'Alpha' }, { value: 'b', header: 'Section B', content: 'Beta' }]} />
        <Breadcrumbs items={[{ key: 'home', text: 'Home' }, { key: 'prod', text: 'Products' }]} />
        <CodeBlock code={`<Tabs defaultSelectedValue=\"one\" tabs={[{ key: 'one', content: 'Tab One' }]} />\n<Accordion items={[{ value: 'a', header: 'A', content: 'Alpha' }]} />\n<Breadcrumbs items={[{ key: 'home', text: 'Home' }]} />`} />
      </Card>

      <Card>
        <H2>Overlays & Menus</H2>
        <Stack gap="12px">
          <Popover content={<div>Popover content</div>}><Button>Popover</Button></Popover>
          <Menu items={[{ key: '1', text: 'Item 1' }]}><Button>Menu</Button></Menu>
          <Dialog open={open} onOpenChange={(_, d) => setOpen(d.open)}>
            <DialogTrigger><Button>Dialog</Button></DialogTrigger>
          </Dialog>
          <DialogBox open={open} onOpenChange={setOpen} title="Confirm" onPrimary={() => setOpen(false)} onSecondary={() => setOpen(false)}>
            Are you sure?
          </DialogBox>
          <Button onClick={() => setAlertOpen(true)}>AlertDialog</Button>
          <AlertDialog open={alertOpen} onOpenChange={setAlertOpen} title="Heads up" description="Important action required" onAction={() => setAlertOpen(false)} />
          <Button onClick={() => setDrawerOpen(true)}>Drawer</Button>
          <Drawer open={drawerOpen} onOpenChange={(_, d) => setDrawerOpen(d.open)} title="Drawer">Content</Drawer>
          <Button onClick={() => setSheetOpen(true)}>Sheet</Button>
          <Sheet open={sheetOpen} onOpenChange={(_, d) => setSheetOpen(d.open)} position="end">Right side sheet</Sheet>
        </Stack>
        <CodeBlock code={`<Popover content={<div>...</div>}><Button>Popover</Button></Popover>\n<Menu items={[{ key: '1', text: 'Item 1' }]}><Button>Menu</Button></Menu>\n<DialogBox open={open} onOpenChange={setOpen} title=\"Confirm\">...</DialogBox>\n<AlertDialog open={alertOpen} onOpenChange={setAlertOpen} title=\"Heads up\" />\n<Drawer open={drawerOpen} onOpenChange={...} title=\"Drawer\">...</Drawer>\n<Sheet open={sheetOpen} onOpenChange={...} position=\"end\">...</Sheet>`} />
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
          <HoverCard content={<div>Extra info</div>}><Button>HoverCard</Button></HoverCard>
          <Separator />
          <Link href="https://github.com" target="_blank">GitHub</Link>
          <Divider />
          <Toolbar items={[{ type: 'button', key: 'save', content: 'Save' }, { type: 'divider', key: 'd' }, { type: 'toggle', key: 'bold', content: 'Bold' }]} />
        </Stack>
        <Divider />
        <H3>Typography</H3>
        <Stack direction="column" gap="6px">
          <Subtle>Subtle text</Subtle>
          <Text>Body text example</Text>
        </Stack>
        <CodeBlock code={`<Avatar name=\"Jane Doe\" />\n<Badge>New</Badge>\n<Spinner />\n<Progress value={0.4} />\n<Tooltip content=\"Hello\"><Button>Hover</Button></Tooltip>\n<Skeleton shape=\"rectangle\" width={120} height={24} />`} />
      </Card>

      <Card>
        <H2>Data & Pagination</H2>
        <DataTable
          items={[{ id: '1', name: 'Alice' }, { id: '2', name: 'Bob' }]}
          columns={[{ id: 'name', header: 'Name', cell: (r: any) => r.name }]}
          getRowId={(r: any) => r.id}
        />
        <Pagination page={page} totalPages={5} onChange={setPage} />
        <CodeBlock code={`<DataTable items={[{ id: '1', name: 'Alice' }]} columns={[{ id: 'name', header: 'Name', cell: (r) => r.name }]} getRowId={(r) => r.id} />\n<Pagination page={page} totalPages={5} onChange={setPage} />`} />
      </Card>
    </Stack>
  );
}
