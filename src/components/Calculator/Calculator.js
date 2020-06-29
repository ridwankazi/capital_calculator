import React, {useState} from 'react';
import './Calculator.less'
import ButtonsRow from '@capital/components/ButtonsRow';
import Display from '@capital/components/Display';
import ButtonRowsConfig from './ButtonRowsConfig'
import {
    BUTTON_VALUE_ZERO,
    BUTTON_VALUE_CLEAR,
    BUTTON_VALUE_EQUAL,
} from '@capital/Constants'

const Calculator = ({}) => {

    const [displayValue, setDisplayValue] = useState(BUTTON_VALUE_ZERO)
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

        let buttonValueIsNumber = buttonValue === BUTTON_VALUE_ZERO ? true : Boolean(Number(buttonValue))

        if (displayValue === BUTTON_VALUE_ZERO && buttonValueIsNumber) {
            setDisplayValue(buttonValue)
        } else if (buttonValue === BUTTON_VALUE_CLEAR) {
            setOperationFunction(null)
            setCurrentOperation(null)
            setFirstOperationArg(0)
            setDisplayValue(BUTTON_VALUE_ZERO)
        } else if (buttonValue === BUTTON_VALUE_EQUAL && firstOperationArg && operationFunction) {
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
                {ButtonRowsConfig.map( (buttonConfigList, index) => (
                    <ButtonsRow key={index} buttonConfigList={buttonConfigList} buttonCallBack={processButtonClick} />
                ))}
            </div>
        </div>
    )
}

export default Calculator;