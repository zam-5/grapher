import React, { useState } from 'react';
import './App.css';
import EqTable from './components/EqTable';
import PlotArea from './components/PlotArea';
import AxisSelector from './components/AxisSelector';
import { testEqString } from './util';

export default function App(props) {
    const [eqText, setEqText] = useState({ eq0: '' });

    const [axisValues, setAxisValues] = useState({
        xMin: -10,
        xMax: 10,
        yMin: -10,
        yMax: 10,
    });
    const [eqValidity, setEqValidity] = useState({ eq0: false });

    function handleEqChange(newEq, eqName) {
        setEqText((prevState) => ({ ...prevState, [eqName]: newEq }));
        setEqValidity((prevState) => ({
            ...prevState,
            [eqName]: testEqString(newEq),
        }));
    }

    function addEqRow() {
        let eqCount = 0;
        for (let eq in eqText) {
            console.log({ eq });
            eqCount++;
        }
        handleEqChange('', 'eq' + eqCount);
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
                <div className="sidebar">
                    <EqTable
                        eqText={eqText}
                        handleEqChange={handleEqChange}
                        eqValidity={eqValidity}
                        addEqRow={addEqRow}
                    />
                    <hr />
                    {axisList}
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
