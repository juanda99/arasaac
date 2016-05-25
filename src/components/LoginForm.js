import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox'
import {red500, blue500} from 'material-ui/styles/colors'
import ArasaacLogo from 'images/arasaac-logo.svg'
import GoogleIcon from './icons/GoogleIcon'
import FacebookIcon from './icons/FacebookIcon'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import Validator from 'validatorjs'
export const fields = [ 'username', 'password' ]
const rules = {
  username: 'required|email',
  password: 'required'
}
const validateMessages = {
  'required': 'Required',
  'email.username': 'Please provide a valid email'
}
const validate = values => {
  const validator = new Validator(values, rules, validateMessages)
  validator.passes()
  return validator.errors.all()
}

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

let LoginForm = class LoginForm extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // si pongo el foco lo pierdo...
    // this.refs.username.focus()
  }
  handleSubmit(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
  }

  render() {
    const {
      fields: { username, password },
      resetForm,
      submitting
    } = this.props
    return (
      <Paper zDepth={2} style={styles.paper}>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <img style={styles.svgLogo} src={ArasaacLogo} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <RaisedButton style={styles.googleButton} backgroundColor={red500}
              label={<FormattedMessage {...messages.google} />} icon={<GoogleIcon />} labelColor='white' />
            <RaisedButton style={styles.facebookButton} backgroundColor={blue500}
              label={<FormattedMessage {...messages.facebook} />} icon={<FacebookIcon />} labelColor='white' />
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
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-xs-12'>
              <TextField ref='username' style={styles.text} hintText={<FormattedMessage {...messages.email} />}
                floatingLabelText={<FormattedMessage {...messages.user} />} {...username}
                errorText={username.touched && username.error ? username.error : ''} /><br />
              <TextField ref='password' style={styles.text} hintText={<FormattedMessage {...messages.password} />}
                floatingLabelText={<FormattedMessage {...messages.password} {...password} />} type='password'
                errorText={password.touched && password.error ? password.error : ''} /><br />
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
        </form>
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
LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
LoginForm = reduxForm({
  form: 'signin',
  fields,
  validate
})(LoginForm)

export default LoginForm
