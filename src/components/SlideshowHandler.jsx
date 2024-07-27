import { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import SlideshowText from "./SlideshowText";
import SlideshowArrow from "./SlideshowArrow";

const SlideshowHandler = ({scrollDown}) => {
    const [index, setIndex] = useState(0);
    const colorsText = ["text-pixterest-green", "text-pixterest-purple", "text-pixterest-orange", "text-pixterest-blue"];
    const colorsBg = ["bg-pixterest-green", "bg-pixterest-purple", "bg-pixterest-orange", "bg-pixterest-blue"];
    const text = ["Fantasy", "Neon", "Sunset", "Ocean"];

    // Auto scroll
    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % 4);
        }, 5000);
        return () => clearTimeout(timer);
    })

    // Set new slide from buttons
    const changeSlide = (n) => {
        setIndex(n);
    }

    return (
        <>
            <div className="relative mt-56">
                <SlideshowText index={index} colors={colorsText} text={text} changeSlide={changeSlide}/>
            </div>
            <div className="flex justify-center mx-auto h-3/4 overflow-hidden">
                <div>
                    <Slideshow index={index}  />
                </div>
            </div>
            <SlideshowArrow index={index} colors={colorsBg} scrollDown={scrollDown}/>
        </>
    )
}

export default SlideshowHandler;