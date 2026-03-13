## React Components

Reusable React UI components (Badge, Banner, Card, Menu, Tooltip, Testimonial, Popup, etc.) built with Vite and React.

### Getting started

- **Install dependencies**

```bash
cd react-components
npm install
```

- **Run the dev server**

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`) – open it in your browser to see the demo page that showcases all components.

- **Build for production (optional)**

```bash
npm run build
```

### Project structure

- **App/demo app**: `react-components/src/App.jsx`
- **Components**: `react-components/src/components/*`

The demo `App.jsx` imports and renders all components, so it is a good reference for usage.

### Using the components in your own code

Assuming you are working inside the Vite app (`react-components` folder), you can import the components with relative paths:

- **Star**

```jsx
import Star from "./components/Star";

function Example() {
  return <Star />;
}
```

- **Menu (compound component)**

```jsx
import Menu from "./components/Menu";

function Example() {
  return (
    <Menu onOpen={() => console.log("Opened/closed")}>
      <Menu.Button>Menu</Menu.Button>
      <Menu.Dropdown>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```

- **Badge**

```jsx
import Badge from "./components/Badges/Badge";

function Example() {
  return (
    <>
      <Badge>Medium</Badge>
      <Badge shape="pill" size="small">
        Small
      </Badge>
      <Badge color="green" shape="pill" size="large">
        Green Large Pill
      </Badge>
    </>
  );
}
```

- **Banner**

```jsx
import Banner from "./components/Banners/Banner";

function Example() {
  return (
    <>
      <Banner status="success">
        <h1>Success</h1>
        <p>This is a success banner.</p>
      </Banner>
      <Banner status="warning">
        <p>This is a warning banner.</p>
      </Banner>
    </>
  );
}
```

- **Card (compound component)**

```jsx
import Card from "./components/Card";
import { CiCirclePlus } from "react-icons/ci";

function Example() {
  return (
    <Card>
      <Card.Icon>
        <CiCirclePlus />
      </Card.Icon>
      <Card.Content>
        <h2>Card Title</h2>
        <p>This is a sample card component.</p>
      </Card.Content>
    </Card>
  );
}
```

- **Tooltip**

```jsx
import Tooltip from "./components/Tooltips/Tooltip";
import Button from "./components/Button/Button";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show tooltip</Button>
      {open && (
        <Tooltip
          title="Archive notes"
          color="blue"
          style="bold"
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <p>Tooltip content goes here.</p>
        </Tooltip>
      )}
    </>
  );
}
```

- **Popup**

```jsx
import Popup from "./components/Popups/Popup";
import Button from "./components/Button/Button";

function Example() {
  const [count, setCount] = useState(0);
  const show = () => setCount((c) => c + 1);
  const hide = () => setCount(0);

  return (
    <>
      <Button onClick={show}>Show success popup</Button>
      {count > 0 && (
        <Popup key={count} title="Success" style="success" onClose={hide}>
          Your work has been saved.
        </Popup>
      )}
    </>
  );
}
```

### Dependencies

- **Runtime**: `react`, `react-dom`, `react-icons`
- **Styling helpers**: `classnames`

When using these components in another project, make sure those dependencies are installed.

