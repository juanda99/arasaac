import React, {Component, PropTypes} from 'react'
import ToggleFilter from 'components/ToggleFilter'
import { actions } from 'redux/modules/filters'
import { connect } from 'react-redux'
import { defineMessages, FormattedMessage } from 'react-intl'
import FullWidthSection from 'components/full-width-section'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

const messages = defineMessages({
  appConfiguration: {
    id: 'appconf.title',
    description: 'Title for Arasaac configuration view',
    defaultMessage: 'Arasaac configuration'
  },
  searchPictograms: {
    id: 'appconf.searchPictograms',
    description: 'Menu item',
    defaultMessage: 'Search Pictograms'
  },
  filterCatalog: {
    id: 'appconf.filterCatalog',
    description: 'Conf option filter by Catalog',
    defaultMessage: 'Catalog'
  },
  filterLicense: {
    id: 'appconf.filterLicense',
    description: 'Conf option filter by License',
    defaultMessage: 'License'
  },
  filterSize: {
    id: 'appconf.filterSize',
    description: 'Conf option filter by Size',
    defaultMessage: 'Size'
  }
})

// import { map, keyBy } from 'lodash/zip'
const style = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  width: '100%'
}

class AppConfView extends Component {
  render() {
    const { toggleFilter } = this.props
    const filter = this.props.filters
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
            <Paper style={style} zDepth={2} rounded={false}>
              <h3>Filters</h3>
              <p>Select the filters you want to enable for searching pictograms</p>
              <ToggleFilter label={<FormattedMessage {...messages.filterCatalog} />} onToggle={actions.toggleFilter} filter='catalog'
                active={filter.catalog} / >
              <ToggleFilter label={<FormattedMessage {...messages.filterLicense} />} onToggle={actions.toggleFilter} filter='license'
                active={filter.license} / >
              <ToggleFilter label={<FormattedMessage {...messages.filterSize} />} onToggle={actions.toggleFilter} filter='size'
                active={filter.size} / >
              <Divider />
            </Paper>
          </div>
        </div>
      </FullWidthSection>
    )
  }
}

AppConfView.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  const {gui: {filters}} = state

  return {
    filters
  }
}

export default connect(mapStateToProps, {actions})(AppConfView)
