import React from "react";
import { Link } from "gatsby"
import { Menu } from 'semantic-ui-react'

export default function SideMenu() {
  return (
    <Menu pointing secondary vertical >
      <Menu.Item
        name='Overview'
        as={Link}
        to="/"
        activeClassName="active"
      />
      <Menu.Item
        name='Animals'
        as={Link}
        to="/animals"
        activeClassName="active"
      />
      <Menu.Item
        name='Landscapes'
        as={Link}
        to="/landscapes"
        activeClassName="active"
      />
    </Menu >
  )
}
