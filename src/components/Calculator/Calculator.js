import React, {useState} from 'react';
import './Calculator.less'
import ButtonsRow from '@capital/components/ButtonsRow';
import Display from '@capital/components/Display';

const operationFunctionMap = {
    "+": () => {
        return (a,b) => (a+b)
    },
    "-": () => {
        return (a,b) => (a-b)
    },
    "/": () => {
        return (a,b) => (a/b)
    },
    "x": () => {
        return (a,b) => (a*b)
    },
}

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
            value: "-"
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

    const [displayValue, setDisplayValue] = useState("0")
    const [firstOperationArg, setFirstOperationArg] = useState(0)
    const [currentOperation, setCurrentOperation] = useState(null)
    const [operationFunction, setOperationFunction] = useState(null)

    console.log("Calculator displayValue", displayValue)
    console.log("Calculator firstOperationArg", firstOperationArg)
    console.log("Calculator operationFunction", operationFunction)
    console.log("\n")

    const processButtonClick = (buttonValue) => {
        console.log("displayValue", displayValue)
        console.log("firstOperationArg", firstOperationArg)
        console.log("operationFunction", operationFunction)
        console.log("buttonValue", buttonValue)
        console.log("\n")
        if (displayValue === "0") {
            setDisplayValue(buttonValue)
        } else if (!Boolean(Number(buttonValue)) && buttonValue !== "=") {
            
            // Operation button is pressed
            
            let opFunc = operationFunctionMap[buttonValue]
            if (currentOperation !== buttonValue) {
                setOperationFunction(opFunc)
                setCurrentOperation(buttonValue)
            }

            if (displayValue !== "0") {
                if (firstOperationArg && currentOperation === buttonValue) {
                    let newDisplayValue = operationFunction(firstOperationArg, Number(displayValue))
                    setFirstOperationArg(Number(newDisplayValue))
                    setDisplayValue(newDisplayValue)
                } else {
                    setFirstOperationArg(Number(displayValue))
                }
            }


        } else if (buttonValue === "=") {
            let newDisplayValue = operationFunction(firstOperationArg, Number(displayValue))
            setFirstOperationArg(Number(newDisplayValue))
            setDisplayValue(newDisplayValue)
        } else if (firstOperationArg) {
            if (Number(displayValue) !== firstOperationArg) {
                setDisplayValue(displayValue + buttonValue)    
            } else {
                setDisplayValue(buttonValue)    
            }
        } else {
            setDisplayValue(displayValue + buttonValue)
        }
    }


    return(
        <div className="Calculator-Box flex-column">
            <div className="Display">
                <Display displayValue={displayValue}/>
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