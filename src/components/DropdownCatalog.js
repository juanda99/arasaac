import React, {Component} from 'react'
import DropDownMenu from 'material-ui/lib/DropDownMenu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  allCatalogs: {
    id: 'catalog.all',
    description: 'Menu choose catalog',
    defaultMessage: 'All catalogs'
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
    id: 'catalog.colorPictograms',
    description: 'Menu choose catalog',
    defaultMessage: 'LSE Videos'
  },
  lseColor: {
    id: 'catalog.colorPictograms',
    description: 'Menu choose catalog',
    defaultMessage: 'LSE Color'
  }
})

class DropDownMenuCatalog extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} primaryText={<FormattedMessage {...messages.allCatalogs} />} />
        <MenuItem value={2} primaryText={<FormattedMessage {...messages.colorPictograms} />} />
        <MenuItem value={3} primaryText={<FormattedMessage {...messages.blackAndWhitePictograms} />} />
        <MenuItem value={4} primaryText={<FormattedMessage {...messages.pictures} />} />
        <MenuItem value={5} primaryText={<FormattedMessage {...messages.lseVideos} />} />
        <MenuItem value={5} primaryText={<FormattedMessage {...messages.lseColor} />} />
      </DropDownMenu>
    );
  }
}

export default DropDownMenuCatalog