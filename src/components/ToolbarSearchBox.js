import React from 'react'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import ToolbarSeparator from 'material-ui/Toolbar/ToolbarSeparator';
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle';

const ToolbarSearchBox = () => (
  <Toolbar>
    <ToolbarGroup firstChild={true} float='left'>
      <DropDownMenu value={3}>
        <MenuItem value={1} primaryText='All Broadcasts' />
        <MenuItem value={2} primaryText='All Voice' />
        <MenuItem value={3} primaryText='All Text' />
        <MenuItem value={4} primaryText='Complete Voice' />
        <MenuItem value={5} primaryText='Complete Text' />
        <MenuItem value={6} primaryText='Active Voice' />
        <MenuItem value={7} primaryText='Active Text' />
      </DropDownMenu>
    </ToolbarGroup>
    <ToolbarGroup float='right'>
      <ToolbarTitle text='Options' />
      <FontIcon className='muidocs-icon-custom-sort' />
      <IconMenu
        iconButtonElement={
          <IconButton touch={true}>
            <NavigationExpandMoreIcon />
          </IconButton>
        }
      >
        <MenuItem primaryText='Download' />
        <MenuItem primaryText='More Info' />
      </IconMenu>
      <ToolbarSeparator />
      <RaisedButton label='Create Broadcast' primary={true} />
    </ToolbarGroup>
  </Toolbar>
)

export default ToolbarSearchBox
