import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../../_actions'
import { logo } from '../../_assets'
import { LoadingIndicator } from '../../components'

class LoginPage extends Component {
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
      <div className="container-fluids">
        <div className="row mx-0 align-items-center justify-content-center text-center row-container">
          <div className="col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4 px-4">
            <div className="row my-5">
              <div className="col">
                <img className="logo" src={logo} />
              </div>
            </div>
            <div className="row form-container">
              <div className="col px-xs-1 px-sm-2 px-md-3 px-lg-4 px-xl-5">
                <h2 className="mt-4 title">Log In</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                  <div
                    className={
                      'form-group' + (submitted && !email ? ' has-error' : '')
                    }
                  >
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    {submitted && !email && (
                      <div className="warning">Email is required</div>
                    )}
                  </div>
                  <div
                    className={
                      'form-group' +
                      (submitted && !password ? ' has-error' : '')
                    }
                  >
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {submitted && !password && (
                      <div className="warning">Password is required</div>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-6 text-left">
                      <label>
                        <input type="checkbox" /> Remember Me
                      </label>
                    </div>
                    <div className="col-6 text-right link">
                      <Link to="/reset">Forgot Password?</Link>
                    </div>
                  </div>

                  <div className="mt-4 form-group">
                    <button className="small login">
                      {loggingIn ? <LoadingIndicator /> : 'Log In'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row px-0 py-3">
              <div className="col px-0">
                <Link to="/register">
                  <button className="large">Create Account</button>
                </Link>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <p className="copyright">
                  Copyright 2019 Loyalti<span className="light">express</span>
                </p>
              </div>
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

const connectedLoginPage = connect(
  mapState,
  actionCreators
)(LoginPage)
export { connectedLoginPage as LoginPage }
