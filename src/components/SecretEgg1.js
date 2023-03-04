import React, { useState } from 'react'
import Modal from './Modal'

export default function Egg1() {
const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <button className='modalBtn' onClick={() => setOpenModal(true)}>EggEtt</button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
    )
}


