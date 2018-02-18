import ChartBars32 from 'emblematic-icons/svg/ChartBars32.svg'
import Wallet32 from 'emblematic-icons/svg/Wallet32.svg'
import Home32 from 'emblematic-icons/svg/Home32.svg'
import Report32 from 'emblematic-icons/svg/Report32.svg'

import Home from '../Home'
import Charts from '../Charts'
import Table from '../Table'
import Forms from '../Forms'

export default {
  home: {
    title: 'Home',
    path: '/home',
    component: Home,
    icon: Home32,
  },
  charts: {
    title: 'Charts',
    path: '/charts',
    component: Charts,
    icon: ChartBars32,
  },
  table: {
    title: 'Table',
    path: '/table',
    component: Table,
    icon: Wallet32,
  },
  forms: {
    title: 'Form',
    path: '/forms',
    component: Forms,
    icon: Report32,
  },
}
