import React, {Component, PropTypes} from 'react'
import IconButton from 'material-ui/IconButton'
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border'
import ToggleStar from 'material-ui/svg-icons/toggle/star'

export default class SelectButton extends Component {

  constructor(props) {
    super(props)
    this.state = {active: false}
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  // onClick = () => this.setState({active: !this.state.active})
  handleOnClick() {
    this.setState({active: !this.state.active})
  }

  render() {
    let active = this.state.active
    let {style} = this.props
    let {color} = this.props
    return (
      <IconButton onClick={this.handleOnClick} style={style}>
        {active ? <ToggleStar color={color} /> : <ToggleStarBorder color={color} />}
      </IconButton>
    )
  }
}

SelectButton.propTypes = {
  style: PropTypes.object.isRequired,
  color: PropTypes.string
}
