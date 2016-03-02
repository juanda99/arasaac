import React, {Component, PropTypes} from 'react'
import AutoComplete from 'material-ui/lib/auto-complete'
import RaisedButton from 'material-ui/lib/raised-button'

const styles = {
  button: {
    margin: 22
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    // this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleUpdateInput = t => {
    this.props.onChange(t)
  }

  /* Como capturar el enter para pulsar el botón?????
  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this.handleUpdateInput(this.props.value)
    }
  }
  */

  render() {
    let dataSource = this.props.dataSource
    let helpText = this.props.helpText
    let link = `/pictograms/keyword/${this.props.value}`
    console.log('A ver .....' + this.props.value)
    return (
      <div>
        <AutoComplete ref='input' floatingLabelText={helpText} filter={AutoComplete.fuzzyFilter} dataSource={dataSource}
          onNewRequest={this.handleUpdateInput} onUpdateInput={this.handleUpdateInput} searchText={this.props.value} />
        <RaisedButton label='Search' primary={true} style={styles.button} linkButton={true} href={link} />
      </div>
    )
  }
}

SearchBox.propTypes = {
  dataSource: PropTypes.string.isRequired,
  helpText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchBox
