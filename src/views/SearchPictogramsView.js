import React, {Component, PropTypes} from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import SearchBox from 'components/SearchBox.js'
import FilterPictograms from 'components/Filter/Filter'
import Toggle from 'material-ui/lib/toggle'
import { connect } from 'react-redux'
import { resetErrorMessage } from 'redux/modules/error'
import { changePictogramsKeyword } from 'redux/modules/searchText'
import { loadKeywords } from 'redux/modules/keywords'
import { toggleFilter } from 'redux/modules/showFilter'

const messages = defineMessages({
  advancedSearch: {
    id: 'searchPictograms.advancedSearch',
    description: 'label for filtering Search',
    defaultMessage: 'Advanced Search'
  }
})

class SearchPictogramsView extends Component {

  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
    this.renderErrorMessage = this.renderErrorMessage.bind(this)
  }
/*
  static defaultProps = {
    showFilters: false
  }
*/
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
    const {showFilter, filters} = this.props

    const { keywords } = this.props.keywords
    return (
      <div>
        <div className='row end-xs'>
          <div className='col-xs-6 col-sm-4 col-md-3'>
            <Toggle label={<FormattedMessage {...messages.advancedSearch} />} onToggle={this.props.toggleFilter} />
          </div>
        </div>
        <div className='row start-xs'>
          <SearchBox value={inputValue} fullWidth={true} dataSource={keywords} onChange={this.props.changePictogramsKeyword} />
          <hr />
          {this.renderErrorMessage()}
        </div>
        {showFilter? <FilterPictograms filter={filters}/> : null}
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
  inputValue: PropTypes.string,
  keywords: PropTypes.object,
  showFilter: PropTypes.bool,
  locale: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  // Injected by React Router
  children: PropTypes.node


}

const mapStateToProps = state => {
  const errorMessage = state.errorMessage
  const inputValue = state.searchText
  const { entities: { keywords } } = state
  const {locale} = state
  const {gui: {filters}} = state
  const {gui: {showFilter}} = state

  return {
    errorMessage,
    inputValue,
    locale,
    keywords: keywords[locale],
    filters,
    showFilter
  }
}

export default connect(mapStateToProps, {resetErrorMessage, changePictogramsKeyword, loadKeywords, toggleFilter})(SearchPictogramsView)
