import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Menu, Grid } from 'semantic-ui-react'
import "./layout.scss"

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
        <Grid.Row>
          <Grid.Column mobile={4} computer={2}>
            {/* Sidebar Menu */}
            <Menu pointing secondary vertical>
              <Menu.Item name='Overview' active as={Link} to="/" />
              <Menu.Item name='Animals' as={Link} to="/animals" />
              <Menu.Item name='Landscapes' as={Link} to="/landscapes" />
            </Menu>
            {/* End of Sidebar Menu */}
          </Grid.Column>
          <Grid.Column mobile={12} computer={14}>
            {/* Page Content */}
            <main>{children}</main>
          </Grid.Column>
          {/* End of Page Content */}
        </Grid.Row>
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
