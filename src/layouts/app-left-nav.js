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
    description: 'Menu item',
    defaultMessage: 'Home'
  },
  pictograms: {
    id: 'menu.pictograms',
    description: 'Menu item',
    defaultMessage: 'Pictograms'
  },
  searchPictograms: {
    id: 'menu.searchPictograms',
    description: 'Menu item',
    defaultMessage: 'Search Pictograms'
  },
  api: {
    id: 'menu.api',
    description: 'Menu item',
    defaultMessage: 'API for developers'
  },
  software: {
    id: 'menu.software',
    description: 'Menu item',
    defaultMessage: 'Software'
  },
  onlineTools: {
    id: 'menu.onlineTools',
    description: 'Menu item',
    defaultMessage: 'Online Tools'
  },
  animationsMaker: {
    id: 'menu.animationsMaker',
    description: 'Menu item',
    defaultMessage: 'Animations Maker'
  },
  symbolsCreator: {
    id: 'menu.symbolsCreator',
    description: 'Menu item',
    defaultMessage: 'Symbols Creator'
  },
  scheduleGenerator: {
    id: 'menu.scheduleGenerator',
    description: 'Menu item',
    defaultMessage: 'Schedule Generator'
  },
  calendarGenerator: {
    id: 'menu.calendarGenerator',
    description: 'Menu item',
    defaultMessage: 'Calendar Generator'
  },
  snakesAndLadders: {
    id: 'menu.snakesAndLadders',
    description: 'Menu item',
    defaultMessage: 'Snakes and Ladders'
  },
  bingo: {
    id: 'menu.bingo',
    description: 'Menu item',
    defaultMessage: 'Bingo'
  },
  dominos: {
    id: 'menu.dominos',
    description: 'Menu item',
    defaultMessage: 'Dominós'
  },
  dominosencadenados: {
    id: 'menu.dominosencadenados',
    description: 'Menu item',
    defaultMessage: 'Dominós Encadenados'
  },
  news: {
    id: 'menu.news',
    description: 'Menu item',
    defaultMessage: 'News'
  },
  materials: {
    id: 'menu.materials',
    description: 'Menu item',
    defaultMessage: 'Materials'
  },
  info: {
    id: 'menu.info',
    description: 'Menu division title',
    defaultMessage: 'About us'
  },
  downloads: {
    id: 'menu.downloads',
    description: 'Menu item',
    defaultMessage: 'Download Catalogs'
  },
  prizes: {
    id: 'menu.prizes',
    description: 'Menu item',
    defaultMessage: 'Prizes'
  },
  contact: {
    id: 'menu.contact',
    description: 'Menu item',
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

  handleRequestChangeLink(event, value) {
    window.location = value
  },

  handleTouchTapHeader() {
    this.props.history.push('/')
    this.setState({
      leftNavOpen: false
    })
  },

  getStyles() {
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

  render() {
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
            primaryText={<FormattedMessage {...messages.pictograms} />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value='/pictograms/search'
                primaryText={<FormattedMessage {...messages.searchPictograms} />}
              />,
              <ListItem
                value='/pictograms/api'
                primaryText={<FormattedMessage {...messages.api} />}
              />,
              <ListItem
                value='/pictograms/catalogs'
                primaryText={<FormattedMessage {...messages.downloads} />}
              />
            ]}
          />
          <ListItem
            value='/materials'
            primaryText={<FormattedMessage {...messages.materials} />}
          />
          <ListItem
            primaryText={<FormattedMessage {...messages.onlineTools} />}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value='/onlinetools/animations-maker'
                primaryText={<FormattedMessage {...messages.animationsMaker} />}
              />,
              <ListItem
                value='/onlineTools/symbols-creator'
                primaryText={<FormattedMessage {...messages.symbolsCreator} />}
              />,
              <ListItem
                value='/onlineTools/schedule-generator'
                primaryText={<FormattedMessage {...messages.scheduleGenerator} />}
              />,
              <ListItem
                value='/onlineTools/calendar-generator'
                primaryText={<FormattedMessage {...messages.calendarGenerator} />}
              />,
              <ListItem
                value='/onlineTools/bingos-creator'
                primaryText={<FormattedMessage {...messages.bingo} />}
              />,
              <ListItem
                value='/onlineTools/snakes-and-ladders'
                primaryText={<FormattedMessage {...messages.snakesAndLadders} />}
              />,
              <ListItem
                value='/onlineTools/dominos'
                primaryText={<FormattedMessage {...messages.dominos} />}
              />,
              <ListItem
                value='/onlineTools/dominos-encadenados'
                primaryText={<FormattedMessage {...messages.dominosencadenados} />}
              />
            ]}
          />
        </SelectableList>
        <ListItem
          value='https://www.google.com/design/spec/material-design/introduction.html'
          primaryText={<FormattedMessage {...messages.software} />}
        />
        <Divider />
        <SelectableList
          subheader={<FormattedMessage {...messages.info} />}
          valueLink={{
            value: '',
            requestChange: this.handleRequestChangeLink
          }}
        >
          <ListItem
            value='https://github.com/callemall/material-ui'
            primaryText={<FormattedMessage {...messages.news} />}
          />
          <ListItem
            value='https://github.com/callemall/material-ui'
            primaryText={<FormattedMessage {...messages.prizes} />}
          />
          <ListItem
            value='https://www.google.com/design/spec/material-design/introduction.html'
            primaryText={<FormattedMessage {...messages.contact} />}
          />
        </SelectableList>
      </LeftNav>
    )
  }
})

export default AppLeftNav
