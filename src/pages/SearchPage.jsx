import Nav from "../components/Nav";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchItems from "../components/SearchItems";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SearchPage = () => {
    const query = useQuery();
    const [searchTerm, setSearchTerm] = useState(encodeURIComponent(query.get('q')).replace(/%20/g, '+'));
    const location = useLocation();

    useEffect(() => {
        setSearchTerm(encodeURIComponent(query.get('q')).replace(/%20/g, '+'))
    }, [location.search]);

    // Enable scroll
    useEffect(() => {
        document.body.style.overflow = "scroll";
      },[]);

    return (
        <>
            <Nav showSearchBar={true}/>
            <div className="flex flex-row justify-center pt-24">
                <SearchItems searchTerm={searchTerm} />
            </div>
        </>
        
    );

};

export default SearchPage;