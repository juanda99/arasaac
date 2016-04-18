import React from 'react'
import IconButton from 'material-ui/lib/icon-button'
import Filter from 'svg-icons/filter'

const FilterIcon = () => (
  <IconButton tooltip='bottom-right' touch={true} tooltipPosition='bottom-right'>
    <Filter/>
  </IconButton>
)

export default FilterIcon
