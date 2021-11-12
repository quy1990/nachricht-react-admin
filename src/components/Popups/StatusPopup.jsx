import React from 'react'

import './style.css'

const StatusPopup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    )
}

export default StatusPopup
