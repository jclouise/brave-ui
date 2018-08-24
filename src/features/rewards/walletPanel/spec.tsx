/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import WalletPanel from './index'
import { TestThemeProvider } from '../../../theme'

describe('WalletPanel tests', () => {
  const baseComponent = (props?: object) => <TestThemeProvider><WalletPanel id='wallet-panel' {...props} /></TestThemeProvider>

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#wallet-panel').length
      expect(assertion).toBe(1)
    })
  })
})
