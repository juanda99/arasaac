import React, {Component, PropTypes} from 'react'
import {Colors} from 'material-ui/lib/styles'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'
const messages = defineMessages({
  signin: {
    id: 'userMenu.signin',
    description: 'User menu item',
    defaultMessage: 'Sign in'
  },
  register: {
    id: 'userMenu.register',
    description: 'User menu item',
    defaultMessage: 'Register'
  },
  appConfiguration: {
    id: 'userMenu.appConfiguration',
    description: 'User menu item',
    defaultMessage: 'App Configuration'
  },
  userProfile: {
    id: 'userMenu.userProfile',
    description: 'User menu item',
    defaultMessage: 'My profile'
  },
  userMaterial: {
    id: 'userMenu.userMaterial',
    description: 'User menu item',
    defaultMessage: 'My material'
  },
  uploadMaterial: {
    id: 'userMenu.uploadMaterial',
    description: 'User menu item',
    defaultMessage: 'Share material'
  },
  translateArasaac: {
    id: 'userMenu.translateArasaac',
    description: 'User menu item',
    defaultMessage: 'Translate Arasaac'
  },
  signout: {
    id: 'userMenu.signout',
    description: 'User menu item',
    defaultMessage: 'Sign out'
  }
})
const styles = {
  appBar: {
    position: 'fixed',
    // Needed to overlap the examples
    // zIndex: this.state.muiTheme.zIndex.appBar + 1,
    top: 0,
    backgroundColor: Colors.lightGreen500
  }
}

export default class AuthAppBar extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    showMenuIconButton: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    touchTapLeftIconButton: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.handleTouchTapLeftIconButton = this.handleTouchTapLeftIconButton.bind(this)
  }

  handleTouchTapLeftIconButton() {
    this.props.touchTapLeftIconButton()
  }

  render() {
    const { isAuthenticated, showMenuIconButton, title } = this.props
    return (
      <div>
      {(isAuthenticated)
      ? <AppBar
        onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
        title={title}
        zDepth={0}
        style={styles.appBar}
        showMenuIconButton={showMenuIconButton}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText={<FormattedMessage {...messages.signin} />} linkButton={true} containerElement={<Link to='/signin' />} />
            <MenuItem primaryText={<FormattedMessage {...messages.register} />} linkButton={true} containerElement={<Link to='/register' />} />
            <MenuItem primaryText={<FormattedMessage {...messages.appConfiguration} />} linkButton={true} containerElement={<Link to='/configuration' />} />
          </IconMenu>
          }
        />
      : <AppBar
        onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
        title={title}
        zDepth={0}
        style={styles.appBar}
        showMenuIconButton={showMenuIconButton}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText={<FormattedMessage {...messages.appConfiguration} />} linkButton={true} containerElement={<Link to='/configuration' />} />
            <MenuItem primaryText={<FormattedMessage {...messages.userProfile} />} linkButton={true} containerElement={<Link to='/profile' />} />
            <MenuItem primaryText={<FormattedMessage {...messages.userMaterial} />} linkButton={true} containerElement={<Link to='/usermaterial' />} />
            <MenuItem primaryText={<FormattedMessage {...messages.uploadMaterial} />} linkButton={true} containerElement={<Link to='/upload' />} />
            <MenuItem primaryText={<FormattedMessage {...messages.translateArasaac} />} linkButton={true} containerElement={<Link to='/translate' />} />
            <MenuItem primaryText={<FormattedMessage {...messages.signout} />} linkButton={true} href='/signout' />
          </IconMenu>
          }
        />
      }
      </div>
    )
  }
}
