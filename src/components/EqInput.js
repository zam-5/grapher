import React from 'react';

export default function EqInput(props) {
    function handleEqChange(e) {
        const filter = /[^0-9a-xEPI+*^/().-]/g;

        props.handleEqChange(e.target.value.replace(filter, ''), props.id);
    }

    return (
        <label className="eqBox">
            f(x)=&nbsp;
            <input
                type="text"
                id={props.id + 'Input'}
                value={props.eqText}
                onChange={handleEqChange}
                className={props.className}
            />
        </label>
    );
}
