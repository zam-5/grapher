import React from 'react';

export default function SidebarButton(props) {
    const style = {
        width: 35,
        height: 5,
        backgroudColor: 'white',
        marginTop: 6,
        marginBottom: 6,
    };
    return (
        <button type="button" class="sidebarButton">
            <div></div>
            <div></div>
            <div class="bottomBar"> </div>
        </button>
    );
}
