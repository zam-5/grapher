// import logo from './logo.svg';
import React from 'react';
import './App.css';
import EqInput from './components/EqInput';
import PlotArea from './components/PlotArea';
import AxisSelector from './components/AxisSelector';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eqText: '',
            xMin: 0,
            xMax: 10,
            yMin: 0,
            yMax: 10,
        };

        this.handleEqChange = this.handleEqChange.bind(this);
        this.handleAxisChange = this.handleAxisChange.bind(this);
    }

    handleEqChange(newEq) {
        this.setState({ eqText: newEq });
    }

    handleAxisChange(axis, newVal) {
        this.setState({ [axis]: newVal });
    }

    render() {
        const axes = ['xMin', 'xMax', 'yMin', 'yMax'];
        const axisList = axes.map((axisName) => {
            return (
                <AxisSelector
                    name={axisName}
                    key={axisName}
                    axisValue={this.state[axisName]}
                    handleAxisChange={this.handleAxisChange}
                />
            );
        });
        return (
            <div className="App">
                <EqInput
                    eqText={this.state.eqText}
                    handleEqChange={this.handleEqChange}
                />
                {axisList}
                <div className="PlotArea">
                    <PlotArea
                        domain={{
                            x: [this.state.xMin, this.state.xMax],
                            y: [this.state.yMin, this.state.yMax],
                        }}
                        eqText={this.state.eqText}
                        xMin={this.state.xMin}
                        xMax={this.state.xMax}
                    />
                </div>
            </div>
        );
    }
}

export default App;
