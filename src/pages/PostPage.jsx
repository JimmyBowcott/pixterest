import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import SearchItems from "../components/SearchItems";
import Nav from "../components/Nav";
import { LastSearchContext } from "../components/context/LastSearchContext";
import { AuthContext } from '../components/context/AuthContext';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const PostPage = () => {
    const { user, savePost, removePost, dbUpdateUserData } = useContext(AuthContext);
    const [contextLoading, setContextLoading] = useState(true);
    const [items, setItems] = useContext(LastSearchContext);    
    const [postItem, setPostItem] = useState({});
    const [saved, setSaved] = useState(false);
    const query = useQuery();
    const searchTerm = encodeURIComponent(query.get('q')).replace(/%20/g, '+');
    const index = Number(query.get('i'));
    

    // Enable scroll
    useEffect(() => {
        document.body.style.overflow = "scroll";
      },[]);

    useEffect(() => {
        if (items.length > 0) {
            setPostItem(items[index])
            setContextLoading(false);
            if (user && user.savedPosts.some(item => item.link === items[index].link)) {
                setSaved(true);
            } else {
                setSaved(false);
            }
        }
    }, [items, index]);

    const handleClick = () => {
        if (!saved) {;
            savePost(postItem);
            setSaved(true);
        } else {
            removePost(postItem);
            setSaved(false);
        }
    }

    const toAuthor = () => {
        window.open(`https://www.deviantart.com/${postItem.author}/gallery`, '_blank');
    }

    return (
        <>
        <Nav showSearchBar={true}/>
        <div className="flex flex-col flex-wrap items-center justify-center pt-20">
            {!contextLoading && (
            <div className="flex flex-col md:flex-row mt-4 p-4 rounded-3xl shadow-xl max-w-[1000px] w-full gap-4">
                <div className="flex-grow w-full max-w-[500px]">
                    <img src={postItem.src} alt="" className="pixelated w-full max-h-[1000px] h-auto rounded-3xl"/>
                </div>
                <div className="flex flex-grow flex-col gap-4 max-w-[500px] overflow-hidden">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-4">
                            <button>
                                <a href={postItem.src} download={postItem.filename} target="_blank">
                                    <img src="./assets/icons/download.png" alt="more options" className="pixelated h-6" />
                                </a>
                            </button>
                            <button>
                                <a href={postItem.link} target="_blank">
                                    <img src="./assets/icons/arrow-up-right.png" alt="follow link" className="pixelated h-6" />
                                </a>
                            </button>
                        </div>
                        <div className="flex flex-row gap-2">
                            {user &&
                            <button className="bg-pixterest-red hover:bg-bg-btn-p-hov text-white rounded-3xl p-2 px-4"
                            onClick={handleClick}>{saved ? "Saved" : "Save"}</button>
                            }
                            {!user &&
                                <div className="bg-bg-btn-s-d text-almost-black rounded-3xl p-2 px-4">Log in to save</div>
                            }
                            
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold">{postItem.title}</h1>
                    <p className="text-md">{postItem.description}</p> 
                    <div className="flex flex-row gap-2 cursor-pointer items-center" onClick={toAuthor}>
                        <img src={postItem.authorIcon} alt="" className="h-12 w-12 rounded-full" />
                        <p>{postItem.author}</p>
                    </div>
                    <p>{postItem.copyright}</p>
                </div>
            </div>
            )}
            <h1 className="text-3xl mt-16 font-bold">More like this</h1>

            <div className="flex flex-row justify-center p-4">
                <SearchItems searchTerm={searchTerm} hideIndex={postItem.index} />
            </div>
        </div>
    </>
    );
};

export default PostPage;