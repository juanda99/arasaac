import React, {Component, PropTypes} from 'react'
import {defineMessages, injectIntl, intlShape} from 'react-intl'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, index, value) => {
    this.props.onChange(value)
  };

  render() {
    const {formatMessage} = this.props.intl
    return (
      <SelectField value={this.props.intl.locale} onChange={this.handleChange} floatingLabelText={formatMessage(messages.chooseLanguage)}>
        <MenuItem value={'es'} primaryText={formatMessage(messages.spanish)} />
        <MenuItem value={'fr'} primaryText={formatMessage(messages.french)} />
        <MenuItem value={'en'} primaryText={formatMessage(messages.english)} />
      </SelectField>

        )
  }
  }
LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onChange: PropTypes.func.isRequired
}
export default injectIntl(LanguageSelector)
