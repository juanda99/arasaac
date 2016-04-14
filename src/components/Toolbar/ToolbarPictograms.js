import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'
import SelectCatalog from './SelectCatalog'
import SelectLicense from './SelectLicense'
import SelectSize from './SelectCatalog'
import ViewListIcon from 'material-ui/lib/svg-icons/action/view-list'
import ViewModuleIcon from 'material-ui/lib/svg-icons/action/view-module'
const ToolbarPictograms = () => (
  <Toolbar>
    <ToolbarGroup firstChild={true} float='left'>
      <SelectCatalog/>
    </ToolbarGroup>
    <ToolbarGroup float='left'>
      <SelectLicense/>
    </ToolbarGroup>
    <ToolbarGroup float='left'>
      <SelectSize/>
    </ToolbarGroup>
    <ToolbarGroup float='right'>
      <ViewListIcon />
      <ViewModuleIcon />
    </ToolbarGroup>
  </Toolbar>
)

export default ToolbarPictograms
