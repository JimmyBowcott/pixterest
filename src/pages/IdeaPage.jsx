import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import exploreRoutes from '../data/exploreRoutes';
import LandingPage from './LandingPage';
import Nav from '../components/Nav';
import SearchItems from '../components/SearchItems';

const IdeaPage = () => {
    const [loading, setLoading] = useState(true);
    const { name } = useParams();
    const route = exploreRoutes.find(e => e.tag === name);

    // Enable scroll
    useEffect(() => {
        document.body.style.overflow = "scroll";
        },[]);

    useEffect (() => {
        window.scrollTo(0, 0);
    }, []);
    
    if (!route) {
        return <LandingPage />
    }

    return (
        <>
        <Nav showSearchBar={true}/>
        <div className="flex flex-col items-center justify-center text-center mt-32 gap-2">
            <h1 className="text-3xl">{route.title}</h1>
            <p className="text-md max-w-[750px] mb-2">{route.description}</p>
        
            <SearchItems searchTerm={route.searchTerm}/>

        </div>
        </>
    );
};

export default IdeaPage;