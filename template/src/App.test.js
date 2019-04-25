import React from 'react'
import { MemoryRouter } from 'react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'enzyme'
import App from './App'
import Login from './pages/Account/Login'

it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/account/login']}>
      <App />
    </MemoryRouter>
  )

  expect(wrapper.find(Login)).toHaveLength(1)
})
