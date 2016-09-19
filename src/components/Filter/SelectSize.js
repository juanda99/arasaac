import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { defineMessages, FormattedMessage } from 'react-intl'
import FilterIcon from './FilterIcon'

const messages = defineMessages({
  size: {
    id: 'size.choose',
    description: 'Menu choose catalog',
    defaultMessage: 'Size'
  },
  any: {
    id: 'size.any',
    description: 'Menu choose any Size',
    defaultMessage: 'Any size'
  },
  large: {
    id: 'size.large',
    description: 'Menu display large size',
    defaultMessage: 'Large'
  },
  medium: {
    id: 'size.medium',
    description: 'Menu display medium size',
    defaultMessage: 'Medium'
  },
  small: {
    id: 'size.small',
    description: 'Menu choose display small size',
    defaultMessage: 'Small'
  },
  largeChoose: {
    id: 'size.largeChoose',
    description: 'Menu choose large size',
    defaultMessage: 'Large, wider than 1000px'
  },
  mediumChoose: {
    id: 'size.mediumChoose',
    description: 'Menu choose meium size',
    defaultMessage: 'Medium, width between 500px and 1000px'
  },
  smallChoose: {
    id: 'size.smallChoose',
    description: 'Menu choose small size',
    defaultMessage: 'Small, wide less than 500px'
  }
})

class SelectCatalog extends Component {

  constructor(props) {
    super(props)
    this.state = {value: 1}
  }

  getStyles() {
    return {
      select: {
        fontSize: 13,
        width: '350px',
        marginLeft: this.state.value !== 1 ? 0 : 48
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
          <MenuItem value={1} label={<FormattedMessage {...messages.size} />} primaryText={<FormattedMessage {...messages.any} />} />
          <MenuItem value={2} label={<FormattedMessage {...messages.large} />} primaryText={<FormattedMessage {...messages.largeChoose} />} />
          <MenuItem value={3} label={<FormattedMessage {...messages.medium} />} primaryText={<FormattedMessage {...messages.mediumChoose} />} />
          <MenuItem value={4} label={<FormattedMessage {...messages.small} />} primaryText={<FormattedMessage {...messages.smallChoose} />} />
        </SelectField>
      </span>
    )
  }
}

export default SelectCatalog
