import React from 'react'
import MockData from '../molecule/PlayerStats/PlayerStats.test'
import PlayerCard from './PlayerCard';
import PlayerStats from '../molecule/PlayerStats'
import { mount } from 'enzyme'

const props = {
  player: {
    firstname: 'Kylian',
    lastname: 'Mbappe',
    sex: 'M',
    country: {
      picture: 'mock-url.jpeg',
      code: 'FRA',
    },
    picture: 'mock-url.jpeg',
    data: MockData.data,
  }
}

describe('<PlayerCard/> rendering', () => {
    it('should renders without crashing', () => {
      const Wrapper = mount(<PlayerCard {...props} />)
      expect(Wrapper).toBeDefined();
      expect(Wrapper.find(PlayerStats)).toHaveLength(1)
    });
});


export default props
