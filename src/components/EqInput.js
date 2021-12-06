import React from 'react';

export default function EqInput(props) {
    function handleEqChange(e) {
        const filter = /[^0-9a-xEPI+*^/().-]/g;

        props.handleEqChange(e.target.value.replace(filter, ''));
    }
    return (
        <div className="eqBox">
            <label>
                Enter an equation:&ensp;f(x)=
                <input
                    type="text"
                    value={props.eqText}
                    onChange={handleEqChange}
                    //className={className}
                />
            </label>
        </div>
    );
}
