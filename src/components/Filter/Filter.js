import React, {PropTypes} from 'react'
import SelectCatalog from './SelectCatalog'
import SelectLicense from './SelectLicense'
import SelectSize from './SelectSize'

const Filter = props => (
  <div>
    {props.filter.catalog ? <SelectCatalog/> : null}
    {props.filter.catalog ? <SelectSize/> : null}
    {props.filter.catalog ? <SelectLicense/> : null}
  </div>
)
Filter.propTypes = {
  layout: PropTypes.string,
  filter: PropTypes.object.isRequired
}

export default Filter
