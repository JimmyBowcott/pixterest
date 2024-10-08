import { Link } from "react-router-dom";
import SlideshowHandler from "../../components/slideshow/SlideshowHandler";

const Homepage = ({scrollDown}) => {

    return (
        <>  
            <SlideshowHandler scrollDown={scrollDown} />
            <div className="h-48 absolute bottom-14 bg-gradient-to-t from-white to-transparent w-full"></div>
            <div className="h-14 flex items-center justify-center bg-pale-yellow absolute bottom-0 right-0 w-full">
                <div className="flex items-center gap-2" onClick={scrollDown}>
                    <p className="cursor-pointer">Here's how it works</p>
                    <img src="./assets/icons/arrow-down.png" className="h-2 pixelated cursor-pointer" alt="" />
                </div>
            </div>
        </>
        )   
};

export default Homepage;