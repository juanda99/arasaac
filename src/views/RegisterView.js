import React, {Component} from 'react'
import RegisterForm from 'components/RegisterForm.js'

class RegisterView extends Component {
  render() {
    return (
      <div>
        <h1>Formulario de Registro</h1>
        <RegisterForm/>
      </div>
    )
  }
}

export default RegisterView
