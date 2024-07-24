import { useContext } from 'react'
import { ModalContext } from './ModalContext'


const PopularTile = ({src, title}) => {
    return (
        <div className="relative flex rounded-2xl w-72 h-28 bg-bg-btn-s-d cursor-pointer overflow-hidden items-center">
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-black opacity-0 hover:opacity-15"></div>
            <img src={`${src}`} className="h-full w-auto mr-6"/>
            <h2 className="text-md">{title}</h2>
        </div>
    );
}

export const SearchModal = () => {
    const [isActive, setIsActive] = useContext(ModalContext)

    if (!isActive) return null

    return (
        <div className="flex flex-col absolute top-14 left-2 w-full bg-white rounded-2xl p-8 text-almost-black z-50">
            <h1 className="text-md">Popular on Pixterest</h1>
            <div className="flex flex-wrap gap-2">
                <PopularTile src="src/assets/artwork/search-bar/1.png" title="Forest"/>
                <PopularTile src="src/assets/artwork/search-bar/2.png" title="Digital brushes"/>
                <PopularTile src="src/assets/artwork/search-bar/3.png" title="How to draw a tree"/>
                <PopularTile src="src/assets/artwork/search-bar/4.png" title="Naruto"/>
                <PopularTile src="src/assets/artwork/search-bar/5.png" title="Icon packs"/>
                <PopularTile src="src/assets/artwork/search-bar/6.png" title="Desert"/>
            </div>
        </div>
    );
};


const Modal = () => {
    const [isActive, setIsActive] = useContext(ModalContext)

    if (!isActive) return null

    return (
        <div style={{backgroundColor: "rgb(0, 0, 0, 0.25)"}} className="z-40 h-screen w-screen absolute top-0 left-0">
        </div>
    )
}

export default Modal;