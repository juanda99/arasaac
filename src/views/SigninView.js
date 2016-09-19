import React, {Component, PropTypes} from 'react'
// import { connect } from 'react-redux'
import {LoginForm} from 'components/login'

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
