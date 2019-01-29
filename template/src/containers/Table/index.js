import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  compose,
  defaultTo,
  equals,
  is,
  path,
  pipe,
  reverse,
  sortBy,
  toLower,
  when,
} from 'ramda'

import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Dropdown,
  Pagination,
  Table,
} from 'former-kit'

import IconAdd24 from 'emblematic-icons/svg/Add24.svg'

import style from './style.css'

const isAscending = equals('ascending')

const rowSort = accessor =>
  sortBy(compose(when(is(String), toLower), defaultTo(''), path(accessor)))

const buildSorter = (accessor, order) =>
  (isAscending(order)
    ? rowSort(accessor)
    : pipe(rowSort(accessor), reverse)
  )

const sortByOrderColumn = (rows, columns, orderColumn, order) => {
  const referenceColumn = columns[orderColumn]
  const referenceAccessor = referenceColumn.accessor
  const sort = buildSorter(referenceAccessor, order)
  return sort(rows)
}

class TableContainer extends Component {
  constructor (props) {
    super(props)

    const { columns, rows } = this.props

    this.state = {
      columns,
      expandedRows: [],
      order: 'ascending',
      orderColumn: 0,
      rows,
      selectedRows: [],
    }

    this.handleExpandRow = this.handleExpandRow.bind(this)
    this.handleOrderChange = this.handleOrderChange.bind(this)
    this.handleSelectRow = this.handleSelectRow.bind(this)
  }

  handleOrderChange (index, order) {
    const { columns, rows } = this.state
    const sortedRows = sortByOrderColumn(rows, columns, index, order)
    this.setState({
      order,
      orderColumn: index,
      rows: sortedRows,
    })
  }

  handleSelectRow (selectedRows) {
    this.setState({
      selectedRows,
    })
  }

  handleExpandRow (expandedRows) {
    this.setState({
      expandedRows,
    })
  }

  render () {
    const {
      expandable,
      maxColumns,
      onRowClick,
      selectable,
    } = this.props

    const {
      columns,
      expandedRows,
      order,
      orderColumn,
      rows,
      selectedRows,
    } = this.state

    return (
      <Card>
        <CardTitle
          subtitle={
            <div className={style.buttons}>
              <Button
                fill="outline"
                icon={<IconAdd24 width="12px" height="12px" />}
                relevance="low"
              >
                Click me
              </Button>
              <Button
                fill="outline"
                icon={<IconAdd24 width="12px" height="12px" />}
                relevance="low"
              >
                Click me
              </Button>
              <Button
                fill="outline"
                icon={<IconAdd24 width="12px" height="12px" />}
                relevance="low"
              >
                Click me
              </Button>
              <span />
              <Dropdown
                name="count"
                onChange={() => undefined}
                options={[10, 20, 30, 40, 50].map(i => ({
                  name: `${i} items per page`,
                  value: `${i}`,
                }))}
                placeholder="Items per page"
                size="tiny"
                value={this.state.selected}
              />
              <Pagination
                currentPage={1}
                onPageChange={() => undefined}
                totalPages={128}
              />
            </div>
          }
          title="Table sample"
        />
        <CardContent>
          <Table
            className={style.table}
            columns={columns}
            expandable={expandable}
            expandedRows={expandedRows}
            maxColumns={maxColumns}
            onExpandRow={this.handleExpandRow}
            onOrderChange={this.handleOrderChange}
            onRowClick={onRowClick}
            onSelectRow={this.handleSelectRow}
            orderColumn={orderColumn}
            orderSequence={order}
            rows={rows}
            selectable={selectable}
            selectedRows={selectedRows}
          />
        </CardContent>
      </Card>
    )
  }
}

TableContainer.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  expandable: PropTypes.bool,
  maxColumns: PropTypes.number,
  onRowClick: PropTypes.func,
  rows: PropTypes.arrayOf(PropTypes.object),
  selectable: PropTypes.bool,
}

TableContainer.defaultProps = {
  columns: [],
  expandable: false,
  maxColumns: 7,
  onRowClick: () => undefined,
  rows: [],
  selectable: false,
}

export default TableContainer
