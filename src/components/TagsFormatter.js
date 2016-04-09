import React, {Component} from 'react'

class TagsFormatter extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string
  }

  render() {
    let tags = ''
    let formattedTags = ''
    var field = this.props.value
    if (field.length) {
      tags = field.split(',')
      tags.forEach(function(tag) {
        formattedTags = formattedTags + '<span>' + tag + '</span>'
      })
    }
    return (
      <div dangerouslySetInnerHTML={{__html: formattedTags}}></div>
     )
  }
}

export default TagsFormatter
