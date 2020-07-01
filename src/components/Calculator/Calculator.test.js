import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';
import ButtonRowsConfig from '@capital/components/ButtonRowsConfig'
import {add, subtract, multiply, divide} from '@capital/operation_support/OperationSupport'


describe('Calculator component renders', () => {
   it('renders without crashing', () => {
      shallow(<Calculator buttonRowsConfig={[[{value: "test1"}]]}/>);
    });
});

describe('Multiple rows of ButtonsRow renders', () => {
   const wrapper = shallow(<Calculator buttonRowsConfig={[[{value: "test1"},{value: "test2"},{value: "test3"}],[{value: "test4"},{value: "test5"},{value: "test6"}]]}/>);
   
   it('renders multiple rows', () => {
      expect(wrapper.find('.Buttons-Section').children().length).toBe(2)
   });
});

describe('Event handler processButtonClick tests', () => {
   const wrapper = shallow(<Calculator buttonRowsConfig={[[{value: "test1"}]]}/>);
   afterEach(() => {
      wrapper.instance().processButtonClick({value: "C"})
    });

   it('renders multi digit numbers', () => {
      wrapper.instance().processButtonClick({value: "1"})
      wrapper.instance().processButtonClick({value: "2"})
      wrapper.instance().processButtonClick({value: "3"})
      expect(wrapper.state('displayValue')).toBe("123")
   });
   
   it('handles operation click and equal', () => {
      wrapper.instance().processButtonClick({value: "1"})
      wrapper.instance().processButtonClick({value: "+", operationFunction:add})
      wrapper.instance().processButtonClick({value: "2"})
      wrapper.instance().processButtonClick({value: "="})
      expect(wrapper.state('displayValue')).toBe("3")
      expect(wrapper.state('firstOperationArg')).toBe(0)
      expect(wrapper.state('operationFunction')).toBe(null)
   });

   it('handles operation click twice', () => {
      wrapper.instance().processButtonClick({value: "1"})
      wrapper.instance().processButtonClick({value: "+", operationFunction:add})
      wrapper.instance().processButtonClick({value: "2"})
      wrapper.instance().processButtonClick({value: "+"})
      expect(wrapper.state('displayValue')).toBe("3")
   });

   it('handles multiple digit number operations', () => {
      wrapper.instance().processButtonClick({value: "1"})
      wrapper.instance().processButtonClick({value: "1"})
      wrapper.instance().processButtonClick({value: "+", operationFunction:add})
      wrapper.instance().processButtonClick({value: "2"})
      wrapper.instance().processButtonClick({value: "2"})
      wrapper.instance().processButtonClick({value: "+"})
      expect(wrapper.state('displayValue')).toBe("33")
   });

});
