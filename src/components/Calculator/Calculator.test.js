import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';


describe('Calculator component renders', () => {
   it('renders without crashing', () => {
      shallow(<Calculator />);
    });
});