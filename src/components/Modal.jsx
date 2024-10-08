import { useContext, useEffect, useRef } from 'react'
import { ModalContext } from './context/ModalContext'
import { useNavigate } from 'react-router-dom'

const PopularTile = ({src, title, page}) => {
    const [isActive, setIsActive] = useContext(ModalContext)
    const navigate = useNavigate()

    const handleSearch = () => {
        const url = `/search?q=${encodeURIComponent(page).replace(/%20/g, '+')}`
        setIsActive(false);
        navigate(url);
      };

    return (
        <div className="relative flex rounded-2xl w-72 h-28 bg-bg-btn-s-d cursor-pointer overflow-hidden items-center" onClick={handleSearch}>
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black opacity-0 hover:opacity-15"></div>
            <img src={`${src}`} className="h-full w-auto mr-6"/>
            <h2 className="text-md">{title}</h2>
        </div>  
    );
}

export const SearchModal = ({handleClick}) => {
    const [isActive, setIsActive] = useContext(ModalContext)
    const modalRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClick(event); // A bit hacky but this calls back to the SearchBar component.
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsActive]);

    if (!isActive) return null

    return (
        <div ref={modalRef} className="flex flex-col absolute top-14 left-2 w-full bg-white rounded-2xl p-8 text-almost-black z-50">
            <h1 className="text-md">Popular on Pixterest</h1>
            <div className="flex flex-wrap gap-2 max-w-[55vw]">
                <PopularTile src="assets/artwork/search-bar/1.png" title="Forest" page="forest"/>
                <PopularTile src="assets/artwork/search-bar/2.png" title="Digital brushes" page="brushes"/>
                <PopularTile src="assets/artwork/search-bar/3.png" title="How to draw a tree" page="tree"/>
                <PopularTile src="assets/artwork/search-bar/4.png" title="Naruto" page="naruto"/>
                <PopularTile src="assets/artwork/search-bar/5.png" title="Icon packs" page="icons"/>
                <PopularTile src="assets/artwork/search-bar/6.png" title="Desert" page="desert"/>
            </div>
        </div>
    );
    //<PopularTile src="assets//artwork/search-bar/7.png" title="Home ideas" page="home"/>
    //<PopularTile src="assets//artwork/search-bar/8.png" title="Urban nightlife" page="city"/>
};

const Modal = () => {
    const [isActive, setIsActive] = useContext(ModalContext)

    if (!isActive) return null

    return (
        <div className="z-40 h-screen w-screen fixed top-0 left-0 bg-black opacity-25">
        </div>
    )
}

export default Modal;