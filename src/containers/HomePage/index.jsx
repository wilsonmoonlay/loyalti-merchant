// @ts-nocheck
import React, { Component, Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// reactstrap components
import { Container } from 'reactstrap'

import { AdminNavbar, AdminFooter, Sidebar } from '../../components'

import routes from '../../routes.js'

import { userActions } from '../../_actions'
import { logo, burger, mail, line, oval, arrow } from '../../_assets'

class HomePage extends Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.mainContent.scrollTop = 0
  }

  componentDidMount() {
    this.props.getUsers()
  }

  handleDeleteUser(id) {
    return e => this.props.deleteUser(id)
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />
    })
  }

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (this.props.location.pathname.indexOf(routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return 'Brand'
  }

  render() {
    const { user, users } = this.props

    const firstName = user.fullName
      .split(' ')
      .slice(0, -1)
      .join(' ')

    return (
      <Fragment>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: '/admin/index',
            imgSrc: oval,
            imgAlt: '...',
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </Fragment>
    )
  }
}

function mapState(state) {
  const { users, authentication } = state
  const { user } = authentication
  return { user, users }
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
}

const connectedHomePage = connect(
  mapState,
  actionCreators
)(HomePage)
export { connectedHomePage as HomePage }
