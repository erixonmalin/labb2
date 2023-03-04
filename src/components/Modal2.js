import React from 'react'

const MODAL_STYLES2 = {
    position: 'absolute',
    top: '65%' , 
    left: '10%',
    transform: 'translate(-50%. -50%)',
    backgroundColor: '#17a2b8',
    padding: '80px',
    zIndex: 1000
}

const OVERLAY_STYLES2 = {
    position: 'fixed',
    top: 0, 
    left: 0,
    right: 0, 
    botton: 0, 
    backgroundColor: '#fff',
    zIndex: 1000
}

export default function Modal2({ open, children, onClose }) {
    if(!open) return null
    
    return(
        <>
            <div style={OVERLAY_STYLES2} />
                <div style={MODAL_STYLES2}>
                    <h4>What do you call an alligator in a vest?<br /><strong> &#9758; An investigator</strong></h4><br />
                    <button onClick={onClose} className="btn btn-light btn-sm">Close me</button>
                    {children}
                </div>
        </>
    )
}