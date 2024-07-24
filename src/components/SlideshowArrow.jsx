import '../css/Slideshow.css';
import { Link } from "react-router-dom";

const SlideshowArrow = ({index, colors}) => {

    return (
        <>
            <Link to="/#search">
                <div className="w-12 h-12 absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
                    <div className={`flex items-center justify-center w-full h-full ${colors[index]} cursor-pointer bounce`} style={{borderRadius: "50%"}}>
                        <img src="./src/assets/icons/arrow-down-white.png" className="h-3 w-auto pixelated cursor-pointer mt-1" />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SlideshowArrow;