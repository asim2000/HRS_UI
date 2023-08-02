import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom/dist';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { removeJwt } from '../../utilities/jwt/jwt';
import { isAuthenticated } from '../../utilities/jwt/isAuthenticate';

export default function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    removeJwt()
    window.location.reload(true)
  }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
            <img width='50' src={require('../../assets/img/navbar-logo.png')} />
          </NavbarBrand>

          <NavbarToggler onClick={()=>toggle()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} onClick={() => navigate('/about')}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} onClick={() => navigate('/contact')}>Contact</NavLink>
              </NavItem>
              {
                isAuthenticated()
                  ?
                  <NavItem>
                    <NavLink style={{ cursor: "pointer" }} onClick={() => logout()}>Logout</NavLink>
                  </NavItem>
                  :
                    <NavItem style={{display:'inline-block'}}>
                      <NavLink style={{ cursor: "pointer",display:'inline-block'}} onClick={() => navigate('/login')}>Login</NavLink>
                      <NavLink style={{ cursor: "pointer",display:'inline-block'}} onClick={() => navigate('/select-register')}>Register</NavLink>
                    </NavItem>
              }


              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img style={{borderRadius:"50%",width:"30px"}} src={require('../../assets/img/avatar.jpg')}/>  Admin
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem onClick={()=>this.props.navigate('/logout')}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }