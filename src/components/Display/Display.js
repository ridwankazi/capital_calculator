import React from 'react';
import {Statistic} from 'antd';
import './Display.less'

const Display = ({displayValue}) => {
    return <Statistic className="Running-Total-Display" value={displayValue}/>
}

export default Display;