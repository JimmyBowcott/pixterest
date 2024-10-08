import { useState, useEffect } from "react";
import '../../css/Slideshow.css';

// Note: This is not a good solution, but it works for now.
// Should make columns into a separate component, may update this in future.

const Slideshow = ({index}) => {
    const [transition, setTransition] = useState('leave');
    const [columnTransition, setColumnTransition] = useState(['leave', 'leave', 'leave', 'leave', 'leave', 'leave', 'leave']);
    const [newIndex, setNewIndex] = useState(["0", "0", "0", "0", "0", "0", "0"]);
    const translation = ["","mt-24","mt-48","mt-72","mt-48","mt-24",""];
    const tiles = [0,1];

    useEffect(() => {
        // Function to update transition states one by one
        const staggeredTransition = () => {
          columnTransition.forEach((_, i) => {
            // Set the column to 'leave' initially
            setTimeout(() => {
              setColumnTransition(prevTransitions => {
                const newTransitions = [...prevTransitions];
                newTransitions[i] = 'leave';
                return newTransitions;
              });
    
              // After 0.5 seconds, set the column to 'enter' and add new images
              setTimeout(() => {
                setColumnTransition(prevTransitions => {
                  const newTransitions = [...prevTransitions];
                  newTransitions[i] = 'enter';
                  return newTransitions;
                });
              }, 500); // Change to 'enter' after 0.5s
            }, i * 250); // Stagger by 0.1s for each column
          });
        };
        staggeredTransition();
      }, [index]); // Trigger the effect whenever index changes

      // Hack warning
      // Note to self: Do not change any of these numbers or it will break the slideshow
      useEffect(() => {
        // Function to update images one by one
        const staggeredImages = () => {
          newIndex.forEach((_, i) => {
            setTimeout(() => {
              setNewIndex(prevImg => {
                const newImg = [...prevImg];
                newImg[i] = index;
                return newImg;
              });
            }, 500 + i * 250); // Stagger by 0.1s for each column
          });
        };
        staggeredImages();
    }, [index]);

    return (
        <>
            <div className="flex flex-row gap-4 mt-12">
                {translation.map ((mt, colIndex) => (
                    <div key={colIndex} className={`w-60 h-full flex flex-col justify-center items-center gap-4 ${mt} ${columnTransition[colIndex]}`}>
                        {tiles.map ((set, tileIndex) => (
                            <div key={tileIndex} className={`w-full h-80 bg-bg-btn-s-d rounded-2xl`}>
                                <img src={`./assets/artwork/slideshow/${newIndex[colIndex]}/${tileIndex + colIndex*tiles.length}.png`} className="w-full h-full object-cover rounded-2xl pixelated" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )

}

export default Slideshow;