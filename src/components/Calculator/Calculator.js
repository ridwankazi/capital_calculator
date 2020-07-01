import React, {useState} from 'react';
import './Calculator.less'
import ButtonsRow from '@capital/components/ButtonsRow';
import Display from '@capital/components/Display';
import {
    BUTTON_VALUE_ZERO,
    BUTTON_VALUE_CLEAR,
    BUTTON_VALUE_EQUAL,
} from '@capital/Constants'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue: BUTTON_VALUE_ZERO,
            firstOperationArg: 0,
            currentOperation: null,
            operationFunction: null,
        }
        this.processButtonClick = this.processButtonClick.bind(this)
    }

    processButtonClick(buttonConfig) {
        const buttonValue = buttonConfig.value
        const buttonOperationFunction = buttonConfig.operationFunction

        console.log("displayValue", this.state.displayValue)
        console.log("firstOperationArg", this.state.firstOperationArg)
        console.log("currentOperation", this.state.currentOperation)
        console.log("operationFunction", this.state.operationFunction)
        console.log("buttonValue", buttonValue)
        console.log("\n")

        let buttonValueIsNumber = buttonValue === BUTTON_VALUE_ZERO ? true : Boolean(Number(buttonValue))

        if ((this.state.displayValue === BUTTON_VALUE_ZERO || this.state.currentOperation === BUTTON_VALUE_EQUAL) && buttonValueIsNumber) {
            this.setState(
                {
                    displayValue: buttonValue,
                    currentOperation: null
                }
            )
        } else if (buttonValue === BUTTON_VALUE_CLEAR) {
            this.setState(
                {
                    displayValue: BUTTON_VALUE_ZERO,
                    firstOperationArg: 0,
                    currentOperation: null,
                    operationFunction: null
                }
            )
        } else if (buttonValue === BUTTON_VALUE_EQUAL && this.state.firstOperationArg && this.state.operationFunction) {
            let newDisplayValue = String(this.state.operationFunction(this.state.firstOperationArg, Number(this.state.displayValue)))
            this.setState(
                {
                    displayValue: newDisplayValue,
                    firstOperationArg: 0,
                    currentOperation: BUTTON_VALUE_EQUAL,
                    operationFunction: null
                }
            )
        } else if (!buttonValueIsNumber) {
            
            let opFunc = buttonOperationFunction
            if (this.state.currentOperation !== buttonValue) {
                this.setState(
                    {
                        currentOperation: buttonValue,
                        operationFunction: opFunc()
                    }
                )
            }

            if (this.state.firstOperationArg && this.state.operationFunction) {
                let newDisplayValue = String(this.state.operationFunction(this.state.firstOperationArg, Number(this.state.displayValue)))
                this.setState(
                    {
                        displayValue: newDisplayValue,
                        firstOperationArg: newDisplayValue === Infinity ? "N/A":Number(newDisplayValue),
                    }
                )
            } else {
                this.setState(
                    {
                        firstOperationArg: Number(this.state.displayValue),
                    }
                )
            }


        } else {
            if (this.state.firstOperationArg) {
                if (Number(this.state.displayValue) !== this.state.firstOperationArg) {
                    this.setState(
                        {
                            displayValue: this.state.displayValue + buttonValue,
                        }
                    )
                        
                } else {
                    this.setState(
                        {
                            displayValue: buttonValue,
                        }
                    )
                }
            } else if (buttonValueIsNumber && this.state.currentOperation !== BUTTON_VALUE_EQUAL){
                this.setState(
                    {
                        displayValue: this.state.displayValue + buttonValue,
                    }
                )
            }
        }
    }

    render() {
        return(
            <div className="Calculator-Box flex-column">
                <div className="Display-Section">
                    <Display displayValue={this.state.displayValue}/>
                </div>
                <div className="Buttons-Section flex-column">
                    {this.props.buttonRowsConfig.map( (buttonConfigList, index) => (
                        <ButtonsRow key={index} buttonConfigList={buttonConfigList} buttonCallBack={this.processButtonClick} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Calculator;