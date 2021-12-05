// import logo from './logo.svg';
import React from 'react';
import './App.css';
import EqInput from './components/EqInput';
import PlotArea from './components/PlotArea';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { eqText: '' };

        this.handleEqChange = this.handleEqChange.bind(this);
    }

    handleEqChange(newEq) {
        this.setState({ eqText: newEq });
    }

    render() {
        return (
            <div className="App">
                <EqInput
                    eqText={this.state.eqText}
                    handleEqChange={this.handleEqChange}
                />
                <PlotArea />
            </div>
        );
    }
}

export default App;
