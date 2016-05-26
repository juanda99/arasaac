import React, {Component, PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const styles = {
  card: {
    position: 'relative',
    width: '300px'
  },
  menu: {
    position: 'absolute',
    right: '10px',
    marginTop: '-10px'
  }
}

export default class PictogramCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {shadow: 1}
    this.onMouseOver = this.onMouseOver.bind(this)
  }
  onMouseOver = () => this.setState({shadow: 3})
  onMouseOut = () => this.setState({shadow: 1})

  render() {
    return (
      <Card style={styles.card} containerStyle={{width: 300}} zDepth={this.state.shadow}
        onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <CardHeader title={this.props.title} subtitle='Subtitle'>
          <IconMenu style={styles.menu}
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText='Refresh' />
            <MenuItem primaryText='Send feedback' />
          </IconMenu>
        </CardHeader>
        <CardMedia>
          <img src={this.props.img} />
        </CardMedia>
        <CardText>
          p
        </CardText>
        <CardActions>
          <FlatButton label='Action1' />
          <FlatButton label='Action2' />
        </CardActions>
      </Card>
    )
  }
}
