import React, { Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'
import Paper from 'material-ui/lib/paper'
import Checkbox from 'material-ui/lib/checkbox'

const styles = {
  separator: {
    textAlign: 'center'
  },
  separatorText: {
    display: 'inlineBlock',
    padding: 8,
    position: 'relative',
    backgroundColor: '#fff'
  },
  paper: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    padding: 20
  },
  separatorLine: {
    margin: '-10px auto 10px'
  }
}

class Signin extends Component {
  render() {
    return (
      <Paper zDepth={2} style={styles.paper}>
        <TextField hintText='e-mail' floatingLabelText='Usuario'/><br/>
        <TextField hintText='Password' floatingLabelText='Password' type='password'/><br/>
        <RaisedButton label='SIGN IN' primary={true} />
        <div style={styles.separator}>
          <span style={styles.separatorText}>o</span>
          <hr style={styles.separatorLine} />
        </div>
        <Checkbox label='Recordarme' style={styles.checkbox}/>
        <a href=''>Contraseña olvidada </a>

        <div>
          <p>¿No tienes una cuenta?</p>
          <RaisedButton label='Registrate' secondary={true} />
        </div>
      </Paper>
    )
  }
}
export default Signin
