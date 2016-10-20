import React, {Component, PropTypes} from 'react'
import FacebookIcon from './icons/FacebookIcon'
import {blue500} from 'material-ui/styles/colors'
import { FormattedMessage } from 'react-intl'
import RaisedButton from 'material-ui/RaisedButton'
import messages from './messages'
import objectToParams from './objectToParams'

const styles = {
  facebookButton: {
    float: 'right',
    width: '100%',
    marginBottom: 30,
    top: -10
  }
}

class FacebookLogin extends Component {

  static propTypes = {
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    cookie: PropTypes.bool,
    reAuthenticate: PropTypes.bool,
    scope: PropTypes.string,
    textButton: PropTypes.string,
    typeButton: PropTypes.string,
    autoLoad: PropTypes.bool,
    fields: PropTypes.string,
    version: PropTypes.string,
    icon: PropTypes.any,
    language: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    textButton: 'Login with Facebook',
    scope: 'public_profile,email',
    xfbml: false,
    cookie: false,
    reAuthenticate: false,
    size: 'metro',
    fields: 'name',
    version: '2.3',
    language: 'en_US'
  }

  componentDidMount() {
    const { appId, xfbml, cookie, version, autoLoad, language } = this.props
    let fbRoot = document.getElementById('fb-root')

    if (!fbRoot) {
      fbRoot = document.createElement('div')
      fbRoot.id = 'fb-root'

      document.body.appendChild(fbRoot)
    }

    window.fbAsyncInit = () => {
      window.FB.init({
        version: `v${version}`,
        appId,
        xfbml,
        cookie
      })

      if (autoLoad || window.location.search.includes('facebookdirect')) {
        window.FB.getLoginStatus(this.checkLoginState)
      }
    };
    // Load the SDK asynchronously
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      if (d.getElementById(id)) { return }
      js = d.createElement(s); js.id = id
      js.src = `//connect.facebook.net/${language}/all.js`
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }

  responseApi = authResponse => {
    window.FB.api('/me', { fields: this.props.fields }, me => {
      Object.assign(me, authResponse)
      this.props.callback(me)
    })
  }

  checkLoginState = response => {
    if (response.authResponse) {
      this.responseApi(response.authResponse)
    } else {
      if (this.props.callback) {
        this.props.callback({ status: response.status })
      }
    }
  };

  handleClick = () => {
    const { scope, appId, onClick, reAuthenticate } = this.props

    if (typeof onClick === 'function') {
      onClick()
    }

    let isMobile = false

    try {
      isMobile = ((window.navigator && window.navigator.standalone) || navigator.userAgent.match('CriOS') || navigator.userAgent.match('mobile'))
    } catch (ex) {
      // continue regardless of error
    }

    const params = {
      client_id: appId,
      redirect_uri: window.location.href,
      state: 'facebookdirect',
      scope
    }

    if (reAuthenticate) {
      params.auth_type = 'reauthenticate'
    }

    if (isMobile) {
      window.location.href = `https://www.facebook.com/dialog/oauth?${objectToParams(params)}`
    } else {
      window.FB.login(this.checkLoginState, { scope, auth_type: params.auth_type })
    }
  }

  render() {
    return (
      <RaisedButton style={styles.facebookButton} backgroundColor={blue500}
        label={<FormattedMessage {...messages.facebook} />} icon={<FacebookIcon />}
        onClick={this.handleClick} labelColor='white' />

    )
  }
}

export default FacebookLogin
