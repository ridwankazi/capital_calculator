import React from 'react';
import { shallow } from 'enzyme';
import ButtonsRow from './ButtonsRow';


describe('ButtonsRow component renders', () => {
   it('renders without crashing', () => {
      shallow(<ButtonsRow  buttonConfigList={[{value: "test"}]} buttonCallBack={() => ("test")}/>);
    });
});