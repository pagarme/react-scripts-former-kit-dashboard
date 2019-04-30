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
  Col,
  Dropdown,
  Grid,
  Pagination,
  Row,
  Spacing,
  Table,
} from 'former-kit'

import IconAdd24 from 'emblematic-icons/svg/Add24.svg'

import style from './style.css'

const isAscending = equals('ascending')

const rowSort = accessor => sortBy(
  compose(
    when(is(String), toLower),
    defaultTo(''),
    path(accessor)
  )
)

const buildSorter = (accessor, order) => (
  isAscending(order)
    ? rowSort(accessor)
    : pipe(rowSort(accessor), reverse)
)

const sortByOrderColumn = (rows, columns, orderColumn, order) => {
  const referenceColumn = columns[orderColumn]
  const referenceAccessor = referenceColumn.accessor
  const sort = buildSorter(referenceAccessor, order)
  return sort(rows)
}

const log = (value) => {
  // eslint-disable-next-line no-console
  console.info(value)
}

const onButtonClick = msg => () => log(`You clicked in a button ${msg}`)

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
      selected,
      selectedRows,
    } = this.state

    return (
      <Grid>
        <Row flex>
          <Col
            desk={12}
            palm={12}
            tablet={12}
            tv={12}
          >
            <Card>
              <CardTitle title="Buttons sample" />
              <CardContent>
                <div className={style.buttons}>
                  <Button
                    fill="outline"
                    icon={<IconAdd24 width="12px" height="12px" />}
                    onClick={onButtonClick('with low relevance')}
                    relevance="low"
                  >
                    Click me
                  </Button>
                  <Button
                    fill="outline"
                    icon={<IconAdd24 width="12px" height="12px" />}
                    onClick={onButtonClick('with outline fill and high relevance')}
                    relevance="high"
                  >
                    Click me
                  </Button>
                  <Button
                    fill="clean"
                    icon={<IconAdd24 width="12px" height="12px" />}
                    onClick={onButtonClick('with clean fill')}
                  >
                    Click me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row flex>
          <Col
            desk={12}
            palm={12}
            tablet={12}
            tv={12}
          >
            <Card>
              <CardTitle
                subtitle={(
                  <div className={style.subTitle}>
                    <Spacing />
                    <Dropdown
                      name="count"
                      onChange={({ target: { value } }) => (
                        log(`Items per page changed to ${value}`)
                      )}
                      options={[10, 20, 30, 40, 50].map(i => ({
                        name: `${i} items per page`,
                        value: `${i}`,
                      }))}
                      placeholder="Items per page"
                      size="tiny"
                      value={selected}
                    />
                    <Pagination
                      currentPage={1}
                      onPageChange={page => log(`Pagination changed to ${page}`)}
                      totalPages={2}
                    />
                  </div>
                )}
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
          </Col>
        </Row>
      </Grid>
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
