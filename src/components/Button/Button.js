import React from 'react';
import {Button} from 'antd';
import './Button.less'

const CalculatorButton = ({buttonConfig, buttonCallBack}) => {
    return<Button className="Calculator-Button" type="primary" shape="round" onClick={() => buttonCallBack(buttonConfig)}>{buttonConfig.value}</Button>
}

export default CalculatorButton;