import React, {Component} from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import SearchBox from 'components/SearchBox.js'
import SelectCatalog from 'components/SelectCatalog'
import RaisedButton from 'material-ui/lib/raised-button'
import Toggle from 'material-ui/lib/toggle'
import IconButton from 'material-ui/lib/icon-button'
// import ActionGrade from 'material-ui/lib/svg-icons/action/grade'
import Filter from 'svg-icons/filter'

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
    margin: 22
  },
  dropdown: {
    paddingLeft: 0,
    backgroundColor: 'red'
  }
}

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
      <div>
        <div className='row end-xs'>
          <div className='col-xs-6 col-sm-4 col-md-3'>
            <Toggle label='Búsqueda avanzada' style={styles.toggle} />
          </div>
        </div>
        <div className='row center-xs start-sm'>

          <SearchBox helpText={helpText} fullWidth={true} dataSource={fruit} />
          <RaisedButton label='Search' primary={true} style={styles.button} />
        </div>
        <div className='row'>
          <IconButton tooltip='bottom-right' touch={true} tooltipPosition='bottom-right'>
            <Filter/>
          </IconButton>
          <SelectCatalog/>
          <SelectCatalog/>
          <SelectCatalog/>
        </div>
      </div>
    )
  }
}

export default SearchPictogramsView
