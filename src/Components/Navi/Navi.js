import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import * as loggedInUserActions from '../../redux/actions/loggedInUserAction'
import { useDispatch, useSelector } from 'react-redux';
import PersonService from '../../services/personService';
import alertify from 'alertifyjs';
import { setUserRoles } from '../../redux/actions/userRolesAction';
export default function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = useSelector(state => state.loggedInUserReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [sub, setSub] = useState()
  const [roles, setRoles] = useState([])
 
  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    removeJwt()
    dispatch(loggedInUserActions.setLoggedInUser(null))
    dispatch(setUserRoles(null))
    navigate('/')
  }

  useEffect(() => {
    if (isAuthenticated()) {
      const {sub,roles} = jwtDecode(getJwt())
      setSub(sub)
      setRoles(Array.from(roles))
      const personService = new PersonService()
      personService.getById(sub)
        .then(result => {
          dispatch(loggedInUserActions.setLoggedInUser(result.data))
        }).catch(error => {
          alertify.error(error.message)
        })
    }
  }, [])
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
          <img width='50' src={require('../../assets/img/navbar-logo.png')} />
        </NavbarBrand>

        <NavbarToggler onClick={() => toggle()} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="ms-auto" navbar>
            <NavItem>
              <NavLink style={{ cursor: "pointer" }} onClick={() => navigate('/about')}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ cursor: "pointer", marginRight: '40px' }} onClick={() => navigate('/contact')}>Contact</NavLink>
            </NavItem>
            {
              isAuthenticated() && loggedInUser
                ?
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {loggedInUser.name + ' ' + loggedInUser.surname} &nbsp; <img width='40' height='40' style={{ borderRadius: '50%' }} src={require(`../../assets/img/${loggedInUser?.image == null ? 'avatar.jpg' : loggedInUser.image}`)} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem divider />
                    {(() => {
                      if (roles.includes('admin')) {
                        return (
                          <div>
                            <DropdownItem onClick={() => navigate('/admin/hotel-service/list')}>Hotel service</DropdownItem>

                            <DropdownItem onClick={() => navigate('/admin/room-item/list')}>Room item</DropdownItem>
                            <DropdownItem divider />
                          </div>
                        )
                      }
                      if (roles.includes('customer')) {
                        return (
                          <div>
                            <DropdownItem onClick={() => navigate(`/customer/${loggedInUser.id}/booking-history`)}>Booking history</DropdownItem>
                            <DropdownItem divider />
                          </div>
                        )
                      }
                      if (roles.includes('hotel')) {
                        return (
                          <div>
                            <DropdownItem onClick={() => navigate(`/hotel/admin/${loggedInUser.id}`)}>Home</DropdownItem>
                            <DropdownItem divider />
                          </div>
                        )
                      }
                      if (roles.includes('broker')) {
                        return (
                          <div>
                            <DropdownItem onClick={() => navigate(`/broker/${loggedInUser.id}/BookingHistory`)}>Booking history</DropdownItem>
                            <DropdownItem divider />
                          </div>
                        )
                      }

                      return null;
                    })()}
                    <DropdownItem onClick={() => logout()}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                :
                <NavItem style={{ display: 'inline-block' }}>
                  <NavLink style={{ cursor: "pointer", display: 'inline-block' }} onClick={() => navigate('/login')}>Login</NavLink>
                  <NavLink style={{ cursor: "pointer", display: 'inline-block' }} onClick={() => navigate('/select-register')}>Register</NavLink>
                </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}