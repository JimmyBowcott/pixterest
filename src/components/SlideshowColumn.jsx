import { useState, useEffect } from "react";
import '../css/Slideshow.css';

const SlideshowColumn = ({index, transition, translation, colIndex}) => {

    return (
        <>
            <div className={`w-56 h-full flex flex-col justify-center items-center gap-4 ${translation} ${transition}`}>
                <div key={tileIndex} className={`w-full h-80 bg-bg-btn-s-d rounded-2xl`}>
                    <img src={`./src/assets/slideshow/${index}/${0 + 2*colIndex}.png`} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div key={tileIndex} className={`w-full h-80 bg-bg-btn-s-d rounded-2xl`}>
                    <img src={`./src/assets/slideshow/${index}/${1 + 2*colIndex}.png`} className="w-full h-full object-cover rounded-2xl" />
                </div>
            </div>
        </>
    )

}

export default SlideshowColumn;