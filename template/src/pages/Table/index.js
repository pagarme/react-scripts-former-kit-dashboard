import React from 'react'

import {
  Grid,
  Row,
  Col,
} from 'former-kit'

import Table from '../../containers/Table'
import renderCardBrand from '../../containers/Table/renderCardBrand'
import renderStatusLegend from '../../containers/Table/renderStatusLegend'

import dataset from './dataset'

const columns = [
  {
    title: 'Status',
    renderer: renderStatusLegend,
    accessor: ['status'],
    orderable: true,
  },
  { title: 'Transaction Id', accessor: ['id'], orderable: true },
  { title: 'Date created', accessor: ['created_at'], orderable: true },
  { title: 'Paid amount', accessor: ['paid_amount'], orderable: true },
  { title: 'Installments', accessor: ['installments'], orderable: true },
  {
    title: 'Card brand',
    accessor: ['card_brand'],
    orderable: true,
    renderer: renderCardBrand,
  },
  { title: 'Document Number', accessor: ['document_number'], orderable: true },
  { title: 'Card Holder', accessor: ['card_holder_name'], orderable: true },
  { title: 'E-mail', accessor: ['email'], orderable: true },
  { title: 'IP Address', accessor: ['ip_address'], orderable: false },
  { title: 'billing_address', accessor: ['billing_address'], orderable: true },
]

const TablePage = () => (
  <Grid>
    <Row flex>
      <Col>
        <Table
          expandable
          selectable
          maxColumns={5}
          columns={columns}
          rows={dataset}
        />
      </Col>
    </Row>
  </Grid>
)

export default TablePage

