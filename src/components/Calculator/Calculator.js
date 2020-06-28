import React, {useState, useMemo} from 'react';
import './Calculator.less'
import ButtonsRow from '@capital/components/ButtonsRow';
import Display from '@capital/components/Display';

const Calculator = ({}) => {
    let buttonConfigRowsList = [
        [
            {
                value: 1
            },
            {
                value: 2
            },
            {
                value: 3
            },
            {
                value: 4
            },
        ],
        [
            {
                value: 1
            },
            {
                value: 2
            },
            {
                value: 3
            },
            {
                value: 4
            },
        ]
    ]
    console.log(buttonConfigRowsList)
    return(
        <div className="Calculator-Box flex-column">
            <div className="Display">
                <Display runningTotal={100}/>
            </div>
            <div className="Buttons flex-column">
                {buttonConfigRowsList.map( buttonConfigList => (
                    <ButtonsRow buttonConfigList={buttonConfigList} />
                ))}
            </div>
        </div>
    )
}

export default Calculator;