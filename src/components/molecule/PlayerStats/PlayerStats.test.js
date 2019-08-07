import React from 'react'
import PlayerStats from './PlayerStats';
import { mount, shallow } from 'enzyme'

const props = {
  data: {
    rank: 21,
    points: 1784,
    weight: 81000,
    height: 183,
    age: 33,
    last: [1, 1, 1, 0, 1]
  }
}

describe('<PlayerStats/> rendering', () => {
    it('should renders without crashing', () => {
        const Wrapper = shallow(<PlayerStats {...props} />)
        expect(Wrapper).toBeDefined();
    });
});

export default props
