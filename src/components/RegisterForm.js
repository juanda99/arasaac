import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import Paper from 'material-ui/lib/paper'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
const messages = defineMessages({
  google: {
    id: 'signup.google',
    description: 'Sign up Google button',
    defaultMessage: 'Continue with Google'
  },
  facebook: {
    id: 'signup.facebook',
    description: 'Signin Facebook button',
    defaultMessage: 'Continue with Facebook'
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
  offerSignin: {
    id: 'signin.offerAccount',
    description: 'Text inviting for creating an account',
    defaultMessage: 'Already an Arasaac user?'
  },
  signup: {
    id: 'signin.signup',
    description: 'Button for creating a new account',
    defaultMessage: 'Sign up'
  },
  signin: {
    id: 'signup.signin',
    description: 'Button for going to sign in view',
    defaultMessage: 'Sign in'
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
  signup: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10
  },
  signinButton: {
    position: 'absolute',
    right: 8,
    marginTop: 5
  },
  svgLogo: {
    width: 180,
    marginLeft: 70
  }
}

const errorMessages = {
  wordsError: 'Please only use letters',
  urlError: 'Please provide a valid URL',
  passwordError: 'Password must contain at least 6 characters',
  emailError: 'Please provide a valid email'
}

class RegisterForm extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {canSubmit: false}
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  enableButton() {
    this.setState({
      canSubmit: true
    })
  }

  disableButton() {
    this.setState({
      canSubmit: false
    })
  }

  notifyFormError(data) {
    console.error('Form error:', data)
  }

  submitForm(model) {
    // Submit your validated form
    console.log('Model: ', model)
  }

  render() {
    let { wordsError, urlError, passwordError, emailError } = errorMessages
    return (
      <Paper zDepth={2} style={styles.paper}>
        <div className='row'>
          <div className='col-xs-12'>
            <p style={{textAlign: 'center'}}>Sign up with <a href=''>Google</a> or <a href=''>Facebook</a></p>
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
            <Formsy.Form
              onValid={this.enableButton}
              onInvalid={this.disableButton}
              onValidSubmit={this.submitForm}
              onInvalidSubmit={this.notifyFormError}>
              <FormsyText
                name='name'
                validations='isWords'
                validationError={wordsError}
                required
                hintText='What is your name?'
                value=''
                floatingLabelText='Name'
                style={{width: '100%'}}
              />
              <FormsyText
                name='surname'
                validations='isWords'
                validationError={wordsError}
                required
                hintText='What is your surname?'
                value=''
                floatingLabelText='Surname'
                style={{width: '100%'}}
              />
              <FormsyText
                name='email'
                validations='isEmail'
                validationError={emailError}
                required
                hintText='What is your email?'
                value=''
                floatingLabelText='Email'
                style={{width: '100%'}}
              />
              <FormsyText
                name='password'
                type='password'
                validations='minLength:6'
                validationError={passwordError}
                required
                hintText='What is your password?'
                value=''
                floatingLabelText='Password'
                style={{width: '100%'}}
              />
              <FormsyText
                name='company'
                hintText='What is your company?'
                value=''
                floatingLabelText='Company (optional)'
                style={{width: '100%'}}
              />
              <FormsyText
                name='website'
                validations='isUrl'
                validationError={urlError}
                hintText='http://www.example.com'
                value=''
                floatingLabelText='Website (optional)'
                style={{width: '100%'}}
              />
              <RaisedButton
                type='submit'
                label='Sign up'
                disabled={!this.state.canSubmit}
                primary={true}
                style={styles.signup}
              />
            </Formsy.Form>
          </div>
        </div>
        <div className='row' style={{marginTop: 10}}>
          <div className='col-xs-8' style={{textAlign: 'right'}}>
            <p style={{textAlign: 'left'}}>{<FormattedMessage {...messages.offerSignin} />}</p>
          </div>
          <div className='col-xs-4' style={{position: 'relative'}}>
            <Link to='/signin'><RaisedButton style={styles.signinButton} label={<FormattedMessage {...messages.signin} />} secondary={true} /></Link>
          </div>
        </div>
      </Paper>
    )
  }
}
export default RegisterForm

