import React from 'react';
import {Button} from 'antd';
import './Button.less'

const CalculatorButton = ({buttonConfig, buttonCallBack}) => {
    return<Button id={`calculator-button-${buttonConfig.value}`} className="Calculator-Button" type="primary" shape="round" onClick={() => buttonCallBack(buttonConfig)}>{buttonConfig.value}</Button>
}

export default CalculatorButton;