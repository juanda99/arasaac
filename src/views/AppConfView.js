import React, {Component, PropTypes} from 'react'
import ToggleFilter from 'components/ToggleFilter'
import { toggleFilter } from 'redux/modules/filters'
import { connect } from 'react-redux'
import { defineMessages, FormattedMessage } from 'react-intl'
import FullWidthSection from 'components/full-width-section'

const messages = defineMessages({
  appConfiguration: {
    id: 'appconf.title',
    description: 'Title for Arasaac configuration view',
    defaultMessage: 'Arasaac configuration'
  },
  searchPictograms: {
    id: 'menu.searchPictograms',
    description: 'Menu item',
    defaultMessage: 'Search Pictograms'
  },
  filterCatalog: {
    id: 'appconf.filterCatalog',
    description: 'Conf option filter by Catalog',
    defaultMessage: 'Filter by Catalog'
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

// import { map, keyBy } from 'lodash/zip'

class AppConfView extends Component {
  render() {
    const { toggleFilter } = this.props
    return (
      <FullWidthSection useContent={true}>
        <div className='row'>
          <h1>{<FormattedMessage {...messages.appConfiguration} />}</h1>
        </div>
        <div className='row'>
          <h2>{<FormattedMessage {...messages.searchPictograms} />}</h2>
        </div>
        <div className='row'>
          <div className='col-xs-6 col-sm-12'>
            <h3>Filters</h3>
            <p>Select the filters you want to enable for searching pictograms</p>
            <ToggleFilter label={<FormattedMessage {...messages.filterCatalog} />} onToggle={this.props.toggleFilter} filter='catalog'/>
          </div>
        </div>
      </FullWidthSection>
    )
  }
}

AppConfView.propTypes = {
  toggleFilter: React.PropTypes.func.isRequired
}

export default connect(null, {toggleFilter})(AppConfView)
