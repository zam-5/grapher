import React, { useState } from 'react';
import './App.css';
import EqTable from './components/EqTable';
import PlotArea from './components/PlotArea';
import AxisSelector from './components/AxisSelector';
import { testEqString } from './util';

export default function App(props) {
    const colorsObj = {
        blue: '#2424ff',
        red: '#c43a31',
        green: '#008000',
        orange: '#fa9421',
        purple: ' #800080 ',
        black: '#000000',
    };

    const colors = [
        '#2424ff',
        '#c43a31',
        '#008000',
        '#fa9421',
        ' #800080 ',
        '#000000',
    ];
    const [colorTracker, setColorTracker] = useState(0);
    const [eqText, setEqText] = useState({ eq0: '' });
    const [eqColors, setEqColors] = useState({ eq0: colorsObj.blue });
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
        setNewColor(eqName);
    }
    function incColorTracker() {
        if (colorTracker === 5) {
            setColorTracker(0);
        } else {
            setColorTracker(colorTracker + 1);
        }
    }
    function setNewColor(eqName) {
        setEqColors((prevState) => ({
            ...prevState,
            [eqName]: colors[colorTracker],
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

    function deleteEqRow(eqName) {
        console.log('here');
        setEqText((prevState) => {
            const state = { ...prevState };
            delete state[eqName];
            return state;
        });
        setEqValidity((prevState) => {
            const state = { ...prevState };
            delete state[eqName];
            return state;
        });
        setEqColors((prevState) => {
            const state = { ...prevState };
            delete state[eqName];
            return state;
        });
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
            <div className="topBar">grapher</div>
            <div className="appArea">
                <div className="sidebar">
                    <p>Equations </p>
                    <EqTable
                        eqText={eqText}
                        handleEqChange={handleEqChange}
                        eqValidity={eqValidity}
                        addEqRow={addEqRow}
                        deleteEqRow={deleteEqRow}
                        incColorTracker={incColorTracker}
                    />
                    <hr />
                    <div className="axisControls">{axisList}</div>
                </div>
                <div className="PlotArea">
                    <PlotArea
                        domain={{
                            x: [axisValues.xMin, axisValues.xMax],
                            y: [axisValues.yMin, axisValues.yMax],
                        }}
                        eqText={eqText}
                        eqColors={eqColors}
                        xMin={axisValues.xMin}
                        xMax={axisValues.xMax}
                    />
                </div>
            </div>
        </div>
    );
}
