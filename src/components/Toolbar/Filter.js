import React, {PropTypes} from 'react'
import SelectCatalog from './SelectCatalog'
import SelectLicense from './SelectLicense'
import SelectSize from './SelectSize'

const Filter = props => (
  <div>
    {props.filter.catalog ? <SelectCatalog/> : null}
    {props.filter.catalog ? <SelectLicense/> : null}
    {props.filter.catalog ? <SelectSize/> : null}
  </div>
)
Filter.propTypes = {
  layout: PropTypes.string,
  filter: PropTypes.arrayOf(PropTypes.bool).isRequired
}

export default Filter
