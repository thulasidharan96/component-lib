## Components

This library provides a ready-to-use set of components built on Fluent UI v9. All components accept an optional `vars` prop for dynamic CSS variables and `style` for inline styles.

### Provider

- `OrgProvider`: Wrap your app, choose light/dark, override Fluent tokens.

```tsx
<OrgProvider theme="dark" fluentThemeOverrides={{ colorNeutralForeground1: '#7c3aed' }}>
  {/* app */}
</OrgProvider>
```

### Layout

- `Stack`: Flex layout with direction, gap, align, justify.
- `Card`: Content surface.

```tsx
<Stack direction="column" gap="16px">
  <Card>Surface</Card>
</Stack>
```

### Typography

- `Text`, `H1`, `H2`, `H3`, `Subtle`

```tsx
<H2>Heading</H2>
<Text>Body text</Text>
```

### Inputs

- `Input`, `Textarea`, `Checkbox`, `Switch`, `Slider`, `RadioGroup`, `Combobox`, `Select`, `Field`.

```tsx
<Field label="Email" description="We won't share it">
  <Input placeholder="email@example.com" />
</Field>

<Combobox options={[{ key: 'ap', text: 'Apple' }, { key: 'bn', text: 'Banana' }]} />
<Select options={[{ key: '1', text: 'One' }, { key: '2', text: 'Two' }]} />
```

### Buttons and indicators

- `Button`, `ToggleButton`, `Badge`, `Spinner`, `Progress`.

```tsx
<ToggleButton>Toggle</ToggleButton>
<Badge>New</Badge>
```

### Navigation and structure

- `Tabs`, `Accordion`, `Breadcrumbs`, `Divider`, `Link`.

```tsx
<Tabs defaultSelectedValue="one" tabs={[{ key: 'one', content: 'One' }, { key: 'two', content: 'Two' }]} />
<Accordion items={[{ value: 'a', header: 'A', content: 'Alpha' }]} />
```

### Overlays and menus

- `Dialog`, `DialogBox`, `Popover`, `Menu`, `Drawer`, `Tooltip`.

```tsx
<Popover content={<div>Info</div>}>
  <Button>Hover me</Button>
</Popover>

<DialogBox open={open} onOpenChange={setOpen} title="Confirm" onPrimary={confirm} onSecondary={cancel}>
  Proceed with action?
</DialogBox>
```

### Data display

- `DataTable` for simple tabular data.

```tsx
<DataTable
  items={[{ id: '1', name: 'Alice' }]}
  columns={[{ id: 'name', header: 'Name', cell: (r) => r.name }]}
  getRowId={(r) => r.id}
/>
```

### Toolbar

- `Toolbar` with items: button, toggle, divider.

```tsx
<Toolbar items=[
  { type: 'button', key: 'save', content: 'Save', onClick: onSave },
  { type: 'divider', key: 'd1' },
  { type: 'toggle', key: 'bold', content: 'Bold' }
] />
```

### Avatars

- `Avatar` for user presence and identity.

### Templates

- `LoginPage`: Opinionated login template with labels, forgot password, and submit handler.

```tsx
<LoginPage onSubmit={({ email, password }) => {/* handle */}} />
```

### Toasters

- `useNotify`: Simple toast helper with `Toaster` component returned by the hook.

```tsx
const notify = useNotify();
return (
  <>
    <notify.Toaster />
    <Button onClick={() => notify.success('Saved', 'Your changes were saved.')}>Save</Button>
  </>
);
```

### Theming and CSS variables

- Global tokens in `theme/tokens.ts` expose CSS variables.
- Pass `vars` per component to override at call site.

```tsx
<Button vars={{ '--org-radius-md': '20px' }}>Rounded</Button>
```

### Pagination

- `Pagination` for page navigation.

```tsx
<Pagination page={2} totalPages={10} onChange={setPage} />
```
