import React, {Component} from 'react'
var ReactDataGrid = require('react-data-grid/addons')
import TagsEditor from 'components/TagsEditor'
import TagsFormatter from 'components/TagsFormatter'
var options = ['prueba1', 'prueba2', 'prueba3', 'prueba4', 'asdfasñdlk fjkñasñldkf asdfj ñ']
var tagsEditor = <TagsEditor options={options}/>


var Toolbar = ReactDataGrid.Toolbar
var _rows = []
for (var i = 1; i < 1000; i++) {
  _rows.push({
    _id: i,
    name: 'Name_en ' + i,
    tags: 'Tags_en ' + i,
    filters: 'Filter_tags_en ' + i,
    name_locale: i,
    tags_locale: 'Tags_locale ' + i,
    filters_locale: 'Filter_tags_locale ' + i
  })
}

var PercentCompleteFormatter = React.createClass({
  render:function(){


    var percentComplete = this.props.value + '%';
    return (
      
      <div className="progress" style={{marginTop:'20px'}}>
        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:percentComplete}}>
        {percentComplete}
      </div>
      </div>)


      ;
    }
  });



// A rowGetter function is required by the grid to retrieve a row for a given index
var rowGetter = function(i) {
  return _rows[i]
}

var columns = [
  {
    key: '_id',
    name: 'ID',
    resizable: true,
    width: 1
  },
  {
    key: 'name',
    name: 'Name',
    resizable: true,
    width: 220,
    filterable: true
  },
  {
    key: 'tags',
    name: 'Tags',
    resizable: true,
    width: 220,
    filterable: true
  },
  {
    key: 'filters',
    name: 'Filters',
    resizable: true,
    width: 220,
    filterable: true
  },
  {
    key: 'name_locale',
    name: 'Name',
    resizable: true,
    width: 220,
    filterable: true,
    editable: true
  },
  {
    key: 'tags_locale',
    name: 'Tags',
    resizable: true,
    filterable: true,
    width: 400,
    editor: tagsEditor,
    formatter: TagsFormatter
  },
  {
    key: 'filters_locale',
    name: 'Filters',
    resizable: true,
    filterable: true
  }
]

class PictogramsGridView extends Component {
  constructor(props) {
    super(props)
    this.handleRowUpdated = this.handleRowUpdated.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.rowGetter = this.rowGetter.bind(this)

    this.state = {
      originalRows: _rows,
      rows: _rows,
      filters: {}
    }
  }

  rowGetter(rowIdx) {
    return this.state.rows[rowIdx]
  }

  handleFilterChange(filter) {
    this.setState(function(currentState) {
      if (filter.filterTerm) {
        currentState.filters[filter.columnKey] = filter.filterTerm
      } else {
        delete currentState.filters[filter.columnKey]
      }
      currentState.rows = this.filterRows(currentState.originalRows, currentState.filters)
      return currentState
    })
  }

  filterRows(originalRows, filters) {
    var rows = originalRows.filter(function(r) {
      var include = true
      for (var columnKey in filters) {
        if (filters.hasOwnProperty(columnKey)) {
          var rowValue = r[columnKey].toString().toLowerCase()
          if (rowValue.indexOf(filters[columnKey].toLowerCase()) === -1) {
            include = false
          }
        }
      }
      return include
    })
    return rows
  }

  handleRowUpdated(e) {
    // merge updated row with current row and rerender by setting state
    var rows = this.state.rows
    Object.assign(rows[e.rowIdx], e.updated)
    this.setState({rows: rows})
  }

  render() {
    return (
      <div className='row-fluid'>
        <div className='col-xs-12'>
          <ReactDataGrid columns={columns} rowGetter={this.rowGetter} rowsCount={this.state.rows.length}
          rowHeight={100}
            toolbar={<Toolbar enableFilter={true}/>} onAddFilter={this.handleFilterChange}
             enableCellSelect={true} onRowUpdated={this.handleRowUpdated} minHeight={500} />
        </div>
      </div>
    )
  }
}

export default PictogramsGridView