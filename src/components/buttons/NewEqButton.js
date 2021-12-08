import React from 'react';

export default function NewEqButton(props) {
    function handleClick(e) {
        e.preventDefault();
        props.addEqRow();
    }
    return (
        <button
            type="button"
            id="addButton"
            onClick={handleClick}
            disabled={false}
        >
            +
        </button>
    );
}
