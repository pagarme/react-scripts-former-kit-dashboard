import ChartBars32 from 'emblematic-icons/svg/ChartBars32.svg'
import Home32 from 'emblematic-icons/svg/Home32.svg'
import Report32 from 'emblematic-icons/svg/Report32.svg'
import Wallet32 from 'emblematic-icons/svg/Wallet32.svg'

import Charts from '../Charts'
import Forms from '../Forms'
import Home from '../Home'
import Table from '../Table'

/* eslint-disable */
export default {
  home: {
    component: Home,
    icon: Home32,
    path: '/home',
    title: 'Home',
  },
  charts: {
    component: Charts,
    icon: ChartBars32,
    path: '/charts',
    title: 'Charts',
  },
  forms: {
    component: Forms,
    icon: Report32,
    path: '/forms',
    title: 'Form',
  },
  table: {
    component: Table,
    icon: Wallet32,
    path: '/table',
    title: 'Table',
  },
}
