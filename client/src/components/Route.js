import { useEffect, useState } from 'react';
import Edit from './Edit';
import Home from './Home';

const Route = ({ path, children }) =>
{
    
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() =>{
        const onLocationChange = () =>{
            currentPath = setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);

        return () =>{
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [currentPath])
    if (path.includes("edit") && window.location.pathname !=="/" && window.location.pathname.split("/")[1] === "edit")
    {
        return <Edit id={window.location.pathname.split("/")[2]} />
    }
    if (path.includes("home") && window.location.pathname !=="/" && window.location.pathname.split("/")[1] === "home")
    {
        return <Home id={window.location.pathname.split("/")[2]} />
    }
    return currentPath === path ? children : null;

}

export default Route;