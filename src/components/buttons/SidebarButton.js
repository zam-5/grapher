import React from 'react';

export default function SidebarButton(props) {
    return (
        <button
            type="button"
            class="sidebarButton"
            onClick={props.toggleSidebar}
        >
            <div></div>
            <div></div>
            <div class="bottomBar"> </div>
        </button>
    );
}
