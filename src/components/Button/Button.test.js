import React from 'react';
import { shallow } from 'enzyme';
import CalculatorButton from './Button';


describe('CalculatorButton component renders', () => {
   it('renders without crashing', () => {
      shallow(<CalculatorButton  buttonConfig={{value: "test"}} buttonCallBack={() => ("test")}/>);
    });
});