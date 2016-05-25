import React, {Component} from 'react'
var Masonry = require('react-masonry-component')
var masonryOptions = {
  transitionDuration: 0
}

export default class Gallery extends Component {
  render() {
    var elements = [
      {id: 1, src: 'http://arasaac.org/classes/img/thumbnail.php?i=c2l6ZT0zMDAmcnV0YT0uLi8uLi9yZXBvc2l0b3Jpby9vcmlnaW5hbGVzLzMwNjQzLnBuZw=='},
      {id: 2, src: 'http://www.arasaac.org/classes/img/thumbnail.php?i=c2l6ZT0zMDAmcnV0YT0uLi8uLi9yZXBvc2l0b3Jpby9vcmlnaW5hbGVzLzMwNjQ3LnBuZw=='}
    ]
    var childElements = elements.map(function(element) {
      return (
        <li className='image-element-class'>
          <img src={element.src} />
        </li>
      )
    })
    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
      >
      {childElements}
      </Masonry>
    )
  }
}
