import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from 'reactstrap'

import { logo, burger, mail, line, oval, arrow } from '../../_assets'

class AdminNavbar extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  handleDeleteUser(id) {
    return e => this.props.deleteUser(id)
  }

  render() {
    const { user } = this.props

    const firstName = user.fullName
      .split(' ')
      .slice(0, -1)
      .join(' ')

    return (
      <Fragment>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span>
                      <img className="mr-3 mail" src={mail} />
                    </span>
                    <span>
                      <img className="mr-3 line" src={line} />
                    </span>
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="..." src={oval} />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mr-3 mb-0 text-sm font-weight-bold user">
                        {firstName}
                      </span>
                      <span>
                        <img className="arrow" src={arrow} />
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default AdminNavbar
