import React, {Component} from 'react'

class TagsFormatter extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string
  }

  render() {
    let tags, formattedTags
    tags = this.props.value.split(',')
    tags.forEach(function(tag) {
      formattedTags = '<span>' + tag + '</span>'
    })

    return (
      <div>{tags}</div>
     )
  }
}

export default TagsFormatter
