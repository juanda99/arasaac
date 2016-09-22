import React, {Component} from 'react'
import PictogramCard from 'components/PictogramCard'
var Masonry = require('react-masonry-component')
var masonryOptions = {
  transitionDuration: '1s'
}

const styles = {
  paper: {
    margin: 5
  },
  masonry:
  {
    listStyleType: 'none'
  }
}

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // console.log (this)
  }
  render() {
    var elements = [
      {id: 1, title: 'imagen1', src: 'http://arasaac.org/classes/img/thumbnail.php?i=c2l6ZT0zMDAmcnV0YT0uLi8uLi9yZXBvc2l0b3Jpby9vcmlnaW5hbGVzLzMwNjQzLnBuZw=='},
      {id: 2, title: 'imagen2', src: 'http://www.arasaac.org/classes/img/thumbnail.php?i=c2l6ZT0zMDAmcnV0YT0uLi8uLi9yZXBvc2l0b3Jpby9vcmlnaW5hbGVzLzMwNjQ3LnBuZw=='}
    ]
    var childElements = elements.map(function(element) {
      return (
        <li style={{margin: 5}} key={element.id} className='image-element-class'>
          <PictogramCard title={element.title} img={element.src} />
          <p>Hola que tal todo? ad ñlajdf añldfkja ñlfkjañdl jkadlñfk adlñfkjalñkjasdlñjadñflj ñj</p>
        </li>
      )
    })
    return (
      <div>
        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          onClick={this.handleClick}
          style={styles.masonry}
        >
        {childElements}
        </Masonry>
      </div>
    )
  }
}
