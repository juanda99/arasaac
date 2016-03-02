import React, {Component, PropTypes} from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import SearchBox from 'components/SearchBox.js'
import SelectCatalog from 'components/SelectCatalog'
import Toggle from 'material-ui/lib/toggle'
import IconButton from 'material-ui/lib/icon-button'
import { connect } from 'react-redux'
import { resetErrorMessage } from 'redux/modules/error'
import { changePictogramsKeyword } from 'redux/modules/searchText'
import { loadKeywords } from 'redux/modules/keywords'
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

class SearchPictogramsView extends Component {

  handleDismissClick(e) {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  componentDidMount() {
    this.props.loadKeywords()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href='#'
          onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children, inputValue } = this.props
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
            <Toggle label='Búsqueda avanzada' />
          </div>
        </div>
        <div className='row start-xs'>
          <SearchBox value={inputValue} helpText={helpText} fullWidth={true} dataSource={fruit} onChange={this.props.changePictogramsKeyword} />
          <hr />
          {this.renderErrorMessage()}
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-4'>
            <IconButton tooltip='bottom-right' touch={true} tooltipPosition='bottom-right'>
              <Filter/>
            </IconButton>
            <SelectCatalog/>
          </div>
        </div>
        {children}
      </div>
    )
  }
}

SearchPictogramsView.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  changePictogramsKeyword: PropTypes.func.isRequired,
  loadKeywords: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

const mapStateToProps = state => {
  const errorMessage = state.errorMessage
  const inputValue = state.searchText
  const { entities: { keywords } } = state
  return {
    errorMessage,
    inputValue,
    keywords
  }
}

export default connect(mapStateToProps, {resetErrorMessage, changePictogramsKeyword, loadKeywords})(SearchPictogramsView)
