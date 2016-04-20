import React, {Component, PropTypes} from 'react'
import Toggle from 'material-ui/lib/toggle'

export default class ToggleFilter extends Component {
  static propTypes = {
    label: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  }

  handleToggle() {
    this.props.onToggle(this.props.filter)
  }

  render() {
    const label = this.props.label
    return (
      <Toggle style={{ width: 200 }} label={label} onToggle={this.handleToggle} />
    )
  }
}

