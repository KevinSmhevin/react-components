import React from 'react';
import { CiCirclePlus } from "react-icons/ci";

import Star from './components/Star';
import Menu from './components/Menu/index';
import Badge from './components/Badges/Badge';
import Banner from './components/Banners/Banner';
import Card from './components/Card/index';
import TestimonialWithImage from './components/Testimonial/TestimonialWithImage';
import TestimonialWithoutImage from './components/Testimonial/TestimonialWithoutImage';
import testimonialImage from './assets/testimonial/stock.png';

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
    </>
  )
}