import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

import Star from './components/Star';
import Menu from './components/Menu/index';
import Badge from './components/Badges/Badge';
import Banner from './components/Banners/Banner';
import Card from './components/Card/index';
import Tooltip from './components/Tooltips/Tooltip';
import TestimonialWithImage from './components/Testimonial/TestimonialWithImage';
import TestimonialWithoutImage from './components/Testimonial/TestimonialWithoutImage';
import testimonialImage from './assets/testimonial/stock.png';
import Button from './components/Button/Button';

export default function App() {
  return (
    <>
        <h1>React Components</h1>

        <hr></hr>

        <h3>Star Component</h3>
        <Star />
        <p>Like this page</p>

        <hr></hr>

        <h3>Menu Component</h3>
        <Menu onOpen={() => console.log("Opened/closed")}>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        
        <hr></hr>

        <h3>Badge Component</h3>
        <Badge>Medium</Badge>
        <Badge shape="pill" size="small">Small</Badge>
        <Badge size="large">Large</Badge>
        <Badge shape="pill">Pill</Badge>
        <Badge color="red">Red</Badge>
        <Badge color="green" shape="pill" size="large">Green Large Pill</Badge>

        <hr></hr>

        <h3>Banner Component</h3>
        <Banner status="success">
            <h1>Success</h1>
            <p>This is a success banner.</p>
        </Banner>
        <Banner status="warning">
            <p>This is a warning banner.</p>
        </Banner>
        <Banner status="error">
            <h1>Error</h1>
            <p>This is an error banner.</p>
        </Banner>
        <Banner status="neutral">
            <h1>Info</h1>
        </Banner>

        <hr></hr>

        <h3>Card Component</h3>

        <Card>
          <Card.Icon color="red">
          </Card.Icon>
          <Card.Content>
            <h2>Card Title</h2>
            <p>This is a sample card component.</p>
          </Card.Content>
        </Card>

        <Card>
          <Card.Icon>
            <CiCirclePlus />
          </Card.Icon>

          <Card.Content>
            <h2>Card Title</h2>
            <p>This is a sample card component.</p>
          </Card.Content>
        </Card>

        <hr></hr>

        <h3>Testimonial Component</h3>
        <TestimonialWithImage img={testimonialImage} name="John Doe" title="Software Engineer">
          <p>This is a sample testimonial with image component.</p>
        </TestimonialWithImage>
        <TestimonialWithoutImage icon={<CiCirclePlus />} company="Company Name" name="John Doe" title="Software Engineer">
          <p>This is a sample testimonial without image component.</p>
        </TestimonialWithoutImage>

        <hr></hr>

        <h3>Tooltip Component</h3>
        <p>Click the buttons below to see different tooltip variants:</p>
        <TooltipDemo />
    </>
  )
}

function TooltipDemo() {
  const [openTooltips, setOpenTooltips] = useState({
    blackBold: false,
    blackLight: false,
    blueBold: false,
    blueLight: false,
    magentaBold: false,
    magentaLight: false,
    greenBold: false,
    greenLight: false,
  });

  const tooltips = [
    { key: 'blackBold', color: 'black', style: 'bold', label: 'Black Bold' },
    { key: 'blackLight', color: 'black', style: 'light', label: 'Black Light' },
    { key: 'blueBold', color: 'blue', style: 'bold', label: 'Blue Bold' },
    { key: 'blueLight', color: 'blue', style: 'light', label: 'Blue Light' },
    { key: 'magentaBold', color: 'magenta', style: 'bold', label: 'Magenta Bold' },
    { key: 'magentaLight', color: 'magenta', style: 'light', label: 'Magenta Light' },
    { key: 'greenBold', color: 'green', style: 'bold', label: 'Green Bold' },
    { key: 'greenLight', color: 'green', style: 'light', label: 'Green Light' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '600px', marginTop: '1rem' }}>
      {tooltips.map(({ key, color, style, label }) => (
        <div key={key}>
          <Button onClick={() => setOpenTooltips(prev => ({ ...prev, [key]: true }))}>
            {label}
          </Button>
          {openTooltips[key] && (
            <Tooltip
              title="Archive notes"
              color={color}
              style={style}
              isOpen={openTooltips[key]}
              onClose={() => setOpenTooltips(prev => ({ ...prev, [key]: false }))}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
            </Tooltip>
          )}
        </div>
      ))}
    </div>
  );
}