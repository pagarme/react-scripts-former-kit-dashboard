import React from 'react'

import Camera24 from 'emblematic-icons/svg/Camera24.svg'
import Card24 from 'emblematic-icons/svg/Card24.svg'

import { Footer } from 'former-kit'

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
    <button>
      <Camera24 />
    </button>
    <button>
      <Card24 />
    </button>
  </Footer>
)

export default FooterContainer
