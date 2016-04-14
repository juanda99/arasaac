import React, {Component, PropTypes} from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import SearchBox from 'components/SearchBox.js'
import FilterPictograms from 'components/FilterPictograms'
import Toggle from 'material-ui/lib/toggle'
import { connect } from 'react-redux'
import { resetErrorMessage } from 'redux/modules/error'
import { changePictogramsKeyword } from 'redux/modules/searchText'
import { loadKeywords } from 'redux/modules/keywords'

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
    this.toggleFilter = this.toggleFilter.bind(this)
    this.renderErrorMessage = this.renderErrorMessage.bind(this)
    this.state = {
      showFilters: false
    }
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

  toggleFilter() {
    this.setState({ showFilters: !this.state.showFilters })
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

    const { keywords } = this.props.keywords
    return (
      <div>
        <div className='row end-xs'>
          <div className='col-xs-6 col-sm-4 col-md-3'>
            <Toggle label={<FormattedMessage {...messages.advancedSearch} />} onToggle={this.toggleFilter} />
          </div>
        </div>
        <div className='row start-xs'>
          <SearchBox value={inputValue} fullWidth={true} dataSource={keywords} onChange={this.props.changePictogramsKeyword} />
          <hr />
          {this.renderErrorMessage()}
        </div>
        {this.state.showFilters ? <FilterPictograms /> : null}
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
  showFilters: PropTypes.boolean,
  locale: PropTypes.string.isRequired,
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
