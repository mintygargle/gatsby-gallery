import React from "react"
import PropTypes from "prop-types"
import { Menu, Grid } from 'semantic-ui-react'
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="app">
      {/* Top Menu */}
      <Menu fixed='top' inverted>
        <Menu.Item as='a' href="/" header>
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
          <Grid.Column width={4}>
            {/* Sidebar Menu */}
            <Menu pointing secondary vertical>
              <Menu.Item name='home' active />
              <Menu.Item name='Animals' />
              <Menu.Item name='Landscapes' />
            </Menu>
            {/* End of Sidebar Menu */}
          </Grid.Column>
          <Grid.Column width={12}>
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
