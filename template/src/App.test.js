import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import { MemoryRouter } from 'react-router'
import Login from '../src/pages/Account/Login'

it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/account/login']}>
      <App />
    </MemoryRouter>
  )

  expect(wrapper.find(Login)).toHaveLength(1)
})
