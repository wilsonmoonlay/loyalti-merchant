import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../../_actions'
import { logo } from '../../_assets'
import { LoadingIndicator } from '../../components'

class ForgotPasswordPage extends Component {
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
              <h3 className="mt-4 reset-title">Forgot Password ?</h3>
              <p className="mt-3 mb-3 forgot-password-desc">
                Don't worry ! <br />
                Enter your email address below <br />
                We'll reset it for you
              </p>
              <form
                className="reset-form"
                name="form"
                onSubmit={this.handleSubmit}
              >
                <div
                  className={
                    'form-group' + (submitted && !email ? ' has-error' : '')
                  }
                >
                  <input
                    type="text"
                    className="reset-text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  {submitted && !email && (
                    <div className="warning">Email is required</div>
                  )}
                </div>

                <div className="mt-4 form-group">
                  <button className="mb-4 reset-button">
                    {loggingIn ? <LoadingIndicator /> : 'Reset Password'}
                  </button>
                  <Link to="/login" className="mb-4 btn btn-link">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="row pt-4 footer-row-wrapper">
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

const connectedForgotPasswordPage = connect(
  mapState,
  actionCreators
)(ForgotPasswordPage)
export { connectedForgotPasswordPage as ForgotPasswordPage }
