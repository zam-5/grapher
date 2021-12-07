import React from 'react';

export default function AxisSelector(props) {
    function handleAxisChange(e) {
        const filter = /[^0-9-]/g;
        props.handleAxisChange(
            props.name,
            Number(e.target.value.replace(filter, ''))
        );
    }

    const name = props.name;
    const label = `${name[0]}-${name.slice(1).toLowerCase()}: `;
    return (
        <div className="axisInputDiv">
            <label htmlFor={name} className="axisInput">
                {label}
                <input
                    type="number"
                    name={name}
                    id={name}
                    value={props.axisValue}
                    step="1"
                    onChange={handleAxisChange}
                />
            </label>
        </div>
    );
}
