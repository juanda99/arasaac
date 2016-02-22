import React, {Component} from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import SearchBox from 'components/SearchBox.js'
import DropdownCatalog from 'components/DropdownCatalog'

import FloatingActionButton from 'material-ui/lib/floating-action-button'
import ActionSearch from 'material-ui/lib/svg-icons/action/search'
import ActionSettings from 'material-ui/lib/svg-icons/action/settings'

const messages = defineMessages({
  search: {
    id: 'pictograms.search',
    description: 'searchBox message',
    defaultMessage: 'Enter search text'
  },
  heading: {
    id: 'pictograms.heading',
    description: 'h1 text',
    defaultMessage: 'Search Pictograms'
  }
})

const styles = {
  button: {
    margin: 12,
  }
};

export class SearchPictogramsView extends Component {
  render () {
  const helpText = <FormattedMessage {...messages.search} />
  const fruit = [
    'Apple', 'Apricot', 'Avocado',
    'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    'Boysenberry', 'Blood Orange',
    'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
    'Coconut', 'Cranberry', 'Clementine',
    'Damson', 'Date', 'Dragonfruit', 'Durian',
    'Elderberry',
    'Feijoa', 'Fig',
    'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Honeydew', 'Huckleberry',
    'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
    'Kiwi fruit', 'Kumquat',
    'Lemon', 'Lime', 'Loquat', 'Lychee',
    'Nectarine',
    'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
    'Olive', 'Orange',
    'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
    'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
    'Quince',
    'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
    'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
    'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
    'Ugli fruit',
    'Watermelon'
  ]
    return (
      <div className='row center-xs start-sm'>
      <div class='col-sm-offset-3'>
        <SearchBox helpText={helpText} fullWidth={true} dataSource={fruit} />
        <FloatingActionButton style={styles.button}>
          <ActionSearch />
        </FloatingActionButton>
        <div>
          <DropdownCatalog underlineStyle={{margin: '5px'}} />

          <FloatingActionButton secondary={true} style={styles.button}>
            <ActionSettings />
          </FloatingActionButton>
        </div>
        <div>
          <DropdownCatalog/>
          <DropdownCatalog/>
          <DropdownCatalog/>
        </div>
      </div>
      </div>
    )
  }
}

export default SearchPictogramsView
