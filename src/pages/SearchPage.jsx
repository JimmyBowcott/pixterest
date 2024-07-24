import Nav from "../components/Nav";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SearchPage = () => {
    const [loading, setLoading] = useState(true);
    const query = useQuery();
    const searchTerm = query.get('q');

    if (loading) {
        return (
            <>
                <Nav showSearchBar={true}/>
                <div className="text-center mt-20 p-8">
                    <img src="./src/assets/icons/loading.png" alt="loading" className="spin" />
                </div>
            </>
            
        );
    };

    return (
        <>
            <Nav showSearchBar={true}/>
            <div className="text-center mt-20 p-8">
                <h1 className="text-xl">Showing search Results for: {searchTerm}</h1>
            </div>
        </>
    );
};

export default SearchPage;