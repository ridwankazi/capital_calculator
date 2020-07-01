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

const ButtonRowsConfig = [
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
            value: BUTTON_VALUE_CLEAR
        },
        {
            value: BUTTON_VALUE_EQUAL
        },
        {
            value: BUTTON_VALUE_DIVIDE,
            operationFunction: divide,
        },

    ]
]

export default ButtonRowsConfig;