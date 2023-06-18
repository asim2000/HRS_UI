import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div style={{height:"100vh",position:"fixed"}}>
         <Nav style={{width:"200px",height:"100vh"}} className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <NavItem>
                <NavLink href="/home">Active</NavLink>
            </NavItem>
            <NavItem>
                <NavLink eventKey="link-1">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink eventKey="link-2">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink eventKey="disabled" disabled>
                Disabled
                </NavLink>
            </NavItem>
            </Nav>
      </div>
      </div>
    )
  }
}
