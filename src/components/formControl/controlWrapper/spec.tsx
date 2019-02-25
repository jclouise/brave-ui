/* global jest, expect, describe, it, afterEach */
import * as React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import ControlWrapper from './index'
import { TestThemeProvider } from '../../style/theme'

describe('ControlWrapper tests', () => {
  const baseComponent = (props?: object) => (
  <TestThemeProvider>
    <ControlWrapper id='wrapper' {...props} />
  </TestThemeProvider>
  )

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const component = baseComponent()
      const tree = create(component).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders the component', () => {
      const wrapper = shallow(baseComponent())
      const assertion = wrapper.find('#wrapper').length
      expect(assertion).toBe(1)
    })
  })
})
