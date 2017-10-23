import { expect, assert } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Results from './Results.jsx'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('Results', () => {
  let item

  beforeEach('Create component', () => {
    item = shallow(<Results percentiles={[0.67779, 0.58883]} />)
  })

  it('should render', () => {
    //verify: rendered DOM values are what we expect
    assert(item.hasClass('results'))
  })

})
