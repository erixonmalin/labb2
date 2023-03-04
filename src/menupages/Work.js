import React from "react"
import {useState, useEffect} from 'react'

export const WorkComponent = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [myItem, setMyItem] = useState([])
    useEffect(() => {
        fetch('cvwork.json')
        .then(res => res.json())
        .then(result => {
            setIsLoaded(true);
            setMyItem(result)  
        }, 
        ) 
    },[])
    
    if(!isLoaded) {
        return(
            <div>Loading...</div>
        )
    }
    else {
        return (
            <div>
                <h1 className="jumbotron">Work information</h1>
                {myItem.map(work=>(
                    <h4><li key={work.id} style={{margin: 35}}>
                        <strong>{work.company}</strong><br />Position: {work.position}<br /> Duration: {work.startDate} - {work.endDate}<br />About: {work.summary}<br /><br />
                    </li></h4>
                ))}
            </div>
        )
    }
};


