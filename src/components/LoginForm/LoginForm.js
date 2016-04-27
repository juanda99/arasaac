import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'
import Paper from 'material-ui/lib/paper'
import Checkbox from 'material-ui/lib/checkbox'
import ActionAndroid from 'material-ui/lib/svg-icons/action/android'
import Colors from 'material-ui/lib/styles/colors'
import ArasaacLogo from 'images/arasaac-logo.svg'
// import Google from 'svg-icons/google'
import GoogleIcon from './Google'
const styles = {
  separator: {
    textAlign: 'center',
    clear: 'both'
  },
  separatorText: {
    display: 'inlineBlock',
    padding: 8,
    position: 'relative',
    backgroundColor: '#fff'
  },
  paper: {
    padding: 20,
    width: 400,
    margin: '0 auto',
    marginTop: 100
  },
  separatorLine: {
    margin: '-10px auto 10px'
  },
  googleButton: {
    width: '100%',
    float: 'left',
    marginBottom: 5
  },
  facebookButton: {
    float: 'right',
    width: '100%',
    marginBottom: 30
  },
  checkbox: {
    marginLeft: -15
  },
  sendPass: {
    textAlign: 'right'
  },
  text: {
    width: '100%'
  },
  register: {
    position: 'absolute',
    right: 8,
    marginTop: 5
  },
  signinButton: {
    width: '100%'
  },
  svgLogo: {
    width: 180,
    marginLeft: 70
  }
}

class LoginForm extends Component {
  static propTypes = {
    name: PropTypes.string
  }
  render() {
    return (
      <div className='row center-sm'>
        <div className='col-xs-12 col-sm-6'>
          <Paper zDepth={2} style={styles.paper}>
            <div className='row'>
              <div className='col-xs-12 col-sm-6'>
                <img style={styles.svgLogo} src={ArasaacLogo} />
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12'>
                <RaisedButton style={styles.googleButton} backgroundColor={Colors.red500} label='Iniciar sesión con Google' primary={true} icon={<GoogleIcon />}/>
                <RaisedButton style={styles.facebookButton} backgroundColor={Colors.blue500} label='Iniciar sesión con Facebook' primary={true} icon={<ActionAndroid />}/>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12'>
                <div style={styles.separator}>
                  <span style={styles.separatorText}>o</span>
                  <hr style={styles.separatorLine} />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12'>
                <TextField style={styles.text} hintText='e-mail' floatingLabelText='Usuario'/><br/>
                <TextField style={styles.text} hintText='Password' floatingLabelText='Password' type='password'/><br/>
              </div>
            </div>
            <div className='row' style={{marginTop: 15, marginBottom: 15}}>
              <div className='col-xs-6'>
                <Checkbox label='Recordarme' style={styles.checkbox}/>
              </div>
              <div className='col-xs-6'>
                <a style={styles.sendPass} href=''>Contraseña olvidada </a>
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-12'>
                <RaisedButton style={styles.signinButton} label='SIGN IN' primary={true} />
              </div>
            </div>
            <div className='row'>
              <div className='col-xs-6'>
                <p style={{textAlign: 'left'}}>¿No tienes cuenta?</p>
              </div>
              <div className='col-xs-6' style={{position: 'relative'}}>
                <RaisedButton style={styles.register} label='Registrate' secondary={true} />
              </div>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}
export default LoginForm
