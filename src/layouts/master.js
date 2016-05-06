import React from 'react'
import { connect } from 'react-redux'
import Title from 'react-title-component'
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
import AuthAppBar from './authAppBar'

const messages = defineMessages({
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
  },
  signinTitle: {
    id: 'header.signinTitle',
    description: 'Header Title',
    defaultMessage: 'Sign in to Arasaac'
  },
  registerTitle: {
    id: 'header.registerTitle',
    description: 'Header title',
    defaultMessage: 'Sign up for Arasaac'
  },
  userProfileTitle: {
    id: 'header.userProfileTitle',
    description: 'Header title',
    defaultMessage: 'My profile'
  },
  configurationTitle: {
    id: 'header.configurationTitle',
    description: 'Header title',
    defaultMessage: 'Arasaac configuration'
  }
})

const Master = React.createClass({

  propTypes: {
    children: React.PropTypes.node,
    history: React.PropTypes.object,
    location: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool
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

  getViewProps() {
    let title = ''
    let docked = false
    var url = this.props.location.pathname
    switch (true) {
      case /api/.test(url):
        title = <FormattedMessage {...messages.api} />
        docked = true
        break
      case /search/.test(url):
        title = <FormattedMessage {...messages.pictogramsSearch} />
        docked = true
        break
      case /catalogs/.test(url):
        title = <FormattedMessage {...messages.catalogs} />
        docked = true
        break
      case /materials/.test(url):
        title = <FormattedMessage {...messages.materials} />
        docked = true
        break
      case /onlinetools/.test(url):
        title = <FormattedMessage {...messages.onlineTools} />
        docked = true
        break
      case /software/.test(url):
        title = <FormattedMessage {...messages.software} />
        docked = true
        break
      case /signin/.test(url):
        title = <FormattedMessage {...messages.signinTitle} />
        docked = false
        break
      case /register/.test(url):
        title = <FormattedMessage {...messages.registerTitle} />
        docked = false
        break
      case /profile/.test(url):
        title = <FormattedMessage {...messages.userProfileTitle} />
        docked = true
        break
      case /configuration/.test(url):
        title = <FormattedMessage {...messages.configurationTitle} />
        docked = true
        break
    }
    return {docked, title}
  },

  render() {
    const {
      location,
      children,
      isAuthenticated
    } = this.props

    let {
      leftNavOpen
    } = this.state

    const {prepareStyles} = this.state.muiTheme

    const styles = this.getStyles()

    let {title, docked} = this.getViewProps()

    let showMenuIconButton = true
    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE) && docked) {
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
        <AuthAppBar showMenuIconButton={showMenuIconButton} isAuthenticated={isAuthenticated} title={title}
          touchTapLeftIconButton={this.handleTouchTapLeftIconButton} />
        {title !== ''
        ? <div style={prepareStyles(styles.root)}>
          <div style={prepareStyles(styles.content)}>
              {React.cloneElement(children, {onChangeMuiTheme: this.handleChangeMuiTheme})}
          </div>
        </div>
        : children
        }
        <div style={{paddingTop: '8rem'}}></div>
        <Footer style={styles.footer} />
      </div>
    )
  }
})
const mapStateToProps = state => {
  const { auth: { isAuthenticated } } = state

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Master)
