import React, {Component, PropTypes} from 'react'
import {defineMessages, injectIntl, intlShape} from 'react-intl'
<<<<<<< HEAD
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'
=======
>>>>>>> da863c4d6609d9d3f2893c02b1ecd8429cc9de31
const messages = defineMessages({
  spanish: {
    id: 'languageSelector.spanish',
    description: 'Select language',
    defaultMessage: 'Spanish'
  },
  english: {
    id: 'languageSelector.english',
    description: 'Select language',
    defaultMessage: 'English'
  },
  french: {
    id: 'languageSelector.french',
    description: 'Select language',
    defaultMessage: 'French'
  },
  chooseLanguage: {
    id: 'languageSelector.choose',
    description: 'Select language',
    defaultMessage: 'Choose your language'
  }
})

class LanguageSelector extends Component {
    constructor (props) {
      super(props)
      this.state = {value: this.props.intl.locale}
    }
    handleChange = (event, index, value) => {
      this.setState({value: value})
      this.props.onChange(value)
    };
    render () {
      const {formatMessage} = this.props.intl
      return (
<<<<<<< HEAD
        <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText={formatMessage(messages.chooseLanguage)}>
            <MenuItem value={'es'} primaryText={formatMessage(messages.spanish)}/>
            <MenuItem value={'fr'} primaryText={formatMessage(messages.french)}/>
            <MenuItem value={'en'} primaryText={formatMessage(messages.english)}/>
        </SelectField>
=======
        <select defaultValue={locale} onChange={(e) => this.handleChange(e)}>
                <option id='es' value='es'>{formatMessage(messages.spanish)}</option>
                <option id='fr' value='fr'>{formatMessage(messages.french)}</option>
                <option id='en' value='en'>{formatMessage(messages.english)}</option>
        </select>
>>>>>>> da863c4d6609d9d3f2893c02b1ecd8429cc9de31
        )
    }
  }
LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onChange: PropTypes.func.isRequired
}
export default injectIntl(LanguageSelector)
