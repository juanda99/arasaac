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
  home: {
    id: 'menu.home',
    description: 'Menu option: Homepage',
    defaultMessage: 'Home'
  },
  pictograms: {
    id: 'menu.pictograms',
    description: 'Menu option: Pictograms',
    defaultMessage: 'Pictograms'
  },
  searchPictograms: {
    id: 'menu.searchPictograms',
    description: 'Menu option: Search Pictograms',
    defaultMessage: 'Search Pictograms'
  },
  api: {
    id: 'menu.api',
    description: 'Menu option: API',
    defaultMessage: 'API for developers'
  },
  software: {
    id: 'menu.software',
    description: 'Menu option: Software',
    defaultMessage: 'Software'
  },
  bingo: {
    id: 'menu.bingo',
    description: 'Menu option: Bingo',
    defaultMessage: 'Bingo'
  },
  boards: {
    id: 'menu.boards',
    description: 'Menu option: Boards',
    defaultMessage: 'Boards'
  },
  dominos: {
    id: 'menu.dominos',
    description: 'Menu option: Dominós',
    defaultMessage: 'Dominós'
  },
  dominosencadenados: {
    id: 'menu.dominosencadenados',
    description: 'Menu option: Dominós Encadenados',
    defaultMessage: 'Dominós Encadenados'
  },
  news: {
    id: 'menu.news',
    description: 'Menu option: News',
    defaultMessage: 'News'
  },
  materials: {
    id: 'menu.materials',
    description: 'Menu option: Materials',
    defaultMessage: 'Materials'
  },
  portal: {
    id: 'menu.portal',
    description: 'Menu title: Arasaac Web Portal',
    defaultMessage: 'Arasaac Web Portal'
  },
  contact: {
    id: 'menu.contact',
    description: 'Menu option: Contact',
    defaultMessage: 'Contact us'
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
                primaryText={<FormattedMessage {...messages.home} />}
          />
          <ListItem
            primaryText={<FormattedMessage  {...messages.pictograms} />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value='/pictogramas/buscar'
                primaryText= {<FormattedMessage {...messages.searchPictograms} />}
              />,
              <ListItem
                value='/pictogramas/api'
                primaryText={<FormattedMessage {...messages.api} />}
              />
            ]}
          />
          <ListItem
            primaryText={<FormattedMessage {...messages.software} />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value='/programas/bingo'
                primaryText={<FormattedMessage  {...messages.bingo} />}
              />,
              <ListItem
                value='/programas/tablero'
                primaryText={<FormattedMessage  {...messages.boards} />}
              />,
              <ListItem
                value='/programas/dominos'
                primaryText={<FormattedMessage  {...messages.dominos} />}
              />,
              <ListItem
                value='/programas/dominos-encadenados'
                primaryText={<FormattedMessage  {...messages.dominosencadenados} />}
              />
            ]}
          />
        </SelectableList>
        <Divider />
        <SelectableList
          subheader={<FormattedMessage  {...messages.portal} />}
          valueLink={{
            value: '',
            requestChange: this.handleRequestChangeLink
          }}
        >
          <ListItem
            value='https://github.com/callemall/material-ui'
            primaryText={<FormattedMessage  {...messages.news} />}
          />
          <ListItem
            value='http://facebook.github.io/react'
            primaryText={<FormattedMessage  {...messages.materials} />}
          />
          <ListItem
            value='https://www.google.com/design/spec/material-design/introduction.html'
            primaryText={<FormattedMessage  {...messages.software} />}
          />
          <ListItem
            value='https://www.google.com/design/spec/material-design/introduction.html'
            primaryText={<FormattedMessage  {...messages.contact} />}
          />
        </SelectableList>
      </LeftNav>
    )
  }
})

export default AppLeftNav
