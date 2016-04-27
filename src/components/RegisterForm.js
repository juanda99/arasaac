import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import Paper from 'material-ui/lib/paper'
import Checkbox from 'material-ui/lib/checkbox'
import Colors from 'material-ui/lib/styles/colors'
import ArasaacLogo from 'images/arasaac-logo.svg'
import GoogleIcon from './icons/GoogleIcon'
import FacebookIcon from './icons/FacebookIcon'
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

const errorMessages = {
  wordsError: 'Please only use letters'
}

class RegisterForm extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {canSubmit: false}
  }

  getInitialState() {
    return {
      canSubmit: false
    }
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

  submitForm(model) {
    // Submit your validated form
    console.log('Model: ', model)
  }

  render() {
    let { wordsError } = errorMessages
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
            <Formsy.Form onValid={this.enableButton} onInvalid={this.disableButton} onValidSubmit={this.submitForm}>
              <FormsyText
                name='name'
                validations='isWords'
                validationError={wordsError}
                required
                hintText='What is your name?'
                value='Bob'
                floatingLabelText='Name'/>
              <FormsyText
                name='name'
                type='password'
                validations='isWords'
                validationError={wordsError}
                required
                hintText='What is your password?'
                value=''
                floatingLabelText='Password'/>
              <RaisedButton type='submit' label='Registrarse' disabled={!this.state.canSubmit} primary={true} />
            </Formsy.Form>
          </div>
        </div>
      </Paper>
    )
  }
}
export default RegisterForm

