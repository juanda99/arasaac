import React, {Component, PropTypes} from 'react'
import AutoComplete from 'material-ui/lib/auto-complete'

class SearchBox extends Component {
  render () {
    let dataSource = this.props.dataSource
    let helpText = this.props.helpText
    return (
      <AutoComplete
        floatingLabelText={helpText}
        filter={AutoComplete.fuzzyFilter}
        dataSource={dataSource}
      />
    )
  }
}

SearchBox.propTypes = {
  dataSource: PropTypes.string.isRequired,
  helpText: PropTypes.string.isRequired
}
export default SearchBox
