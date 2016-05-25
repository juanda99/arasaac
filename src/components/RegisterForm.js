import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import { reduxForm } from 'redux-form'
import Validator from 'validatorjs'
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

export const fields = [ 'name', 'surname', 'email', 'password', 'company', 'website' ]
const rules = {
  name: 'required|alpha',
  surname: 'required|alpha',
  email: 'required|email',
  password: 'required|min:6',
  url: 'Please provide a valid URL'
}
const validateMessages = {
  'required': 'Required',
  'email.username': 'Please provide a valid email',
  'alpha': 'Please only use letters'
}
const validate = values => {
  const validator = new Validator(values, rules, validateMessages)
  validator.passes()
  return validator.errors.all()
}

let RegisterForm = class RegisterForm extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  componentDidMount() {
    // si pongo el foco lo pierdo...
    this.refs.name.focus()
  }

  render() {
    const {
      fields: { name, surname, email, password, company, website },
      handleSubmit,
      resetForm,
      submitting
    } = this.props
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
            <form onSubmit={handleSubmit}>
              <TextField
                name='name'
                ref='name'
                hintText='What is your name?'
                value=''
                floatingLabelText='Name'
                style={{width: '100%'}}
                errorText={name.touched && name.error ? name.error : ''}
                {...name}
              />
              <TextField
                name='surname'
                hintText='What is your surname?'
                value=''
                floatingLabelText='Surname'
                style={{width: '100%'}}
                errorText={surname.touched && surname.error ? surname.error : ''}
                {...surname}
              />
              <TextField
                name='email'
                hintText='What is your email?'
                value=''
                floatingLabelText='Email'
                style={{width: '100%'}}
                errorText={email.touched && email.error ? email.error : ''}
                {...email}
              />
              <TextField
                name='password'
                type='password'
                hintText='What is your password?'
                value=''
                floatingLabelText='Password'
                style={{width: '100%'}}
                errorText={password.touched && password.error ? password.error : ''}
                {...password}
              />
              <TextField
                name='company'
                hintText='What is your company?'
                value=''
                floatingLabelText='Company (optional)'
                style={{width: '100%'}}
                errorText={company.touched && company.error ? company.error : ''}
                {...company}
              />
              <TextField
                name='website'
                hintText='http://www.example.com'
                value=''
                floatingLabelText='Website (optional)'
                style={{width: '100%'}}
                errorText={website.touched && website.error ? website.error : ''}
                {...website}
              />
              <RaisedButton
                type='submit'
                label='Sign up'
                primary={true}
                style={styles.signup}
              />
            </form>
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
RegisterForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

RegisterForm = reduxForm({
  form: 'signup',
  fields,
  validate
})(RegisterForm)

export default RegisterForm

