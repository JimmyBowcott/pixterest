import Nav from "../components/Nav";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchItems from "../components/SearchItems";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SearchPage = () => {
    const [loading, setLoading] = useState(true);
    const query = useQuery();
    const searchTerm = encodeURIComponent(query.get('q')).replace(/%20/g, '+');

    useEffect(() => {
        document.body.style.overflow = "scroll";
      },[]);

    return (
        <>
            <Nav showSearchBar={true}/>
            <div className="flex flex-row justify-center pt-20">
                <SearchItems loading={loading} setLoading={setLoading} searchTerm={searchTerm} />
            </div>

            {loading && (
            <div className="flex flex-row justify-center pt-12">
                <div className="relative w-24 h-24">
                    <img src="./src/assets/icons/cog1.png" alt="loading" className="pixelated spin h-20 w-20 absolute top-0 left-0 z-10" />
                    <img src="./src/assets/icons/cog2.png" alt="loading" className="pixelated spin-anti absolute top-1 left-1"
                    style={{width: "4.5rem", height: "4.5rem"}}/>
                </div>
            </div>
            )}
        </>
        
    );

};

export default SearchPage;