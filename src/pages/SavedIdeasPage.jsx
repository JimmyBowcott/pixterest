import Nav from "../components/Nav";
import { useState, useEffect, useContext } from "react";
import SearchTile from "../components/SearchTile";
import ExploreButton from "../components/ExploreButton";
import { AuthContext } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

  // Distribute items across columns
  function distributeItems(items, nCols) {
    const nItems = items.length;
    const baseCount = Math.floor(nItems / nCols);
    const extraCount = nItems % nCols;
    
    const cols = Array.from({ length: nCols }, (_, i) => 
        i < extraCount ? baseCount + 1 : baseCount
    );
    
    return cols;
}

const getColumnCount = (w) => {
    const width = window.innerWidth;
    if (width > w*5) return 5;
    if (width > w*4) return 4;
    if (width > w*3) return 3;
    if (width > w*2) return 2;
    return 1;
  };

const SavedIdeasPage = () => {
    const [columns, setColumns] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);
    const { user, removePost } = useContext(AuthContext);
    const navigate = useNavigate();

    // Enable scroll
    useEffect(() => {
        document.body.style.overflow = "scroll";
        },[]);
    
    useEffect(() => {
        if (user) {
            setSavedPosts(user.savedPosts);
        }
    }, [user]);

    // Update column count based on window size
    useEffect(() => {
        const updateColumnCount = () => {
            const newCols = getColumnCount(272);
            const distributedItems = distributeItems(savedPosts, newCols);
            setColumns(distributedItems);
        };

        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);

        return () => {
            window.removeEventListener('resize', updateColumnCount);
        };
    }, [savedPosts]);

    const getColStart = (colIndex) => {
        let cumSum =  0;
        for (let i = 0; i < colIndex; i++) {
            cumSum += columns[i];
        }
        return cumSum;
    }

    const handleSignUpClick = () => {
        navigate('/signup');
    }

    return (
        <>
        <Nav showSearchBar={true}/>
        <div className="flex flex-col justify-center items-center pt-28 gap-4 w-full">
            <h1 className="mt-4 text-3xl font-bold">Saved Ideas</h1>
            { savedPosts.length === 0 && user &&
                <div className="w-full flex flex-col justify-center items-center gap-2 mt-4">
                    <p className="text-lg">No saved ideas yet!</p>
                    <ExploreButton />
                </div>
            }
            {!user &&
                <div className="w-full flex flex-col justify-center items-center gap-2 mt-4">
                    <p className="text-lg">Sign up to save ideas!</p>
                    <button className="bg-pixterest-red hover:bg-bg-btn-p-hov text-white rounded-3xl p-2 px-4 text-lg"
                    onClick={handleSignUpClick}>Sign up</button>
                </div>
            }
            <div className="flex flex-row gap-4 w-full justify-center mt-4">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                    {savedPosts.slice(getColStart(colIndex), getColStart(colIndex) + col).map((item, index) => (
                        <SearchTile key={index} item={item} isSaved={true} onDelete={removePost}/>
                    ))}
                </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default SavedIdeasPage;