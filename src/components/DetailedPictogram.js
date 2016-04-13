import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class DetailedPictogram extends Component {

  render() {
    const { pictogram } = this.props
    const { name, tags, creator } = pictogram

    return (
      <div>
        <h3>
          <Link to={`/pictogram/${name}`}>
            {name}
          </Link>
          {' by '}
          <Link to={`colaborator/${login}`}>
            {login}
          </Link>
        </h3>
        {description &&
          <p>{description}</p>
        }
      </div>
    )
  }
}

DetailedPictogram.propTypes = {
  pictogram: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tags: PropTypes.array,
    creator: PropTypes.string
  }).isRequired
}
