import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';
import {add, subtract, multiply} from '@capital/operation_support/OperationSupport'
import {
   BUTTON_VALUE_ONE,
   BUTTON_VALUE_TWO,
   BUTTON_VALUE_THREE,
   BUTTON_VALUE_FIVE,
   BUTTON_VALUE_CLEAR,
   BUTTON_VALUE_EQUAL,
   BUTTON_VALUE_ADD,
   BUTTON_VALUE_SUBTRACT,
   BUTTON_VALUE_MULTIPLY,
} from '@capital/Constants'

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
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_CLEAR})
    });

   it('renders multi digit numbers', () => {
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ONE})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_THREE})
      expect(wrapper.state('displayValue')).toBe("123")
   });
   
   it('handles operation click and equal', () => {
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ONE})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ADD, operationFunction:add})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: "="})
      expect(wrapper.state('displayValue')).toBe(BUTTON_VALUE_THREE)
      expect(wrapper.state('firstOperationArg')).toBe(0)
      expect(wrapper.state('operationFunction')).toBe(null)
   });

   it('handles operation click twice', () => {
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ONE})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ADD, operationFunction:add})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ADD})
      expect(wrapper.state('displayValue')).toBe(BUTTON_VALUE_THREE)
   });

   it('handles multiple digit number operations', () => {
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ONE})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ONE})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ADD, operationFunction:add})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ADD})
      expect(wrapper.state('displayValue')).toBe("33")
   });

   it('handles multiple different operations', () => {
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ONE})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ADD, operationFunction:add})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_SUBTRACT, operationFunction:subtract})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_MULTIPLY, operationFunction:multiply})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_FIVE})
      expect(wrapper.state('displayValue')).toBe("5")
   });

   it('equals button clears running total', () => {
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ONE})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_ADD, operationFunction:add})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_TWO})
      wrapper.instance().processButtonClick({value: BUTTON_VALUE_EQUAL, operationFunction:subtract})
      expect(wrapper.state('displayValue')).toBe(BUTTON_VALUE_THREE)
      expect(wrapper.state('firstOperationArg')).toBe(0)
      expect(wrapper.state('currentOperation')).toBe(BUTTON_VALUE_EQUAL)
      expect(wrapper.state('operationFunction')).toBe(null)
   });

});
