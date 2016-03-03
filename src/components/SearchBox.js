import React, {Component, PropTypes} from 'react'
import AutoComplete from 'material-ui/lib/auto-complete'
import RaisedButton from 'material-ui/lib/raised-button'
import {Link} from 'react-router'

const styles = {
  button: {
    margin: 22,
    border: 0
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleUpdateInput = t => {
    this.props.onChange(t)
  }

  handleSubmit = t => {
    console.log(t)
    this.props.onChange(t)
    let link = `/pictograms/keyword/${t}`
    this.context.router.push(link)
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
    return (
      <div>
        <AutoComplete ref='input' floatingLabelText={helpText} filter={AutoComplete.fuzzyFilter} dataSource={dataSource}
          onNewRequest={this.handleSubmit} onUpdateInput={this.handleUpdateInput} searchText={this.props.value} />
        <RaisedButton label='Search' primary={true} style={styles.button} containerElement={<Link to={link} />}/>
      </div>
    )
  }
}

SearchBox.contextTypes = {
  router: React.PropTypes.object.isRequired
}

SearchBox.propTypes = {
  dataSource: PropTypes.string.isRequired,
  helpText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchBox
