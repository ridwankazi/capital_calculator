import React from 'react';
import CalculatorButton from '@capital/components/Button';
const ButtonsRow = ({buttonConfigList, buttonCallBack}) => {
    return(
        <div className="Buttons-Row flex-row justify-space-around">
            {buttonConfigList.map( (buttonConfig) => (
                <CalculatorButton key={buttonConfig.value} buttonConfig={buttonConfig} buttonCallBack={buttonCallBack} />
            ))}
        </div>
    )
}

export default ButtonsRow;