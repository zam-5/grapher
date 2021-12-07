import React from 'react';

export default function EqInput(props) {
    function handleEqChange(e) {
        const filter = /[^0-9a-xEPI+*^/().-]/g;

        props.handleEqChange(e.target.value.replace(filter, ''), props.id);
    }

    const input = props.eqValidity ? (
        <input
            type="text"
            id={props.id + 'Input'}
            value={props.eqText}
            onChange={handleEqChange}
            className="validInput"
        />
    ) : (
        <input
            type="text"
            value={props.eqText}
            onChange={handleEqChange}
            className="invalidInput"
        />
    );
    return (
        <label className="eqBox">
            Enter an equation:&ensp;f(x)=&nbsp;
            {input}
        </label>
    );
}
