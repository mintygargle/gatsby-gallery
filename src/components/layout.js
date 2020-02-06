import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Menu, Grid } from 'semantic-ui-react'
import "./layout.scss"

import SideMenu from "./sidemenu";

const Layout = ({ children }) => {

  return (
    <div className="app">
      {/* Top Menu */}
      <Menu fixed='top' inverted>
        <Menu.Item as={Link} to="/" header>
          Business Name
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item style={{ color: "gray" }} >
            © Copyright 2020
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {/* End of Top Menu */}

      <Grid style={{ marginTop: '1em' }}>
        <Grid.Column width={4}>
          <SideMenu />
        </Grid.Column>
        <Grid.Column width={12}>
          <main>{children}</main>
        </Grid.Column>
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
