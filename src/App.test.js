import React from 'react'
import App from './App';
import { shallow } from 'enzyme'

describe('<App/> rendering', () => {
    it('should renders without crashing', () => {
        const Wrapper = shallow(<App />)
        expect(Wrapper).toBeDefined();
    });
});
