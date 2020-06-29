import React, {useState} from 'react';
import './Calculator.less'
import ButtonsRow from '@capital/components/ButtonsRow';
import Display from '@capital/components/Display';
import {add, subtract, multiply, divide} from '@capital/operation_support/OperationSupport'
import {
    BUTTON_VALUE_ZERO,
    BUTTON_VALUE_ONE,
    BUTTON_VALUE_TWO,
    BUTTON_VALUE_THREE,
    BUTTON_VALUE_FOUR,
    BUTTON_VALUE_FIVE,
    BUTTON_VALUE_SIX,
    BUTTON_VALUE_SEVEN,
    BUTTON_VALUE_EIGHT,
    BUTTON_VALUE_NINE,
    BUTTON_VALUE_CLEAR,
    BUTTON_VALUE_EQUAL,
    BUTTON_VALUE_PERCENT,
    BUTTON_VALUE_POSITIVE_NEGATIVE,
    BUTTON_VALUE_ADD,
    BUTTON_VALUE_SUBTRACT,
    BUTTON_VALUE_DIVIDE,
    BUTTON_VALUE_MULTIPLY,
} from '@capital/Constants'

const operationFunctionMap = {
    "+": add,
    "-": subtract,
    "/": divide,
    "x": multiply,
}

const buttonConfigRowsList = [
    [
        {
            value: BUTTON_VALUE_CLEAR
        },
        {
            value: BUTTON_VALUE_POSITIVE_NEGATIVE
        },
        {
            value: BUTTON_VALUE_PERCENT
        },
        {
            value: BUTTON_VALUE_DIVIDE,
            operationFunction: divide,
        },
    ],
    [
        {
            value: BUTTON_VALUE_SEVEN
        },
        {
            value: BUTTON_VALUE_EIGHT
        },
        {
            value: BUTTON_VALUE_NINE
        },
        {
            value: BUTTON_VALUE_MULTIPLY,
            operationFunction: multiply,
        },
    ],
    [
        {
            value: BUTTON_VALUE_FOUR
        },
        {
            value: BUTTON_VALUE_FIVE
        },
        {
            value: BUTTON_VALUE_SIX
        },
        {
            value: BUTTON_VALUE_SUBTRACT,
            operationFunction: subtract,
        },
    ],
    [
        {
            value: BUTTON_VALUE_ONE
        },
        {
            value: BUTTON_VALUE_TWO
        },
        {
            value: BUTTON_VALUE_THREE
        },
        {
            value: BUTTON_VALUE_ADD,
            operationFunction: add,
        },
    ],
    [
        {
            value: BUTTON_VALUE_ZERO
        },
        {
            value: BUTTON_VALUE_EQUAL
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

    const processButtonClick = (buttonConfig) => {
        const buttonValue = buttonConfig.value
        const buttonOperationFunction = buttonConfig.operationFunction

        console.log("displayValue", displayValue)
        console.log("firstOperationArg", firstOperationArg)
        console.log("operationFunction", operationFunction)
        console.log("buttonValue", buttonValue)
        console.log("\n")

        let buttonValueIsNumber = buttonValue === "0" ? true : Boolean(Number(buttonValue))

        if (displayValue === "0" && buttonValueIsNumber) {
            setDisplayValue(buttonValue)
        } else if (buttonValue === "C") {
            setOperationFunction(null)
            setCurrentOperation(null)
            setFirstOperationArg(0)
            setDisplayValue("0")
        } else if (buttonValue === "=" && firstOperationArg && operationFunction) {
            let newDisplayValue = String(operationFunction(firstOperationArg, Number(displayValue)))
            setFirstOperationArg(Number(newDisplayValue))
            setDisplayValue(newDisplayValue)
        } else if (!buttonValueIsNumber) {
            
            let opFunc = buttonOperationFunction
            if (currentOperation !== buttonValue) {
                setOperationFunction(opFunc)
                setCurrentOperation(buttonValue)
            }

            if (firstOperationArg && operationFunction && currentOperation === buttonValue) {
                let newDisplayValue = String(operationFunction(firstOperationArg, Number(displayValue)))
                setFirstOperationArg(newDisplayValue !== "N/A" ? Number(newDisplayValue):newDisplayValue )
                setDisplayValue(newDisplayValue)
            } else {
                setFirstOperationArg(Number(displayValue))
            }


        } else {
            if (firstOperationArg) {
                if (Number(displayValue) !== firstOperationArg) {
                    setDisplayValue(displayValue + buttonValue)    
                } else {
                    setDisplayValue(buttonValue)    
                }
            } else if (buttonValueIsNumber){
                setDisplayValue(displayValue + buttonValue)
            }
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