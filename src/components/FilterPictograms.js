import React, {Component} from 'react'
import SelectCatalog from 'components/Toolbar/SelectCatalog'
import SelectSize from 'components/Toolbar/SelectSize'
import SelectLicense from 'components/Toolbar/SelectLicense'
import IconButton from 'material-ui/lib/icon-button'
// import ActionGrade from 'material-ui/lib/svg-icons/action/grade'
import Filter from 'svg-icons/filter'

class FilterPictograms extends Component {

  constructor(props) {
    super(props)
    this.state = {value: 2}
  }
  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-12 col-sm-4'>
            <IconButton tooltip='bottom-right' touch={true} tooltipPosition='bottom-right'>
              <Filter/>
            </IconButton>
            <SelectCatalog/>
          </div>
          <div className='col-xs-12 col-sm-4'>
            <IconButton tooltip='bottom-right' touch={true} tooltipPosition='bottom-right'>
              <Filter/>
            </IconButton>
            <SelectLicense/>
          </div>
          <div className='col-xs-12 col-sm-4'>
            <IconButton tooltip='bottom-right' touch={true} tooltipPosition='bottom-right'>
              <Filter/>
            </IconButton>
            <SelectSize/>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterPictograms
