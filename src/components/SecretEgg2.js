import Modal2 from './Modal2';
import React, { useState } from 'react'

const eggKey = '1337';

export default function Egg2(){
    let keyInput = "";
    const [isOpen, setIsOpen] = useState(false)
    document.addEventListener('keydown', (key) => {
        
        keyInput += key.key
            if(eggKey === keyInput) {
                setIsOpen(true)
            }
            else {
                setTimeout(() => {
                    keyInput =""
                }, 4000)
            }
        })
        return(
            <>        
                <Modal2 open={isOpen} onClose={() => setIsOpen(false)}/>
            </>
        )
};
    


