import React, {Component, PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import PictogramMenu from './PictogramMenu'

const styles = {
  card: {
    position: 'relative',
    width: '400px'
  },
  menu: {
    position: 'absolute',
    right: '10px',
    top: '15px'
  },
  cardHeader: {
    paddingBottom: '40px'
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
  }
  onMouseOver = () => this.setState({shadow: 3})
  onMouseOut = () => this.setState({shadow: 1})

  render() {
    return (
      <Card style={styles.card} containerStyle={{width: 400}} zDepth={this.state.shadow}
        onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <CardHeader />
        <PictogramMenu style={styles.menu} />
        <CardMedia>
          <img src={this.props.img} />
        </CardMedia>
        <CardText>
          {this.props.title}
        </CardText>
        <CardActions>
          <FlatButton label='Tag1' />
          <FlatButton label='Tag2' />
                    <FlatButton label='Tag1' />
          <FlatButton label='Tag2' />
                    <FlatButton label='Tag1' />
          <FlatButton label='Tag2ASDFADFASDFASF' />
        </CardActions>
      </Card>
    )
  }
}
