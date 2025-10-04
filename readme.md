# @org/ui

Organization React component library built on Fluent UI v9, with CSS variables theming and dynamic per-instance overrides.

## Install

```bash
npm install @org/ui @fluentui/react-components react react-dom
```

## Quick start

```tsx
import { OrgProvider, Button, Stack } from '@org/ui';

export default function App() {
  return (
    <OrgProvider theme="light">
      <Stack gap="16px">
        <Button>Default</Button>
        <Button appearance="primary">Primary</Button>
        <Button vars={{ '--org-radius-md': '20px' }}>Rounded</Button>

        <Input placeholder="email" />
        <Checkbox label="Accept" />
        <Switch labelPosition="after" />
        <Textarea placeholder="message" />

        <RadioGroup options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} />

        <Slider min={0} max={100} defaultValue={50} />
        <Avatar name="Jane Doe" />

        <Popover content={<div>Hello</div>}>
          <Button>Popover</Button>
        </Popover>

        <Menu items={[{ key: '1', text: 'Item 1' }]}>
          <Button>Menu</Button>
        </Menu>

        <Tabs defaultSelectedValue="one" tabs={[{ key: 'one', content: 'One' }, { key: 'two', content: 'Two' }]} />

        <Card>Card content</Card>
        <Badge>New</Badge>
        <Spinner />
        <Progress value={0.4} />
      </Stack>
    </OrgProvider>
  );
}
```

## Theming

- Global CSS variables (defaults):
  - `--org-color-primary`, `--org-color-primary-text`
  - `--org-color-surface`, `--org-color-surface-text`
  - `--org-color-critical`, `--org-color-warning`, `--org-color-success`
  - `--org-radius-sm|md|lg|full`
  - `--org-space-xs|sm|md|lg|xl`

Override them globally in your app root or per component via the `vars` prop.

```tsx
<Button vars={{ '--org-radius-md': '24px' }}>Big radius</Button>
```

You can also override Fluent UI theme tokens via `OrgProvider`:

```tsx
<OrgProvider fluentThemeOverrides={{ colorNeutralForeground1: 'rebeccapurple' }}>
  ...
</OrgProvider>
```

## Testing

- Vitest + jsdom + React Testing Library are configured.
- Run tests:

```bash
npm test
```

## Publish to npm

1. Ensure version is updated in `package.json`.
2. Login: `npm login`
3. Build: `npm run build`
4. Publish: `npm publish --access public`

Recommended: enable 2FA on your npm account.

## Development

- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`

## License

MIT
