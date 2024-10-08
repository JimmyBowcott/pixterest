import '../../css/Slideshow.css';
import { Link } from "react-router-dom";

const SlideshowArrow = ({index, colors, scrollDown}) => {

    return (
        <>
            <div className="hidden sm:block w-12 h-12 absolute bottom-16 left-1/2 -translate-x-1/2 z-20" onClick={scrollDown}>
                <div className={`flex items-center justify-center w-full h-full ${colors[index]} cursor-pointer bounce`} style={{borderRadius: "50%"}}>
                    <img src="./assets/icons/arrow-down-white.png" className="h-3 w-auto pixelated cursor-pointer mt-1" />
                </div>
            </div>
        </>
    )
}

export default SlideshowArrow;