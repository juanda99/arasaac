import React, {Component, PropTypes} from 'react'
// import { connect } from 'react-redux'
import LoginForm from 'components/LoginForm'

export default class SigninView extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  render() {
    return (
      <LoginForm />
    )
  }
}

export default SigninView
