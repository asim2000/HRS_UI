import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  DropdownItem } from 'reactstrap';

class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{cursor:"pointer"}} onClick={()=>this.props.navigate('/')}>
           <img width='50' src={require('../../assets/img/navbar-logo.png')}/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{cursor:"pointer"}} onClick={()=>this.props.navigate('/login')}>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{cursor:"pointer"}} onClick={()=>this.props.navigate('/register')}>Register</NavLink>
              </NavItem>
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
}
export function NaviWithNavigate(props){
  const navigate = useNavigate()
  return (<Navi navigate = {navigate}/>)
}

export default Navi;