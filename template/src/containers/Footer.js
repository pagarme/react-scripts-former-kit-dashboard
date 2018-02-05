import React from 'react'

import Camera24 from 'emblematic-icons/svg/Camera24'
import Card24 from 'emblematic-icons/svg/Card24'

import Footer from '../../src/Footer'

const links = [
  {
    title: 'Documentation',
  },
  {
    title: 'Support',
  },
  {
    title: 'Contact',
  },
]

const FooterContainer = () => (
  <Footer links={links}>
    <button> action('clicked')}><Camera24 /></button>
    <button> action('clicked')}><Card24 /></button>
  </Footer>
)

export default FooterContainer
