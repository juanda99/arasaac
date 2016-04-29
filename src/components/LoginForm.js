import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'
import Paper from 'material-ui/lib/paper'
import Checkbox from 'material-ui/lib/checkbox'
import Colors from 'material-ui/lib/styles/colors'
import ArasaacLogo from 'images/arasaac-logo.svg'
import GoogleIcon from './icons/GoogleIcon'
import FacebookIcon from './icons/FacebookIcon'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
const messages = defineMessages({
  google: {
    id: 'signin.google',
    description: 'Signin Google button',
    defaultMessage: 'Sign in with Google'
  },
  facebook: {
    id: 'signin.facebook',
    description: 'Signin Facebook button',
    defaultMessage: 'Sign in with Facebook'
  },
  or: {
    id: 'signin.or',
    description: 'Or, because it offers two posibilities',
    defaultMessage: 'or'
  },
  user: {
    id: 'user.signin',
    description: 'Username field default text for login',
    defaultMessage: 'User'
  },
  email: {
    id: 'email.signin',
    description: 'Hint for username login field',
    defaultMessage: 'e-mail'
  },
  password: {
    id: 'password.signin',
    description: 'Password field for login, default text',
    defaultMessage: 'Password'
  },
  remember: {
    id: 'signin.remember',
    description: 'Signin checkbox option for remembering password',
    defaultMessage: 'Remember me'
  },
  forgotPassword: {
    id: 'signin.forgotPassword',
    description: 'Link for password reset if passwords is forgotten',
    defaultMessage: 'Forgot password?'
  },
  offerAccount: {
    id: 'signin.offerAccount',
    description: 'Text inviting for creating an account',
    defaultMessage: 'Don\'t have an account?'
  },
  signup: {
    id: 'signin.signup',
    description: 'Button for creating a new account',
    defaultMessage: 'Sign up'
  }

})

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
    marginTop: 100,
    marginBottom: 130
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
    marginBottom: 30,
    top: -10
  },
  checkbox: {
    left: 0
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
      <Paper zDepth={2} style={styles.paper}>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <img style={styles.svgLogo} src={ArasaacLogo} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <RaisedButton style={styles.googleButton} backgroundColor={Colors.red500}
              label={<FormattedMessage {...messages.google} />} primary={true} icon={<GoogleIcon />}/>
            <RaisedButton style={styles.facebookButton} backgroundColor={Colors.blue500}
              label={<FormattedMessage {...messages.facebook} />} primary={true} icon={<FacebookIcon/>}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div style={styles.separator}>
              <span style={styles.separatorText}>{<FormattedMessage {...messages.or} />}</span>
              <hr style={styles.separatorLine} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <TextField style={styles.text} hintText={<FormattedMessage {...messages.email} />}
              floatingLabelText={<FormattedMessage {...messages.user} />}/><br/>
            <TextField style={styles.text} hintText={<FormattedMessage {...messages.password} />}
              floatingLabelText={<FormattedMessage {...messages.password} />} type='password'/><br/>
          </div>
        </div>
        <div className='row' style={{marginTop: 15, marginBottom: 15}}>
          <div className='col-xs-6'>
            <Checkbox label={<FormattedMessage {...messages.remember} />} style={styles.checkbox} />
          </div>
          <div className='col-xs-6' style={{textAlign: 'right'}}>
            <Link to='http://localhost:3000/register'>{<FormattedMessage {...messages.forgotPassword} />}</Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <RaisedButton style={styles.signinButton} label='SIGN IN' primary={true} />
          </div>
        </div>
        <div className='row' style={{marginTop: 10}}>
          <div className='col-xs-6' style={{textAlign: 'right'}}>
            <p style={{textAlign: 'left'}}>{<FormattedMessage {...messages.offerAccount} />}</p>
          </div>
          <div className='col-xs-6' style={{position: 'relative'}}>
            <Link to='/register'><RaisedButton style={styles.register} label={<FormattedMessage {...messages.signup} />} secondary={true} /></Link>
          </div>
        </div>
      </Paper>
    )
  }
}
export default LoginForm
