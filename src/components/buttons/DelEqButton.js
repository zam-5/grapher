import React from 'react';

export default function DelEqButton(props) {
    return (
        <button
            className="deleteButton"
            type="button"
            id={props.name + 'delBut'}
            onClick={(e) => {
                e.preventDefault();
                props.deleteEqRow(props.name);
            }}
        >
            X
        </button>
    );
}
