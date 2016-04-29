import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import RegisterForm from 'components/RegisterForm'
import RegisterOptions from 'components/RegisterOptions'
export default class RegisterView extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.showRegister = this.showRegister.bind(this)
    /* show pre register, so user can choose signup option */
    this.state = {
      showRegister: false
    }
  }

  showRegister(value) {
    this.setState({showRegister: value})
  }

  render() {
    let showRegister = this.state.showRegister
    return (
      <div>
        { showRegister ? <RegisterForm/> : <RegisterOptions showRegister={this.showRegister}/> }
      </div>
    )
  }
}

export default RegisterView
