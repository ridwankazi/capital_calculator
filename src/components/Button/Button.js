import React, {useState, useMemo} from 'react';
import {Button} from 'antd';
import './Button.less'

const CapitalButton = ({buttonConfig}) => {
    return<Button className="Calc-Button" type="primary" shape="round">{buttonConfig.value}</Button>
}

export default CapitalButton;