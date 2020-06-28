import React, {useState, useMemo} from 'react';
import { Button } from 'antd';

const CapitalButton = ({buttonConfig}) => {

    console.log(buttonConfig)
    return(
        <div className="Button">
            <Button type="primary" shape="round">{buttonConfig.value}</Button>
        </div>
    )
}

export default CapitalButton;