// import logo from './logo.svg';
import React from 'react';
import './App.css';
import EqInput from './components/EqInput';
import PlotArea from './components/PlotArea';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { eqText: '', xMin: 0, xMax: 10, yMin: 0, yMax: 10 };

        this.handleEqChange = this.handleEqChange.bind(this);
        this.handleAxisChange = this.handleAxisChange.bind(this);
    }

    handleEqChange(newEq) {
        this.setState({ eqText: newEq });
    }

    handleAxisChange(axis, newVal) {
        const newState = { [axis]: newVal };
        this.setState(newState);
    }

    render() {
        return (
            <div className="App">
                <EqInput
                    eqText={this.state.eqText}
                    handleEqChange={this.handleEqChange}
                    handleAxisChange={this.handleAxisChange}
                />
                <PlotArea />
            </div>
        );
    }
}

export default App;
