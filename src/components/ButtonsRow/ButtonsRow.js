import React, {useState, useMemo} from 'react';
import CalculatorButton from '@capital/components/Button';
const ButtonsRow = ({buttonConfigList}) => {
    return(
        <div className="Buttons-Row flex-row justify-space-around">
            {buttonConfigList.map( buttonConfig => (
                <CalculatorButton buttonConfig={buttonConfig} />
            ))}
        </div>
    )
}

export default ButtonsRow;