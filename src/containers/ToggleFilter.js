import {PropTypes} from 'react'
import {connect} from 'react-redux'
import Toggle from 'material-ui/Toggle'
import {actions} from 'redux/modules/filters'

const mapStateToProps = (state, ownProps) => ({
  defaultToggled: state.gui.filters[ownProps.filter],
  label: ownProps.label,
  style: { width: 100 }
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggle: () => {
    dispatch(actions.toggleFilter(ownProps.filter))
  }
})

const ToggleFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle)

ToggleFilter.propTypes = {
  label: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired
}

export default ToggleFilter
