import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

// import {red500} from 'material-ui/styles/colors'
import ArasaacLogo from 'images/arasaac-logo.svg'
// import GoogleIcon from './icons/GoogleIcon'
// import FacebookIcon from './icons/FacebookIcon'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import Validator from 'validatorjs'
import messages from './messages'
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
  separatorLine: {
    margin: '-10px auto 10px'
  },
  googleLogin: {
    width: '100%',
    float: 'left',
    marginBottom: 5
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

let MaterialForm = class MaterialForm extends Component {
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
      fields: { area, subarea }
    } = this.props
    return (
      <div>
        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <img style={styles.svgLogo} src={ArasaacLogo} />
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>

          <div className='row'>
            <div className='col-xs-12'>
              <SelectField ref='area' floatingLabelText='Frequency' value={1} onChange={this.handleChange}>
                <MenuItem value={1} primaryText='Never' />
                <MenuItem value={2} primaryText='Every Night' />
                <MenuItem value={3} primaryText='Weeknights' />
                <MenuItem value={4} primaryText='Weekends' />
                <MenuItem value={5} primaryText='Weekly' />
              </SelectField>
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
      </div>
    )
  }
}
MaterialForm.propTypes = {
  fields: PropTypes.object.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}
MaterialForm = reduxForm({
  form: 'materialform',
  fields,
  validate
})(MaterialForm)

export default MaterialForm
