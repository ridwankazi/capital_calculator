import React from 'react';
import { shallow } from 'enzyme';
import ButtonsRow from './ButtonsRow';


describe('ButtonsRow component renders', () => {
   it('renders without crashing', () => {
      shallow(<ButtonsRow  buttonConfigList={[{value: "test"}]} buttonCallBack={() => ("test")}/>);
    });
});


describe('Correct number of buttons render', () => {
   const wrapper = shallow(<ButtonsRow  buttonConfigList={[{value: "test1"},{value: "test2"},{value: "test3"}]} buttonCallBack={() => ("test")}/>);
   
   it('renders multiple rows', () => {
      expect(wrapper.find('.Buttons-Row').children().length).toBe(3)
   });
});

