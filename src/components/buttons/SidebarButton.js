import React from 'react';

export default function SidebarButton(props) {
    return (
        <button
            type="button"
            className="sidebarButton"
            onClick={props.toggleSidebar}
        >
            <div></div>
            <div></div>
            <div className="bottomBar"> </div>
        </button>
    );
}
