import React from 'react'

import { Grid, Row, Col } from 'former-kit'

import Table from '../../containers/Table'
import renderCardBrand from '../../containers/Table/renderCardBrand'
import renderStatusLegend from '../../containers/Table/renderStatusLegend'

import dataset from './dataset'

const columns = [
  {
    accessor: ['status'],
    orderable: true,
    renderer: renderStatusLegend,
    title: 'Status',
  },
  {
    accessor: ['id'],
    orderable: true,
    title: 'Transaction Id',
  },
  {
    accessor: ['created_at'],
    orderable: true,
    title: 'Date created',
  },
  {
    accessor: ['paid_amount'],
    orderable: true,
    title: 'Paid amount',
  },
  {
    accessor: ['installments'],
    orderable: true,
    title: 'Installments',
  },
  {
    accessor: ['card_brand'],
    orderable: true,
    renderer: renderCardBrand,
    title: 'Card brand',
  },
  {
    accessor: ['document_number'],
    orderable: true,
    title: 'Document Number',
  },
  {
    accessor: ['card_holder_name'],
    orderable: true,
    title: 'Card Holder',
  },
  {
    accessor: ['email'],
    orderable: true,
    title: 'E-mail',
  },
  {
    accessor: ['ip_address'],
    orderable: false,
    title: 'IP Address',
  },
  {
    accessor: ['billing_address'],
    orderable: true,
    title: 'billing_address',
  },
]

const TablePage = () => (
  <Grid>
    <Row flex>
      <Col>
        <Table
          columns={columns}
          expandable
          maxColumns={5}
          rows={dataset}
          selectable
        />
      </Col>
    </Row>
  </Grid>
)

export default TablePage
