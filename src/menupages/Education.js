import React from "react"
import {useState, useEffect} from 'react'

export const EduComponent = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [myItem, setMyItem] = useState([])
    useEffect(() => {

        fetch('cveducation.json')
        .then(res => res.json())
        .then(result => {
            setIsLoaded(true);
            setMyItem(result)
        }, 
        )
    },[])

    if(!isLoaded){
        return(
            <div>Loading...</div>
        )
    }
    else{
        return(
            <div>
                <h1 className="jumbotron">Education information</h1>
                {myItem.map(edu=>(
                    <h4><li key={edu.id} style={{margin: 35}}>
                        <strong>{edu.institution}</strong><br /> Name: {edu.name}<br /> Study pace: {edu.studyType}<br /> Duration: {edu.startYear} - {edu.endYear}<br /> About: {edu.summary}
                        <br /><br /></li></h4>
                ))}
            </div>
        )
    }
};