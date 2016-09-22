import React, {Component, PropTypes} from 'react'

import React, {Component, PropTypes} from 'react'

export default class Tagger extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div></div>
    )
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
