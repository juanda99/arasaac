import React, {Component, PropTypes} from 'react'
import { loadPictograms } from 'redux/modules/pictograms'
import { connect } from 'react-redux'

import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views'

const styles = {
  button: {
    margin: 22
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10,
    overflow: 'hidden'
  }
}

function loadData(props) {
  const { searchText } = props
  props.loadPictograms(searchText)
}

class ShowPictogramsView extends Component {
  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchText !== this.props.searchText) {
      loadData(nextProps)
    }
  }

  render() {
    return (
      <div>
        <div className='row end-xs'>
        </div>
        <Tabs onChange={this.handleChange} value={0}>
          <Tab label='Resultados' value={0} />
          <Tab label='Mi selección' value={1} />
        </Tabs>
        <SwipeableViews index={0} onChangeIndex={this.handleChange}>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

ShowPictogramsView.propTypes = {
  searchText: PropTypes.string.isRequired,
  loadPictograms: PropTypes.func.isRequired
}

export default connect('', {loadPictograms})(ShowPictogramsView)
