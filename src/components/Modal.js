import React from 'react'

export default function Modal({open, onClose})  {
    if(!open) return null
    return (
        <div onClick={onClose} className='overlay'>
            <div className='modalContainer'>
                <p onClick={onClose} className="closeBtn"></p>
            </div>
        </div>
    )
}
