import React from 'react';
import {Statistic} from 'antd';
import './Display.less'

const Display = ({runningTotal}) => {
    return <Statistic className="Running-Total-Display" value={runningTotal}/>
}

export default Display;