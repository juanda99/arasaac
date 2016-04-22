import React, {PropTypes} from 'react'
import SelectCatalog from './SelectCatalog'
import SelectLicense from './SelectLicense'
import SelectSize from './SelectSize'

const Filter = props => (
  <div className='row'>
    <div className='col-xs-12 col-sm-4'>
      {props.filter.catalog ? <SelectCatalog/> : null}
    </div>
    <div className='col-xs-12 col-sm-4'>
      {props.filter.size ? <SelectSize/> : null}
    </div>
    <div className='col-xs-12 col-sm-4'>
      {props.filter.license ? <SelectLicense/> : null}
    </div>
  </div>
)
Filter.propTypes = {
  layout: PropTypes.string,
  filter: PropTypes.object.isRequired
}

export default Filter
