import React, {useState, useMemo} from 'react';
import CapitalButton from '@capital/components/Button';
const ButtonsRow = ({buttonConfigList}) => {
    console.log(buttonConfigList)
    return(
        <div className="Buttons-Row flex-row">
            {buttonConfigList.map( buttonConfig => (
                <CapitalButton buttonConfig={buttonConfig} />
            ))}
        </div>
    )
}

export default ButtonsRow;