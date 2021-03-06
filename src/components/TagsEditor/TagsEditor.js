import React, {Component} from 'react'
import Select from 'react-select'
import ReactDOM from 'react-dom'
require('./TagsEditor.scss')

const ExcelColumn = {
  name: React.PropTypes.string.isRequired,
  key: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  filterable: React.PropTypes.bool
}

class TagsEditor extends Component {

  static propTypes = {
    options: React.PropTypes.array.isRequired,
    column: React.PropTypes.shape(ExcelColumn),
    value: React.PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.hasResults = this.hasResults.bind(this)
  }

  getInputNode() {
    return ReactDOM.findDOMNode(this)
  }

  getValue() {
    let updated = {}
    updated[this.props.column.key] = this.state.value
    return updated
  }

  handleSelectChange(value) {
    this.setState({value})
  }

  hasResults() {
    return this.state.value.length > 0
  }

  render() {
    let options = []
    this.props.options.forEach(function(name) {
      if (typeof (name) === 'string') {
        options.push({label: name, value: name})
      } else {
        options.push({label: name.caption, value: name.id})
      }
    })
    return (
      <Select refs='multiselect' multi simpleValue value={this.state.value} options={options}
        placeholder='Select your favourite(s)' onChange={this.handleSelectChange} />
    )
  }
}

export default TagsEditor
