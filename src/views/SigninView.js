import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
require('./prueba.scss')
import LoginForm from 'components/LoginForm/LoginForm'

export default class SigninView extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LoginForm/>
    )
  }
}

export default SigninView
