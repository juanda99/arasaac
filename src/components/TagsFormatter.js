import React, {Component} from 'react'

class TagsFormatter extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string
  }

  render() {
    let tags = '', formattedTags
    var field = this.props.value
    if (field.length) {
	  tags = field.split(',')
	    tags.forEach(function(tag) {
	    formattedTags = '<span>' + tag + '</span>'
	  })
	}	

    return (
      <div>{tags}</div>
     )
  }
}

export default TagsFormatter
