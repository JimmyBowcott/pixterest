import { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import SlideshowText from "./SlideshowText";

const SlideshowHandler = () => {
    const [index, setIndex] = useState(0);
    const colors = ["text-pixterest-green", "text-pixterest-purple", "text-pixterest-orange", "text-pixterest-blue"];
    const text = ["Fantasy", "Neon", "Sunset", "Ocean"];

    // Auto scroll
    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % 4);
        }, 5000);
    })

    return (
        <>
            <div className="relative mt-36">
                <SlideshowText colors={colors} index={index} text={text}/>
            </div>
            <div className="flex justify-center mx-auto overflow-hidden w-screen">
                <div>
                    <Slideshow index={index}  />
                </div>
            </div>
        </>
    )
}

export default SlideshowHandler;