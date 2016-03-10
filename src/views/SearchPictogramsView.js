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
    this.props.loadKeywords(this.props.locale)
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
    const { keywords } = this.props.keywords
    return (
      <div>
        <div className='row end-xs'>
          <div className='col-xs-6 col-sm-4 col-md-3'>
            <Toggle label='Búsqueda avanzada' />
          </div>
        </div>
        <div className='row start-xs'>
          <SearchBox value={inputValue} helpText={helpText} fullWidth={true} dataSource={keywords} onChange={this.props.changePictogramsKeyword} />
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
  keywords: PropTypes.object,
  locale: PropTypes.string.required,
  // Injected by React Router
  children: PropTypes.node
}

const mapStateToProps = state => {
  const errorMessage = state.errorMessage
  const inputValue = state.searchText
  const { entities: { keywords } } = state
  const {locale} = state

  return {
    errorMessage,
    inputValue,
    locale,
    keywords: keywords[locale]
  }
}

export default connect(mapStateToProps, {resetErrorMessage, changePictogramsKeyword, loadKeywords})(SearchPictogramsView)
