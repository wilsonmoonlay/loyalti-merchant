// @ts-nocheck
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// reactstrap components
import { Container } from 'reactstrap'

import { userActions } from '../../_actions'
import { logo, burger, mail, line, oval, arrow } from '../../_assets'

class HomePage extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  handleDeleteUser(id) {
    return e => this.props.deleteUser(id)
  }

  render() {
    const { user, users } = this.props

    const firstName = user.fullName
      .split(' ')
      .slice(0, -1)
      .join(' ')

    return (
      <Fragment>
        <aside>Sidebar</aside>
        <div className="main-content" ref="mainContent">
          <nav>Admin NavBars</nav>
          <section>Content</section>
          <Container fluid>
            <footer>footer</footer>
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
