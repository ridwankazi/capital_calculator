import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';
import ButtonRowsConfig from './ButtonRowsConfig'


describe('Calculator component renders', () => {
   it('renders without crashing', () => {
      shallow(<Calculator />);
    });
});

describe('Multiple rows of ButtonsRow renders', () => {
   const wrapper = shallow(<Calculator buttonRowsConfig={[[{value: "test1"},{value: "test2"},{value: "test3"}],[{value: "test4"},{value: "test5"},{value: "test6"}]]}/>);
   
   it('renders multiple rows', () => {
      expect(wrapper.find('.Buttons-Section').children().length).toBe(2)
   });
});
<<<<<<< Updated upstream
=======


describe('Event handler processButtonClick tests', () => {
   const wrapper = shallow(<Calculator buttonRowsConfig={[[{value: "test1"},{value: "test2"},{value: "test3"}],[{value: "test4"},{value: "test5"},{value: "test6"}]]}/>);
});

>>>>>>> Stashed changes
