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
      </Menu>

      <Grid style={{ marginTop: '1em' }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu pointing secondary vertical>
              <Menu.Item name='home' active />
              <Menu.Item name='Animals' />
              <Menu.Item name='Landscapes' />
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <main>{children}</main>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
