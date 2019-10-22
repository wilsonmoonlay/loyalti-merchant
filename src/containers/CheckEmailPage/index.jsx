import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../../_actions'
import { logo } from '../../_assets'
import { LoadingIndicator } from '../../components'

class CheckEmailPage extends Component {
  constructor(props) {
    super(props)

    // reset login status
    this.props.logout()

    this.state = {
      email: '',
      password: '',
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    const { email, password } = this.state
    if (email && password) {
      this.props.login(email, password)
    } else {
      alert('bukan login page')
    }
  }

  render() {
    const { loggingIn } = this.props
    const { email, password, submitted } = this.state
    return (
      <div className="row mx-0 align-items-center justify-content-center text-center row-container">
        <div className="col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4 px-4">
          <div className="row my-5 logo-row-wrapper">
            <div className="col">
              <img className="logo" src={logo} />
            </div>
          </div>
          <div className="row form-row-wrapper">
            <div className="col px-xs-1 px-sm-2 px-md-3 px-lg-4 px-xl-5">
              <h3 className="mt-4 reset-title">
                Please Check
                <br />
                Your Email
              </h3>
              <p className="mt-3 mb-3 forgot-password-desc">
                We sent an email to reset your password
              </p>
              <form
                className="reset-form"
                name="form"
                onSubmit={this.handleSubmit}
              >
                <div className="mt-4 form-group">
                  <button className="mb-4 reset-button">
                    {loggingIn ? <LoadingIndicator /> : 'Re-send Email'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row px-0 py-3 register-row-wrapper">
            <div className="col px-0">
              <Link to="/login">
                <button className="back-to-login-button">Back to Log In</button>
              </Link>
            </div>
          </div>
          <div className="row pt-3 footer-row-wrapper">
            <div className="col">
              <p className="copyright">
                Copyright 2019 Loyalti<span className="light">express</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication
  return { loggingIn }
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
}

const connectedCheckEmailPage = connect(
  mapState,
  actionCreators
)(CheckEmailPage)
export { connectedCheckEmailPage as CheckEmailPage }
