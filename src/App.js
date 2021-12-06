// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import EqInput from './components/EqInput';
import PlotArea from './components/PlotArea';
import AxisSelector from './components/AxisSelector';

export default function App(props) {
    const [eqText, setEqText] = useState('');
    const [axisValues, setAxisValues] = useState({
        xMin: -10,
        xMax: 10,
        yMin: -10,
        yMax: 10,
    });

    function handleEqChange(newEq) {
        setEqText(newEq);
    }

    function handleAxisChange(axis, newVal) {
        setAxisValues((prevState) => ({ ...prevState, [axis]: newVal }));
    }

    const axes = ['xMin', 'xMax', 'yMin', 'yMax'];
    const axisList = axes.map((axisName) => {
        return (
            <AxisSelector
                name={axisName}
                key={axisName}
                axisValue={axisValues[axisName]}
                handleAxisChange={handleAxisChange}
            />
        );
    });
    return (
        <div className="appDiv">
            <span className="topBar">grapher</span>
            <div className="appArea">
                <div className="controlArea">
                    <EqInput
                        eqText={eqText}
                        handleEqChange={handleEqChange}
                        //isEqValid={this.state.isEqValid}
                    />
                    <div className="axisRow">{axisList}</div>
                </div>
                <div className="PlotArea">
                    <PlotArea
                        domain={{
                            x: [axisValues.xMin, axisValues.xMax],
                            y: [axisValues.yMin, axisValues.yMax],
                        }}
                        eqText={eqText}
                        xMin={axisValues.xMin}
                        xMax={axisValues.xMax}
                    />
                </div>
            </div>
        </div>
    );
}
