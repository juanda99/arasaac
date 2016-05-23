import React, { Component, PropTypes } from 'react'
import Drawer from 'material-ui/Drawer'
import {List, ListItem, MakeSelectable} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import {spacing, typography, zIndex} from 'material-ui/styles'
import { defineMessages, FormattedMessage } from 'react-intl'
import {lightGreen500} from 'material-ui/styles/colors'

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

const SelectableList = MakeSelectable(List)

const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: lightGreen500,
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8
  }
}

class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    onChangeList: PropTypes.func.isRequired,
    onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  state = {
    muiVersions: []
  }

  handleRequestChangeLink = (event, value) => {
    window.location = value
  }

  handleTouchTapHeader = () => {
    this.context.router.push('/')
    this.props.onRequestChangeNavDrawer(false)
  }

  render() {
    const {
      location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style
    } = this.props


    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
       // containerStyle={{zIndex: zIndex.drawer - 100}}
       containerStyle={{zIndex: 1200}}
      >

        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          Arasaac
        </div>
        <SelectableList value={location.pathname} onChange={onChangeList}

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
                value='/onlinetools/symbols-creator'
                primaryText={<FormattedMessage {...messages.symbolsCreator} />}
              />,
              <ListItem
                value='/onlinetools/schedule-generator'
                primaryText={<FormattedMessage {...messages.scheduleGenerator} />}
              />,
              <ListItem
                value='/onlinetools/calendar-generator'
                primaryText={<FormattedMessage {...messages.calendarGenerator} />}
              />,
              <ListItem
                value='/onlinetools/bingos-creator'
                primaryText={<FormattedMessage {...messages.bingo} />}
              />,
              <ListItem
                value='/onlinetools/snakes-and-ladders'
                primaryText={<FormattedMessage {...messages.snakesAndLadders} />}
              />,
              <ListItem
                value='/onlinetools/dominos'
                primaryText={<FormattedMessage {...messages.dominos} />}
              />,
              <ListItem
                value='/onlinetools/dominos-encadenados'
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

        <SelectableList value='' onChange={this.handleRequestChangeLink} >
          <Subheader>{<FormattedMessage {...messages.info} />}</Subheader>
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
      </Drawer>
    )
  }
}

export default AppNavDrawer
