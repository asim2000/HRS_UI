import React, { useEffect, useState } from 'react';
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
import { getJwt, removeJwt } from '../../utilities/jwt/jwt';
import { isAuthenticated } from '../../utilities/jwt/isAuthenticate';
import '../../assets/css/dropdownicon.css'
import jwtDecode from 'jwt-decode';
import PersonService from '../../services/personService';
import alertify from 'alertifyjs';
export default function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState()
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    removeJwt()
    navigate('/')
  }
  useEffect(()=>{
    if(isAuthenticated()){
      const {sub} = jwtDecode(getJwt())
      const personService = new PersonService()
      personService.getById(sub)
      .then(result=>{
        setPerson(result.data)
        console.log(result.data)
      }).catch(error=>{
        alertify.error(error.message)
      })
    }
  },[])
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
            <img width='50' src={require('../../assets/img/navbar-logo.png')} />
          </NavbarBrand>

          <NavbarToggler onClick={()=>toggle()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav style={{display: 'flex',alignItems:'center',justifyContent:'center'}} className="ms-auto" navbar>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} onClick={() => navigate('/about')}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: "pointer",marginRight:'40px' }} onClick={() => navigate('/contact')}>Contact</NavLink>
              </NavItem>
              {
                isAuthenticated() && person
                  ?
                    <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                {person.name+' '+person.surname} &nbsp; <img width='40' height='40' style={{borderRadius:'50%'}} src={require(`../../assets/img/${person?.image==null?'avatar.jpg':person.image}`)}/> 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem onClick={()=>logout()}>
                    Logout
                  {/* <NavLink style={{ cursor: "pointer" }} onClick={() => logout()}>Logout</NavLink> */}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                  :
                    <NavItem style={{display:'inline-block'}}>
                      <NavLink style={{ cursor: "pointer",display:'inline-block'}} onClick={() => navigate('/login')}>Login</NavLink>
                      <NavLink style={{ cursor: "pointer",display:'inline-block'}} onClick={() => navigate('/select-register')}>Register</NavLink>
                    </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }