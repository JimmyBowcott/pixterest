import '../css/Slideshow.css';

const SlideshowArrow = ({index, colors}) => {

    return (
        <>
            <div className="w-12 h-12 absolute bottom-16 left-1/2 -translate-x-1/2 z-50">
                <div className={`flex items-center justify-center w-full h-full ${colors[index]} bounce`} style={{borderRadius: "50%"}}>
                    <img src="./src/assets/icons/arrow-down-white.png" className="h-3 w-auto pixelated cursor-pointer mt-1" />
                </div>
            </div>
        </>
    )
}

export default SlideshowArrow;