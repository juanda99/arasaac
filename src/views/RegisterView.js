import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import RegisterForm from 'components/RegisterForm'

export default class RegisterView extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <RegisterForm/>
    )
  }
}

export default RegisterView