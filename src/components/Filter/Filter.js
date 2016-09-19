import React, {PropTypes} from 'react'
import SelectCatalog from './SelectCatalog'
import SelectLicense from './SelectLicense'
import SelectSize from './SelectSize'

const Filter = props => (
  <div className='row'>
      {props.filter.catalog ? <div className='col-xs-12'><SelectCatalog /></div> : null}
      {props.filter.size ? <div className='col-xs-12'><SelectSize /></div> : null}
      {props.filter.license ? <div className='col-xs-12'><SelectLicense /></div> : null}
  </div>
)
Filter.propTypes = {
  layout: PropTypes.string,
  filter: PropTypes.object.isRequired
}

export default Filter
