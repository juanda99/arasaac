import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from 'react-title-component'
import spacing from 'material-ui/styles/spacing'
import {darkWhite, lightGreen500, grey800, lightWhite} from 'material-ui/styles/colors'
import Footer from './footer'
import withWidth, { MEDIUM, LARGE } from 'material-ui/utils/withWidth'
import AppNavDrawer from './AppNavDrawer'
import { defineMessages, FormattedMessage } from 'react-intl'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
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

class Master extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    children: PropTypes.node,
    history: PropTypes.object,
    location: PropTypes.object,
    isAuthenticated: PropTypes.bool
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  state = {
    navDrawerOpen: false
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    }
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme()
    })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme
    this.setState({
      muiTheme: newMuiTheme
    })
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
        backgroundColor: lightGreen500
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: '100%'
      },
      content: {
        margin: spacing.desktopGutter
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`
      },
      footer: {
        backgroundColor: grey800,
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
        color: lightWhite,
        maxWidth: 450
      },
      iconButton: {
        color: darkWhite
      }
    }

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium)
    }
    return styles
  }

  handleTouchTapLeftIconButton = () => {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    })
  }

  handleChangeRequestNavDrawer = open => {
    this.setState({
      navDrawerOpen: open
    })
  }

  handleChangeList = (event, value) => {
    this.context.router.push(value)
    this.setState({
      navDrawerOpen: false
    })
  }

  handleChangeMuiTheme = muiTheme => {
    this.setState({
      muiTheme: muiTheme
    })
  }

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
  }

  render() {
    const {
      location,
      children,
      isAuthenticated,
      width
    } = this.props

    let {
      navDrawerOpen
    } = this.state

    const {prepareStyles} = this.state.muiTheme

    const styles = this.getStyles()

    let {title, docked} = this.getViewProps()

    let showMenuIconButton = true
    if (width === LARGE && docked) {
      docked = true
      navDrawerOpen = true
      showMenuIconButton = false
      styles.navDrawer = {
        zIndex: styles.appBar.zIndex - 1
      }
      styles.root.paddingLeft = 256
      styles.footer.paddingLeft = 256
    }
    return (
      <div>
        <Title render='Arasaac' />
        <AuthAppBar showMenuIconButton={showMenuIconButton} isAuthenticated={isAuthenticated} title={title}
          touchTapLeftIconButton={this.handleTouchTapLeftIconButton} style={styles.appBar} zDepth={0} />
        {title !== ''
        ? <div style={prepareStyles(styles.root)}>
          <div style={prepareStyles(styles.content)}>
              {React.cloneElement(children, {onChangeMuiTheme: this.handleChangeMuiTheme})}
          </div>
        </div>
        : children
        }
        <AppNavDrawer
          style={styles.navDrawer}
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
          onChangeList={this.handleChangeList}
          open={navDrawerOpen}
        />

        <div style={{paddingTop: '8rem'}}></div>
        <Footer style={styles.footer} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  const { auth: { isAuthenticated } } = state

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(withWidth()(Master))
