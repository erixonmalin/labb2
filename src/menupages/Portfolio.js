import { useEffect, useState } from 'react';

export const PortfolioFetch = () => { 
    function loadProject(){ 
        fetch('https://api.github.com/users/erixonmalin/repos')
        .then((response) => response.json())
        .then((data) => {
            setProjects([...projects, data]); 
        }); 
    } 
            
    const [projects, setProjects] = useState([]); 
    useEffect(() => {loadProject();
    })  
        
        if(projects.length === 0){
             return <p>Loading....</p> 
            }

        return ( 
            <div> 
                <h1 className="jumbotron">This is my projects from GitHub!</h1>
                    {projects[0].map((project) => { 
                        return <h4><li key={project.id} style={{margin: 35}}><strong>{project.name}:</strong> -{project.description}<br /><br /></li></h4>
                    })} 
            </div> 
    )
};
