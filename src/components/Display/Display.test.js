import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';


describe('Display component renders', () => {
   it('renders without crashing', () => {
      shallow(<Display />);
    });
});