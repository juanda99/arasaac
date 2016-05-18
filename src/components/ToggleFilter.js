import React, {Component, PropTypes} from 'react'
import Toggle from 'material-ui/Toggle';

export default class ToggleFilter extends Component {
  static propTypes = {
    label: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.props.onToggle(this.props.filter)
  }

  render() {
    const label = this.props.label
    const active = this.props.active
    return (
      <Toggle style={{ width: 100 }} label={label} onToggle={this.handleToggle}
        defaultToggled={active}/>
    )
  }
}
