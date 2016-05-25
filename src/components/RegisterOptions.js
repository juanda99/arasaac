import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import {red500, blue500} from 'material-ui/styles/colors'
import ArasaacLogo from 'images/arasaac-logo.svg'
import GoogleIcon from './icons/GoogleIcon'
import FacebookIcon from './icons/FacebookIcon'
import EmailIcon from 'material-ui/svg-icons/communication/email'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

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
    id: 'signup.or',
    description: 'Or, because it offers two posibilities',
    defaultMessage: 'or'
  },
  user: {
    id: 'user.signin',
    description: 'Username field default text for login',
    defaultMessage: 'User'
  },
  offerSignin: {
    id: 'signin.offerAccount',
    description: 'Text inviting for creating an account',
    defaultMessage: 'Already an Arasaac user?'
  },
  signup: {
    id: 'signin.signup',
    description: 'Button for creating a new account',
    defaultMessage: 'Sign up with email'
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
    marginBottom: 5,
    backgroundColor: '#ccc'
  },
  facebookButton: {
    float: 'right',
    width: '100%',
    marginBottom: 30,
    top: -10
  },
  text: {
    width: '100%'
  },
  register: {
    position: 'absolute',
    right: 8,
    marginTop: 5
  },
  signupButton: {
    width: '100%'
  },
  svgLogo: {
    width: 180,
    marginLeft: 70
  },
  signin: {
    position: 'absolute',
    right: 8,
    marginTop: 5
  }
}

class RegisterOptions extends Component {
  static propTypes = {
    name: PropTypes.string,
    showRegister: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.showRegister(true)
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
        <div className='row' style={{marginTop: 10}}>
          <div className='col-xs-12'>
            <RaisedButton style={styles.googleButton} onClick={this.handleClick}
              label={<FormattedMessage {...messages.signup} />} primary={true} icon={<EmailIcon />} />
          </div>
        </div>
        <div className='row' style={{marginTop: 10}}>
          <div className='col-xs-8' style={{textAlign: 'right'}}>
            <p style={{textAlign: 'left'}}>{<FormattedMessage {...messages.offerSignin} />}</p>
          </div>
          <div className='col-xs-4' style={{position: 'relative'}}>
            <Link to='/signin'><RaisedButton style={styles.signin} label={<FormattedMessage {...messages.signin} />} secondary={true} /></Link>
          </div>
        </div>
      </Paper>
    )
  }
}
export default RegisterOptions

