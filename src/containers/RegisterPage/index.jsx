import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../../_actions'
import { logo } from '../../_assets'
import { LoadingIndicator } from '../../components'

class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        fullName: '',
        phone: '',
        email: '',
        password: '',
      },
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({ submitted: true })
    const { user } = this.state
    if (user.fullName && user.phone && user.email && user.password) {
      this.props.register(user)
    }
  }

  render() {
    const { registering } = this.props
    const { user, submitted } = this.state
    return (
      <div className="row mx-0 align-items-center justify-content-center text-center row-container">
        <div className="col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4 px-4">
          <div className="row my-5">
            <div className="col">
              <img className="logo" src={logo} />
            </div>
          </div>
          <div className="row form-container">
            <div className="col px-xs-1 px-sm-2 px-md-3 px-lg-4 px-xl-5">
              <h2 className="mt-4 title">Register</h2>
              <form name="form" onSubmit={this.handleSubmit}>
                <div
                  className={
                    'form-group' +
                    (submitted && !user.fullName ? ' has-error' : '')
                  }
                >
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={user.fullName}
                    onChange={this.handleChange}
                  />
                  {submitted && !user.fullName && (
                    <div className="warning">Full Name is required</div>
                  )}
                </div>
                <div
                  className={
                    'form-group' +
                    (submitted && !user.phone ? ' has-error' : '')
                  }
                >
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={user.phone}
                    onChange={this.handleChange}
                  />
                  {submitted && !user.phone && (
                    <div className="warning">Phone is required</div>
                  )}
                </div>
                <div
                  className={
                    'form-group' +
                    (submitted && !user.email ? ' has-error' : '')
                  }
                >
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={user.email}
                    onChange={this.handleChange}
                  />
                  {submitted && !user.email && (
                    <div className="warning">Email is required</div>
                  )}
                </div>
                <div
                  className={
                    'form-group' +
                    (submitted && !user.password ? ' has-error' : '')
                  }
                >
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={user.password}
                    onChange={this.handleChange}
                  />
                  {submitted && !user.password && (
                    <div className="warning">Password is required</div>
                  )}
                </div>
                <div
                  className={
                    'form-group' +
                    (submitted && !user.password ? ' has-error' : '')
                  }
                >
                  <input
                    type="password"
                    name="confpassword"
                    placeholder="Confirm Password"
                    value={user.password}
                    onChange={this.handleChange}
                  />
                  {submitted && !user.password && (
                    <div className="warning">Confirm Password is required</div>
                  )}
                </div>
                <div className="mt-4 form-group">
                  <p className="my-3 small">
                    By clicking this button, I accept
                    <a className="bold"> Loyaltiexpress T&amp;C</a>
                  </p>

                  <button className="mb-4 small register">
                    {registering ? <LoadingIndicator /> : 'Register'}
                  </button>
                  <Link to="/login" className="mb-4 btn btn-link">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="row pt-4">
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
  const { registering } = state.registration
  return { registering }
}

const actionCreators = {
  register: userActions.register,
}

const connectedRegisterPage = connect(
  mapState,
  actionCreators
)(RegisterPage)
export { connectedRegisterPage as RegisterPage }
