// @ts-nocheck
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
      <div className="container-fluid sm-background">
        <div className="row p-4 justify-content-center">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img className="mr-3 logo small" src={logo} />
            <img className="burger" src={burger} />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right">
            <img className="mr-3 mail" src={mail} />
            <img className="mr-3 line" src={line} />
            <img className="mr-3 oval" src={oval} />
            <span className="mr-3 user">{firstName}</span>
            <img className="arrow" src={arrow} />
          </div>
        </div>
        <div className="row p-4">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            Sidebar will be here
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            Charts and other content data will be here
          </div>
        </div>
      </div>
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
