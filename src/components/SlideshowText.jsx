import { useState, useEffect } from "react";
import '../css/Slideshow.css';

const SlideshowText = ({text, colors, index}) => {
    const [currentText, setCurrentText] = useState(text[index]);
    const [currentColor, setCurrentColor] = useState(colors[index]);
    const [previousColor, setPreviousColor] = useState(colors[index]);
    const [colorH1, setColorH1] = useState(true);
    const [transitionH1, setTransitionH1] = useState('leave');
    const [textH1, setTextH1] = useState(text[0]);


    // Control animation and color
    useEffect(() => {
        setColorH1(false);
        setTransitionH1('leave');
        setCurrentColor(colors[index]);
        setPreviousColor(colors[index-1] || colors[3]);

        const timeoutId = setTimeout(() => {
            setColorH1(true);
            setTextH1(text[index]);
            setTransitionH1('enter');
        }, 500);
    
        return () => clearTimeout(timeoutId);
      }, [index]);

    return (
        <div className="flex flex-col items-center text-center justify-center text-5xl absolute top-0 left-1/2 -translate-x-1/2 z-10 w-full px-2">
            <h1 className="mb-4">Get your next</h1>
            <h1 className={`mb-1 ${colorH1 ? currentColor : previousColor} ${transitionH1}`}>{textH1} idea</h1>
            <ul className="flex flex-row text-4xl text-btn-slider list-none">
                <li className={`cursor-pointer p-2 ${index === 0 ? currentColor : ''}`}>•</li>
                <li className={`cursor-pointer p-2 ${index === 1 ? currentColor : ''}`}>•</li>
                <li className={`cursor-pointer p-2 ${index === 2 ? currentColor : ''}`}>•</li>
                <li className={`cursor-pointer p-2 ${index === 3 ? currentColor : ''}`}>•</li>
            </ul>
        </div>
    )
}

export default SlideshowText;