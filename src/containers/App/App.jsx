import React, { Fragment, Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../../_helpers'
import { alertActions } from '../../_actions'
import { PrivateRoute } from '../../components'
import { HomePage, LoginPage, RegisterPage, ForgotPasswordPage } from '..'

class App extends Component {
  constructor(props) {
    super(props)

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts()
    })
  }

  render() {
    const { alert } = this.props
    return (
      <Fragment>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/reset" component={ForgotPasswordPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

function mapState(state) {
  const { alert } = state
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
}

const connectedApp = connect(
  mapState,
  actionCreators
)(App)
export { connectedApp as App }
