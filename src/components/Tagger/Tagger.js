import React, {Component, PropTypes} from 'react'
import Select from 'react-select'
// lo podríamos cambiar a los scss que están disponibles en el componente
import 'react-select/dist/react-select.css'
import RaisedButton from 'material-ui/RaisedButton'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  bingo: {
    id: 'button.modifyKeywords',
    description: 'Label for modify keywords button',
    defaultMessage: 'Update keywords'
  }
})

const KEYWORDS = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel' },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' }
]

export default class Tagger extends Component {
  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      options: KEYWORDS,
      value: [],
      disabled: true,
      buttonText: "modificar"
    }
    this.onChange = this.onChange.bind(this)
    this.enableEdit = this.enableEdit.bind(this)
  }

  componentDidMount() {
    this.editButton = React.findDOMNode(this.refs.editButton)
  }

  onChange(value) {
    console.log('You\'ve selected:', value)
    this.setState({ value })
  }
  enableEdit() {
    
    this.setState({disabled: !this.state.disabled, buttonText: "Guardar"})
  }

  render() {
    return (
      <div>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <p>adfadfdf</p>
        <Select simpleValue disabled={this.state.disabled} value={this.state.value}
          name='form-field-name' options={this.state.options} onChange={this.onChange} multi={true}
          placeholder='Selecciona las etiquetas' />
        <RaisedButton onClick={this.enableEdit} label={this.state.buttonText} primary={true} ref='editButton' />
      </div>
    )
  }
}

