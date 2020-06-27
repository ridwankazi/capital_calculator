import React, {Component} from 'react';
import './App.less';
import Calculator from '@capital/components/Calculator';
class App extends Component {
    render() {
        return (
            <div className="App-Container flex-row justify-center">
                <Calculator />
            </div>
        )
    }
}

export default App;