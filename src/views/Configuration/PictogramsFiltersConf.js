import React from 'react'
import ToggleFilter from 'containers/ToggleFilter'
import { defineMessages, FormattedMessage } from 'react-intl'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'

const messages = defineMessages({
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
  },
  searchPictograms: {
    id: 'appconf.searchPictograms',
    description: 'Menu item',
    defaultMessage: 'Search Pictograms'
  }
})

const style = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
  width: '100%'
}

const PictogramsFiltersConf = () => (
  <div>
    <div className='row'>
      <h2>{<FormattedMessage {...messages.searchPictograms} />}</h2>
    </div>
    <div className='row'>
      <div className='col-xs-6 col-sm-12'>
        <Paper style={style} zDepth={2} rounded={false}>
          <h3>Filters</h3>
          <p>Select the filters you want to enable for searching pictograms</p>
          <ToggleFilter label={<FormattedMessage {...messages.filterCatalog} />} filter='catalog' />
          <ToggleFilter label={<FormattedMessage {...messages.filterLicense} />} filter='license' />
          <ToggleFilter label={<FormattedMessage {...messages.filterSize} />} filter='size' />
          <Divider />
        </Paper>
      </div>
    </div>
  </div>
)

export default PictogramsFiltersConf
