import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { defineMessages, FormattedMessage } from 'react-intl'
import FilterIcon from './FilterIcon'

const messages = defineMessages({
  choose: {
    id: 'licenses.choose',
    description: 'Menu choose license',
    defaultMessage: 'Usage rights'
  },
  reuseMofified: {
    id: 'license.reuseModified',
    description: 'Menu choose license',
    defaultMessage: 'Labeled for reuse with modification'
  },
  reuse: {
    id: 'license.reuse',
    description: 'Menu choose license',
    defaultMessage: 'Labeled for reuse'
  },
  nonCommercialModified: {
    id: 'license.nonCommercialModified',
    description: 'Menu choose license',
    defaultMessage: 'Labeled for noncommercial reuse with modification'
  },
  nonCommercial: {
    id: 'license.nonCommercial',
    description: 'Menu choose license',
    defaultMessage: 'Labeled for noncommercial reuse'
  },
  all: {
    id: 'license.all',
    description: 'Menu choose license',
    defaultMessage: 'Not filtered by license'
  }
})

class SelectLicense extends Component {

  constructor(props) {
    super(props)
    this.state = {value: 1}
  }

  getStyles() {
    return {
      select: {
        fontSize: 13,
        marginLeft: this.state.value !== 1 ? 0 : 48,
        width: '350px'
      }
    }
  }

  handleChange = (event, index, value) => this.setState({value})

  render() {
    const styles = this.getStyles()
    return (
      <span>
        {this.state.value !== 1 ? <FilterIcon /> : null}
        <SelectField autoWidth={true} value={this.state.value} onChange={this.handleChange} style={styles.select}>
          <MenuItem value={1} label={<FormattedMessage {...messages.choose} />} primaryText={<FormattedMessage {...messages.all} />} />
          <MenuItem value={2} primaryText={<FormattedMessage {...messages.reuseMofified} />} />
          <MenuItem value={3} primaryText={<FormattedMessage {...messages.reuse} />} />
          <MenuItem value={4} primaryText={<FormattedMessage {...messages.nonCommercialModified} />} />
          <MenuItem value={5} primaryText={<FormattedMessage {...messages.nonCommercial} />} />
        </SelectField>
      </span>
    )
  }
}

export default SelectLicense
