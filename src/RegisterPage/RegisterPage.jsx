import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

import { logo } from '../_assets'

class RegisterPage extends React.Component {
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
      <div className="row mx-0 align-items-center justify-content-center text-center">
        <div className="col-xs-8 col-sm-7 col-md-6 col-lg-5 col-xl-4">
          <div className="row my-5 logo-row-wrapper">
            <div className="col">
              <img className="logo" src={logo} />
            </div>
          </div>
          <div className="row form-row-wrapper">
            <div className="col px-5">
              <h3 className="mt-4 register-title">Register</h3>
              <form
                className="register-form"
                name="form"
                onSubmit={this.handleSubmit}
              >
                <div
                  className={
                    'form-group' +
                    (submitted && !user.fullName ? ' has-error' : '')
                  }
                >
                  <input
                    type="text"
                    className="register-text"
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
                    className="register-text"
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
                    className="register-text"
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
                    className="register-text"
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
                    className="register-text"
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
                  <p className="my-3 tos">
                    By clicking this button, I accept
                    <a className="bold"> Loyaltiexpress T&amp;C</a>
                  </p>

                  <button className="mb-4 register-button">Register</button>
                  {registering && (
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}
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
