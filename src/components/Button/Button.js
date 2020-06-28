import React, {useState, useMemo} from 'react';
import {Button} from 'antd';
import './Button.less'

const CalculatorButton = ({buttonConfig}) => {
    return<Button className="Calculator-Button" type="primary" shape="round">{buttonConfig.value}</Button>
}

export default CalculatorButton;