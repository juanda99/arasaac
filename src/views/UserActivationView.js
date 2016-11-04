import React, {Component, PropTypes} from 'react'
import { activate } from 'redux/modules/auth'
import { connect } from 'react-redux'
// import { map, keyBy } from 'lodash/zip'

function loadData(props) {
  const { activationURL } = props
  props.activate(activationURL)
}

class UserActivationView extends Component {

  componentDidMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activationURL !== this.props.activationURL) {
      loadData(nextProps)
    }
  }
  render() {
    return (
      <div>
        <div className='row'>
          <p>Prueba</p>
        </div>

      </div>
    )
  }
}

UserActivationView.propTypes = {
  activationURL: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  const { activationURL } = ownProps.params
  return {activationURL}
}

var mapDispatchToProps = function(dispatch) {
  return {
    activate: function(activationURL) { dispatch(activate.request(activationURL)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActivationView)
