import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Divider from 'material-ui/lib/divider'
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance'
import {
  Colors,
  Spacing,
  Typography
} from 'material-ui/lib/styles'
import {StylePropable} from 'material-ui/lib/mixins'

import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  pictograms: {
    id: 'menu.pictograms',
    description: 'Menu option: Pictograms',
    defaultMessage: 'Pictograms'
  },
  searchPictograms: {
    id: 'menu.searchPictograms',
    description: 'Menu option: Search Pictograms',
    defaultMessage: 'Search Pictograms'
  }
})

const SelectableList = SelectableContainerEnhance(List)

const AppLeftNav = React.createClass({

  propTypes: {
    docked: React.PropTypes.bool.isRequired,
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    onRequestChangeLeftNav: React.PropTypes.func.isRequired,
    onRequestChangeList: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func
  },

  mixins: [
    StylePropable
  ],

  handleRequestChangeLink (event, value) {
    window.location = value
  },

  handleTouchTapHeader () {
    this.props.history.push('/')
    this.setState({
      leftNavOpen: false
    })
  },

  getStyles () {
    return {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: Typography.textFullWhite,
        lineHeight: Spacing.desktopKeylineIncrement + 'px',
        fontWeight: Typography.fontWeightLight,
        backgroundColor: Colors.lightGreen500,
        paddingLeft: Spacing.desktopGutter,
        marginBottom: 8
      }
    }
  },

  render () {
    const {
      location,
      docked,
      onRequestChangeLeftNav,
      onRequestChangeList,
      open,
      style
    } = this.props

    const styles = this.getStyles()

    return (
      <LeftNav
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeLeftNav}
      >
        <div
          style={this.prepareStyles(styles.logo)}
          onTouchTap={this.handleTouchTapHeader}
        >
          Arasaac
        </div>
        <SelectableList
          valueLink={{
            value: location.pathname,
            requestChange: onRequestChangeList
          }}
        >
          <ListItem
                value='/'
                primaryText='Inicio'
          />
          <ListItem
            primaryText='Pictogramas'
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value='/pictogramas/buscar'
                primaryText= {<FormattedMessage {...messages.searchPictograms} />}
              />,
              <ListItem
                value='/pictogramas/api'
                primaryText='Api para desarrolladores'
              />
            ]}
          />
          <ListItem
            primaryText='Programas'
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value='/programas/bingo'
                primaryText='Bingos'
              />,
              <ListItem
                value='/programas/tablero'
                primaryText='Tableros'
              />,
              <ListItem
                value='/programas/dominos'
                primaryText='Dominós'
              />,
              <ListItem
                value='/programas/dominos-encadenados'
                primaryText='Dominós Encadenados'
              />
            ]}
          />
        </SelectableList>
        <Divider />
        <SelectableList
          subheader='Portal de Arasaac'
          valueLink={{
            value: '',
            requestChange: this.handleRequestChangeLink
          }}
        >
          <ListItem
            value='https://github.com/callemall/material-ui'
            primaryText='Noticias'
          />
          <ListItem
            value='http://facebook.github.io/react'
            primaryText='Materiales'
          />
          <ListItem
            value='https://www.google.com/design/spec/material-design/introduction.html'
            primaryText='Software'
          />
          <ListItem
            value='https://www.google.com/design/spec/material-design/introduction.html'
            primaryText='Contactar'
          />
        </SelectableList>
      </LeftNav>
    )
  }
})

export default AppLeftNav
