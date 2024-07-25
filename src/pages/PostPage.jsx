import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import SearchItems from "../components/SearchItems";
import Nav from "../components/Nav";
import { LastSearchContext } from "../components/LastSearchContext";


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const PostPage = () => {
    const [loading, setLoading] = useState(true);
    const [contextLoading, setContextLoading] = useState(true);
    const [items, setItems] = useContext(LastSearchContext);    
    const [postItem, setPostItem] = useState({});
    const query = useQuery();
    const searchTerm = encodeURIComponent(query.get('q')).replace(/%20/g, '+');
    const index = query.get('i');

    useEffect(() => {
        console.log("items: ", items);
        if (items.length > 0) {
            setPostItem(items[index])
            console.log("item: ", postItem);
            setContextLoading(false);
        }
    }, [items, index]);

    return (
        <>
        <Nav showSearchBar={true}/>
        <div className="flex flex-col items-center justify-center pt-20">
            {!contextLoading && (
            <div className="flex flex-wrap mt-4 p-4 rounded-3xl shadow-xl max-w-[1000px] w-full">
                <img src={postItem.src} alt="" className="pixelated max-w-[500px] w-full h-auto max-h-[1000px] rounded-3xl"/>
            </div>
            )}
            <h1 className="text-3xl mt-16 font-bold">More like this</h1>

            <div className="flex flex-row justify-center p-4">
                <SearchItems loading={loading} setLoading={setLoading} searchTerm={searchTerm} removeIndex={index} />
            </div>

            {loading && (
            <div className="flex flex-row justify-center items-center">
                <div className="relative w-24 h-24">
                    <img src="./src/assets/icons/cog1.png" alt="loading" className="pixelated spin h-20 w-20 absolute top-0 left-0 z-10" />
                    <img src="./src/assets/icons/cog2.png" alt="loading" className="pixelated spin-anti absolute top-1 left-1"
                    style={{width: "4.5rem", height: "4.5rem"}}/>
                </div>
            </div>
        )}
        </div>
    </>
    );
};

export default PostPage;