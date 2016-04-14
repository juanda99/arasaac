import React, {PropTypes} from 'react'
import SelectCatalog from './SelectCatalog'
import SelectLicense from './SelectLicense'
import SelectSize from './SelectCatalog'
import ViewListIcon from 'material-ui/lib/svg-icons/action/view-list'
import ViewModuleIcon from 'material-ui/lib/svg-icons/action/view-module'
import Colors from 'material-ui/lib/styles/colors'
import Divider from 'material-ui/lib/divider'
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
const ToolbarPictograms = props => (
  <div style={style.container}>
    <SelectCatalog/>
    <SelectLicense/>
    <SelectSize/>
    <Divider />
    <div className='row end-xs'>
      <ViewListIcon style={style.icon} color={props.layout === 'list' ? Colors.blue500 : Colors.grey500} />
      <ViewModuleIcon style={style.icon2} color={props.layout === 'modules' ? Colors.blue500 : Colors.grey500}/>
    </div>
    <Divider />
  </div>
)
ToolbarPictograms.propTypes = {
  layout: PropTypes.string
}
export default ToolbarPictograms
