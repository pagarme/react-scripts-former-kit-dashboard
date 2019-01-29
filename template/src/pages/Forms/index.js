import React from 'react'

import { Grid, Row } from 'former-kit'

import Forms from '../../containers/Forms'

const companies = [
  {
    name: 'A',
    value: 'a',
  },
  {
    name: 'B',
    value: 'b',
  },
]

const projects = [
  {
    name: 'Former kit',
    value: 'former-kit',
  },
  {
    name: 'Skin',
    value: 'skin',
  },
  {
    name: 'Scripts',
    value: 'scripts',
  },
]

const FormsPage = () => (
  <Grid>
    <Row flex stretch>
      <Forms companies={companies} projects={projects} />
    </Row>
  </Grid>
)

export default FormsPage
