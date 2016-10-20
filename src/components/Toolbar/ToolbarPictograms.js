import React, {PropTypes, Component} from 'react'
import ViewListIcon from 'material-ui/svg-icons/action/view-list'
import ViewModuleIcon from 'material-ui/svg-icons/action/view-module'
import { grey500, blue500 } from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider'
const style = {
  icon: {
    width: 40,
    height: 40
  },
  icon2: {
    width: 44,
    height: 44,
    top: -1,
    position: 'relative',
    color: 'red'
  },
  container: {
    width: 100 + '%'
  }
}

export default class ToolbarPictograms extends Component {
  static propTypes = {
    layout: PropTypes.string.isRequired,
    changeLayout: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = value => {
    this.props.changeLayout(value)
  }

  render() {
    const changeLayout = this.props.changeLayout
    return (
      <div style={style.container}>
        <Divider />
        <div className='row end-xs'>
          <ViewListIcon style={style.icon} color={this.props.layout === 'list' ? blue500 : grey500} onClick={() => changeLayout('list')} />
          <ViewModuleIcon style={style.icon2} color={this.props.layout === 'modules' ? blue500 : grey500} onClick={() => changeLayout('modules')}/>
        </div>
        <Divider />
      </div>
    )
  }
}
