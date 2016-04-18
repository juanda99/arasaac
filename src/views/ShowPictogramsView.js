import React, {Component, PropTypes} from 'react'
import { loadPictograms } from 'redux/modules/pictograms'
import { changePictogramsLayout } from 'redux/modules/layout'
import {Pictogram} from 'components/Pictogram'
import { connect } from 'react-redux'
import List from 'components/List'
import ToolbarPictograms from 'components/Toolbar/ToolbarPictograms'
// import { map, keyBy } from 'lodash/zip'

function loadData(props) {
  const { searchText } = props
  props.loadPictograms(searchText)
}

class ShowPictogramsView extends Component {

  constructor(props) {
    super(props)
    this.renderPictogram = this.renderPictogram.bind(this)
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this)
    this.searchText = this.props.searchText
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchText !== this.props.searchText) {
      loadData(nextProps)
    }
  }

  handleLoadMoreClick() {
    this.props.loadPictograms(this.props.searchText, true)
  }

  renderPictogram(pictogram) {
    return (
      <Pictogram pictogram={pictogram}
        key={pictogram.id} />
    )
  }

  render() {
    const { searchText, pictogramsList, layout, changePictogramsLayout } = this.props
    return (
      <div>
        <div className='row'>
          <ToolbarPictograms layout={layout} changeLayout={changePictogramsLayout}/>
        </div>
        <List renderItem={this.renderPictogram}
          items={pictogramsList}
          onLoadMoreClick={this.handleLoadMoreClick}
          loadingLabel={`Cargando pictogramas sobre ${searchText}...`} />
      </div>
    )
  }
}

ShowPictogramsView.propTypes = {
  searchText: PropTypes.string.isRequired,
  layout: PropTypes.string,
  loadPictograms: PropTypes.func.isRequired,
  changePictogramsLayout: PropTypes.func.isRequired,
  pictogramsList: React.PropTypes.arrayOf(React.PropTypes.object)
}

function mapStateToProps(state, ownProps) {
  const { searchText } = ownProps.params
  const {
    pagination: { pictogramsBySearchText },
    entities: { pictograms }
  } = state
  let pictogramsPagination = pictogramsBySearchText[searchText] || { ids: [] }
  let {
    gui: {layout}
  } = state
  /* http://stackoverflow.com/questions/36129060/extend-one-object-with-another-using-lodash/36130327#36130327 */
  /*
  let listOfPictograms = pictogramsBySearchText[searchText]
  var myIds = keyBy(listOfPictograms.ids)
  map(myIds, function(key, value) {
    myIds[key] = pictograms[key]
  })
  listOfPictograms.ids = myIds
  */
  const pictogramsList = pictogramsPagination.ids.map(id => pictograms[id])

  return {
    searchText,
    pictogramsList,
    layout
  }
}

export default connect(mapStateToProps, {loadPictograms, changePictogramsLayout})(ShowPictogramsView)
