import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from './components/Star';
import Menu from './components/Menu/index';
import Badge from './components/Badges/Badge';

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
    </>
  )
}