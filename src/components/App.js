import React, {Component} from 'react';
import './App.less';
import Calculator from '@capital/components/Calculator';
import ButtonRowsConfig from './ButtonRowsConfig'

class App extends Component {
    render() {
        return (
            <div className="App-Container flex-row justify-center">
                <Calculator buttonRowsConfig={ButtonRowsConfig}/>
            </div>
        )
    }
}

export default App;