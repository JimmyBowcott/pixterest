import { useState, useEffect } from "react";

const ImageArray = () => {
    const [translation, setTranslation] = useState(["","mt-48","","mt-48","","mt-48","","mt-48",""]);
    const [imageSrc, setImageSrc] = useState([]);

    // Get random tiles to display
    useEffect(() => {
        let images = [];
        let usedImages = [];
        for (let i = 0; i < 36; i++) {
            let src = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 14)];
            while (usedImages.includes(src)) {
                src = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 14)];
            }
            images.push(src);
            usedImages.push(src);
        }
        setImageSrc(images);
    }, []);
    
    return (
        <div className="flex flex-row gap-4 p-4 -translate-y-56">
            {translation.map ((mt, colIndex) => (
            <div key={colIndex} className={`w-60 h-full flex flex-col justify-center items-center gap-4 ${mt}`}>
                <div className={`w-full h-80 bg-bg-btn-s-d rounded-2xl`}>
                    <img src={`./src/assets/slideshow/${imageSrc[colIndex*3][0]}/${imageSrc[colIndex*3][1]}.png`} className="w-full h-full object-cover rounded-2xl pixelated" />
                </div>
                <div className={`w-full h-80 bg-bg-btn-s-d rounded-2xl`}>
                    <img src={`./src/assets/slideshow/${imageSrc[colIndex*3+1][0]}/${imageSrc[colIndex*3+1][1]}.png`} className="w-full h-full object-cover rounded-2xl pixelated" />
                </div>
                <div className={`w-full h-80 bg-bg-btn-s-d rounded-2xl`}>
                    <img src={`./src/assets/slideshow/${imageSrc[colIndex*3+2][0]}/${imageSrc[colIndex*3+2][1]}.png`} className="w-full h-full object-cover rounded-2xl pixelated" />
                </div>
                <div className={`w-full h-80 bg-bg-btn-s-d rounded-2xl`}>
                    <img src={`./src/assets/slideshow/${imageSrc[colIndex*3+3][0]}/${imageSrc[colIndex*3+3][1]}.png`} className="w-full h-full object-cover rounded-2xl pixelated" />
                </div>
            </div>
            ))}
        </div>
        );
};

export default ImageArray;