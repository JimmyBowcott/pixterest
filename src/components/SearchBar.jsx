import { useState, useContext, useRef } from "react";
import { ModalContext } from "./context/ModalContext";
import { SearchModal } from "./Modal";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [isActive, setIsActive] = useState(false);
    const [isActiveModal, setIsActiveModal] = useContext(ModalContext)
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const searchRef = useRef(null)

    const handleFocus = () => {
        setIsActive(true);
        setIsActiveModal(true);
    }

    const handleModalClick = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsActive(false);
            setIsActiveModal(false);
        }
    }

    const clearText = () => {
        document.getElementById('search-input').value = '';
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            const url = `/search?q=${encodeURIComponent(searchTerm).replace(/%20/g, '+')}`
            setIsActiveModal(false);
            navigate(url);
        }
      };

    return (
        <div ref={searchRef} className="relative flex-grow h-10 m-4 md:mr-8 md:ml-0">
            <img src="./assets/icons/search-gray.png" alt="" 
            className={`pixelated absolute top-4 left-6 h-4 ${isActive ? 'w-0' : 'w-4'}`} />
            <form onSubmit={handleSearch}>
                <input
                    id="search-input"
                    autoComplete="off"
                    type="text"
                    placeholder="Search for retro, nature, etc."
                    className={`w-full border-none rounded-3xl ${isActive ? 'px-4' : 'px-12'} mx-2 bg-bg-btn-s-d hover:bg-bg-btn-s-hov text-lg text-gray-500`}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={handleFocus}
                />
            </form>
            <button className={`flex items-center justify-center absolute top-0 right-0 h-11 ${isActive ? 'w-11' : 'w-0'} rounded-full cursor-pointer hover:bg-gray-300 focus:shadow-none`}
            onClick={clearText}>
                <img src="./assets/icons/close-fill.png" alt="" className="pixelated h-5 w-5" />
            </button>
            <SearchModal handleClick={handleModalClick} />
        </div>
    );
}

export default SearchBar;