import React, {useState, useMemo} from 'react';
import CapitalButton from '@capital/components/Button';
const ButtonsRow = ({buttonConfigList}) => {
    return(
        <div className="Buttons-Row flex-row justify-space-around">
            {buttonConfigList.map( buttonConfig => (
                <CapitalButton buttonConfig={buttonConfig} />
            ))}
        </div>
    )
}

export default ButtonsRow;