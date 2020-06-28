import React, {useState} from 'react';
import './Calculator.less'
import ButtonsRow from '@capital/components/ButtonsRow';
import Display from '@capital/components/Display';

const buttonConfigRowsList = [
    [
        {
            value: "C"
        },
        {
            value: "+/-"
        },
        {
            value: "%"
        },
        {
            value: "/"
        },
    ],
    [
        {
            value: "7"
        },
        {
            value: "8"
        },
        {
            value: "9"
        },
        {
            value: "x"
        },
    ],
    [
        {
            value: "4"
        },
        {
            value: "5"
        },
        {
            value: "6"
        },
        {
            value: "+"
        },
    ],
    [
        {
            value: "1"
        },
        {
            value: "2"
        },
        {
            value: "3"
        },
        {
            value: "+"
        },
    ],
    [
        {
            value: "0"
        },
        {
            value: "."
        },
        {
            value: "="
        },
    ]
]

const Calculator = ({}) => {

    const [runningTotal, setRunningTotal] = useState("0")

    const processButtonClick = (buttonValue) => {
        console.log(buttonValue)
        if (runningTotal === "0") {
            setRunningTotal(buttonValue)
        } else {
            setRunningTotal(runningTotal + buttonValue)
        }
    }


    return(
        <div className="Calculator-Box flex-column">
            <div className="Display">
                <Display runningTotal={runningTotal}/>
            </div>
            <div className="Buttons flex-column">
                {buttonConfigRowsList.map( buttonConfigList => (
                    <ButtonsRow buttonConfigList={buttonConfigList} buttonCallBack={processButtonClick} />
                ))}
            </div>
        </div>
    )
}

export default Calculator;