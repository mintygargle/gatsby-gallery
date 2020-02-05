import React from "react"
import PropTypes from "prop-types"
import { Container, Menu, } from 'semantic-ui-react'
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="app">
      <Menu fixed='top' inverted>
        <Menu.Item as='a' header>
          Business Name
        </Menu.Item>
      </Menu>
      <Container style={{ marginTop: '4em' }}>
        <main>{children}</main>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
