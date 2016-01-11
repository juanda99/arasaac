import React, { Component } from 'react'
import { AppBar, Paper, Tabs, Tab, EnhancedButton, Styles } from 'material-ui'
const {Colors, Spacing, Typography} = Styles
const MyRawTheme = require('theme/MyRawTheme')
const ThemeManager = require('material-ui/lib/styles/theme-manager')
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator')

@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      renderTabs: props.initialTabs
    }
    this._handleClick = this._handleClick.bind(this)
    this._handleTabChange = this._handleTabChange.bind(this)
  }

  _handleClick (e) {
    e.preventDefault()
  }

  componentWillMount () {
    let setTabsState = () => {
      this.setState({
        renderTabs: !(document.body.clientWidth <= 647),
        tabIndex: this._getSelectedIndex()
      })
    }
    setTabsState()
    window.console.log(this.state.renderTabs)
    window.onresize = setTabsState
  }

  componentWillReceiveProps (nextProps, nextContext) {
    this.setState({
      tabIndex: this._getSelectedIndex()
    })
    window.console.log(this.state.tabIndex)
  }

  _getTabs () {
    let styles = {
      root: {
        backgroundColor: Colors.cyan500,
        position: 'fixed',
        height: 64,
        top: 0,
        right: 0,
        zIndex: 1101,
        width: '100%'
      },
      container: {
        position: 'absolute',
        right: (Spacing.desktopGutter / 2) + 48,
        bottom: 0
      },
      span: {
        color: Colors.white,
        fontWeight: Typography.fontWeightLight,
        left: 45,
        top: 22,
        position: 'absolute',
        fontSize: 26
      },
      svgLogoContainer: {
        position: 'fixed',
        width: 300,
        left: Spacing.desktopGutter
      },
      svgLogo: {
        width: 65,
        backgroundColor: Colors.cyan500,
        position: 'absolute',
        top: 20
      },
      tabs: {
        width: 500,
        bottom: 0
      },
      tab: {
        height: 64
      }
    }

    let materialIcon = this.state.tabIndex !== '0' ? (
      <EnhancedButton style={ styles.svgLogoContainer } linkButton={ true } href='/#/home'>
        <img style={ (styles.svgLogo) } src='/static/images/arasaac-logo.png' />
        <span style={ (styles.span) }>arasaac</span>
      </EnhancedButton>) : null

    return (
      <div>
        <Paper zDepth={ 0 } rounded={ false } style={ styles.root }>
          { materialIcon }
          <div style={ styles.container }>
            <Tabs style={ styles.tabs } value={ this.state.tabIndex } onChange={ this._handleTabChange }>
              <Tab value="1"
                   label="PICTOGRAMAS"
                   style={ styles.tab }
                   route="/pictogramas" />
              <Tab value="2"
                   label="PROGRAMAS"
                   style={ styles.tab }
                   route="/programas" />
              <Tab value="3"
                   label="CONTACTAR"
                   style={ styles.tab }
                   route="/contactar" />
            </Tabs>
          </div>
        </Paper>
      </div>
      )
  }

  _getAppBar () {
    return (
      <AppBar title="Arasaaccc" onLeftIconButtonTouchTap={ this._handleClick } isInitiallyOpen={ true } />
      )
  }
  render () {
    return (
      <div>
        { this.state.renderTabs ? this._getTabs() : this._getAppBar() }
        { this.props.children }
      </div>
      )
  }
  _getSelectedIndex () {
    return this.props.history.isActive('/pictogramas') ? '1' :
      this.props.history.isActive('/programas') ? '2' :
        this.props.history.isActive('/contactar') ? '3' : '0';
  }

  _handleTabChange (value, e, tab) {
    this.props.history.pushState (null, tab.props.route)
    this.setState({
      tabIndex: this._getSelectedIndex()
    })
  }
}

Header.propTypes = {
  initialTabs: React.PropTypes.bool,
  history: React.PropTypes.object
}
Header.defaultProps = {
  initialTabs: false
}

export default Header
