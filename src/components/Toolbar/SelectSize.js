import React, {Component} from 'react'
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { defineMessages, FormattedMessage } from 'react-intl'
import FilterIcon from 'components/Toolbar/FilterIcon'

const messages = defineMessages({
  allCatalogs: {
    id: 'catalog.all',
    description: 'Menu choose catalog',
    defaultMessage: 'All catalogs'
  },
  catalog: {
    id: 'catalog',
    description: 'Menu choose catalog initial text',
    defaultMessage: 'Catalog'
  },
  colorPictograms: {
    id: 'catalog.colorPictograms',
    description: 'Menu choose catalog',
    defaultMessage: 'Color pictograms'
  },
  blackAndWhitePictograms: {
    id: 'catalog.blackAndWhitePictograms',
    description: 'Menu choose catalog',
    defaultMessage: 'Black and white pictograms'
  },
  pictures: {
    id: 'catalog.pictures',
    description: 'Menu choose catalog',
    defaultMessage: 'Pictures'
  },
  lseVideos: {
    id: 'catalog.lseVideos',
    description: 'Menu choose catalog',
    defaultMessage: 'LSE Videos'
  },
  lseColor: {
    id: 'catalog.lseColor',
    description: 'Menu choose catalog',
    defaultMessage: 'LSE Color'
  }
})

class SelectCatalog extends Component {

  constructor(props) {
    super(props)
    this.state = {value: 1}
  }

  getStyles() {
    return {
      select: {
        fontSize: 14,
        marginRight: 30,
        marginLeft: this.state.value !== 1 ? 0 : 48
      }
    }
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    const styles = this.getStyles()
    return (
      <span>
        {this.state.value !== 1 ? <FilterIcon /> : null}
        <SelectField autoWidth={true} value={this.state.value} onChange={this.handleChange} style={styles.select}>
          <MenuItem value={1} label={<FormattedMessage {...messages.catalog} />} primaryText={<FormattedMessage {...messages.allCatalogs} />} />
          <MenuItem value={2} primaryText={<FormattedMessage {...messages.colorPictograms} />} />
          <MenuItem value={3} primaryText={<FormattedMessage {...messages.blackAndWhitePictograms} />} />
          <MenuItem value={4} primaryText={<FormattedMessage {...messages.pictures} />} />
          <MenuItem value={5} primaryText={<FormattedMessage {...messages.lseVideos} />} />
          <MenuItem value={5} primaryText={<FormattedMessage {...messages.lseColor} />} />
        </SelectField>
      </span>
    )
  }
}

export default SelectCatalog
