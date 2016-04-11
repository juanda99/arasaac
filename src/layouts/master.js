import React from 'react'
import Title from 'react-title-component'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { Link } from 'react-router'
import {Spacing} from 'material-ui/lib/styles'
import Footer from './footer'
import { StyleResizable } from 'material-ui/lib/mixins'
import AppLeftNav from './app-left-nav'
import { defineMessages, FormattedMessage } from 'react-intl'
// styles
import {Colors} from 'material-ui/lib/styles'
import MyRawTheme from 'theme/MyRawTheme'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import 'styles/core.scss'
import myStyle from 'theme/variables'

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
  },
  pictograms: {
    id: 'header.pictograms',
    description: 'Header title',
    defaultMessage: 'Pictograms'
  },
  pictogramsSearch: {
    id: 'header.pictogramsSearch',
    description: 'Header title',
    defaultMessage: 'Search pictograms'
  },
  api: {
    id: 'header.api',
    description: 'Header title',
    defaultMessage: 'Api for developers'
  },
  catalogs: {
    id: 'header.catalogs',
    description: 'Header title',
    defaultMessage: 'Download catalogs'
  },
  onlineTools: {
    id: 'header.onlineTools',
    description: 'Header title',
    defaultMessage: 'Online Tools'
  },
  software: {
    id: 'header.software',
    description: 'Header title',
    defaultMessage: 'Software'
  },
  materials: {
    id: 'header.materials',
    description: 'Header title',
    defaultMessage: 'Materials'
  }
})

const Master = React.createClass({

  propTypes: {
    children: React.PropTypes.node,
    history: React.PropTypes.object,
    location: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  mixins: [
    StyleResizable
  ],

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
      leftNavOpen: false
    }
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    }
  },

  componentWillMount() {
    const newMuiTheme = this.state.muiTheme
    newMuiTheme.inkBar.backgroundColor = Colors.yellow200
    this.setState({
      muiTheme: newMuiTheme
    })
  },

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme
    this.setState({
      muiTheme: newMuiTheme
    })
  },

  getStyles() {
    const darkWhite = Colors.darkWhite

    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
        backgroundColor: Colors.lightGreen500
      },
      root: {
        paddingTop: Spacing.desktopKeylineIncrement,
        minHeight: '100%'
      },
      leftNav: {
        fontWeight: 100
      },
      content: {
        margin: Spacing.desktopGutter
      },
      contentWhenMedium: {
        margin: `${Spacing.desktopGutter * 2}px ${Spacing.desktopGutter * 3}px`
      },
      footer: {
        backgroundColor: Colors.grey800,
        textAlign: 'center',
        padding: '1 rem',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        minHeight: myStyle.footer.height
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: Colors.lightWhite,
        maxWidth: 450
      },
      iconButton: {
        color: darkWhite
      }
    }

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) ||
        this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium)
    }
    return styles
  },

  handleTouchTapLeftIconButton() {
    this.setState({
      leftNavOpen: !this.state.leftNavOpen
    })
  },

  handleChangeRequestLeftNav(open) {
    this.setState({
      leftNavOpen: open
    })
  },

  handleRequestChangeList(event, value) {
    this.context.router.push(value)
    this.setState({
      leftNavOpen: false
    })
  },

  handleChangeMuiTheme(muiTheme) {
    this.setState({
      muiTheme: muiTheme
    })
  },

  render() {
    const {
      location,
      children
    } = this.props

    let {
      leftNavOpen
    } = this.state

    const {prepareStyles} = this.state.muiTheme

    const styles = this.getStyles()
    const router = this.context.router
    const title =
      router.isActive('/pictograms/search') ? <FormattedMessage {...messages.pictogramsSearch} />
      : router.isActive('/pictograms/api') ? <FormattedMessage {...messages.api} />
      : router.isActive('/pictograms/catalogs') ? <FormattedMessage {...messages.catalogs} />
      : router.isActive('/materials') ? <FormattedMessage {...messages.materials} />
      : router.isActive('/onlinetools') ? <FormattedMessage {...messages.onlineTools} />
      : router.isActive('/software') ? <FormattedMessage {...messages.software} />
      : router.isActive('/translate') ? <FormattedMessage {...messages.translateArasaac} />
      : ''

    let docked = false
    let showMenuIconButton = true
    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE) && title !== '') {
      docked = true
      leftNavOpen = true
      showMenuIconButton = false
      styles.leftNav = {
        zIndex: styles.appBar.zIndex - 1,
        fontWeight: 100
      }
      styles.root.paddingLeft = 256
      styles.footer.paddingLeft = 256
    }

    return (
      <div id='1'>
        <AppLeftNav
          style={styles.leftNav}
          history={history}
          location={location}
          docked={docked}
          onRequestChangeLeftNav={this.handleChangeRequestLeftNav}
          onRequestChangeList={this.handleRequestChangeList}
          open={leftNavOpen}
        />
        <Title render='Arasaac' />
        <AppBar
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
              <MenuItem primaryText={<FormattedMessage {...messages.signin} />} linkButton={true} containerElement={<Link to='/login' />}/>
              <MenuItem primaryText={<FormattedMessage {...messages.register} />} linkButton={true} containerElement={<Link to='/register' />}/>
              <MenuItem primaryText={<FormattedMessage {...messages.userProfile} />} linkButton={true} containerElement={<Link to='/profile' />}/>
              <MenuItem primaryText={<FormattedMessage {...messages.userMaterial} />} linkButton={true} containerElement={<Link to='/usermaterial' />}/>
              <MenuItem primaryText={<FormattedMessage {...messages.uploadMaterial} />} linkButton={true} containerElement={<Link to='/upload' />}/>
              <MenuItem primaryText={<FormattedMessage {...messages.translateArasaac} />} linkButton={true} containerElement={<Link to='/translate' />}/>
              <MenuItem primaryText={<FormattedMessage {...messages.signout} />} linkButton={true} href='/logout'/>
            </IconMenu>
          }
        />
        {title !== ''
        ? <div style={prepareStyles(styles.root)}>
          <div style={prepareStyles(styles.content)}>
              {React.cloneElement(children, {onChangeMuiTheme: this.handleChangeMuiTheme})}
          </div>
        </div>
        : children
        }
        <Footer style={styles.footer}/>
      </div>
    )
  }
})

export default Master
