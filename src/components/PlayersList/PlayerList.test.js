import React from 'react'
import MockData from '../PlayerCard/PlayerCard.test'
import { PlayersList } from './PlayersList';
import PlayerCard from '../PlayerCard'
import { mount } from 'enzyme'


describe('<PlayersList/> rendering', () => {
    it('should renders Loading message if data is fetching', () => {
      const props = {
        data: {
          players: [{...MockData.player}, {...MockData.player}],
        },
        isLoading: true,
      }
      const Wrapper = mount(<PlayersList {...props} />)
      expect(Wrapper).toBeDefined();
      expect(Wrapper.text()).toEqual("...Loading")
    });
    it('should renders without crashing', () => {
      const props = {
        data: {
          players: [{...MockData.player}, {...MockData.player}],
        },
        isLoading: false,
      }
      const Wrapper = mount(<PlayersList {...props} />)
      expect(Wrapper).toBeDefined();
      expect(Wrapper.find(PlayerCard)).toHaveLength(2)
    });
});
