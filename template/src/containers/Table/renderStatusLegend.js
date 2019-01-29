import React from 'react'

import { Legend } from 'former-kit'

import style from './style.css'

const renderStatusLegend = item => (
  <div className={style.centralizedItem}>
    <Legend color={item.status_color} acronym={item.status_acronym} hideLabel>
      {item.status}
    </Legend>
  </div>
)

export default renderStatusLegend
