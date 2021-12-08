import React from 'react';

export default function ColorPickButton(props) {
    const style = {
        padding: 5,
        margin: 5,
        display: 'block',
        backgroundColor: props.color,
        borderRadius: '50%',
        width: 5,
        height: 5,
    };
    return <div style={style}></div>;
}
