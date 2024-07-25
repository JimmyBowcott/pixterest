import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchTile = ({ item, index, searchTerm }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleOpen = () => {
        window.open(item.link);
    };

    const handlePost = () => {
        const url = `/post?q=${searchTerm}&i=${index}`
        navigate(url);
        window.location.href = url; // Hacky refresh v2
    };

    return (
        <div className="flex flex-col w-60 h-auto bg-transparent rounded-2xl gap-1 cursor-pointer"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="relative overflow-hidden min-h-44 max-h-96 rounded-2xl">
                {isHovered && 
                <>
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black opacity-40"
                onClick={handlePost}></div>
                <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-transparent"
                onClick={handlePost}>
                    <p className="text-2xl text-white font-bold">Open</p>
                </div>
                <div className="flex items-center gap-2 absolute bottom-4 left-4 rounded-3xl p-1 px-3 bg-white opacity-90 hover:opacity-100"
                onClick={handleOpen}>
                    <img src="../src/assets/icons/arrow-up-right.png" className="pixelated h-3 w-3" />
                    <p className="text-almost-black">deviantart.com</p>
                </div>
                </>}
                <img src={item.src} className="pixelated w-full h-full object-cover rounded-2xl" />
            </div>
            <h2 className="text-md">{item.title} - {index}</h2>
        </div>
    );
}

export default SearchTile;