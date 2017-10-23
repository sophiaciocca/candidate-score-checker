/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Main from './main'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Main', () => {
  let item

  beforeEach(() => {
    item = shallow(<Main />)
  })

  it('renders a label for the input', () => {
    expect(item.find('label').text()).to.be.equal('Enter your candidate ID here:')
  })

})
