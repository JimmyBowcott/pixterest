import Nav from "../components/Nav";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Tile = ({title, src}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const urlTitle = title.replace(' ', '-').toLowerCase();
    const width = "25rem";
    const height = "16rem";

    // Enable scroll
    useEffect(() => {
        document.body.style.overflow = "scroll";
        },[]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleOpen = () => {
        navigate(`/idea/${urlTitle}`);
    };

    return (
        <div className="flex flex-col relative h-auto rounded-2xl gap-1 cursor-pointer"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{backgroundImage: `url(./assets/artwork/today/${src}.png)`, backgroundSize: "cover", backgroundPosition: "center",
            backgroundRepeat: "no-repeat", imageRendering: "pixelated", width: width, height: height}}>
            <div className={`absolute top-0 left-0 w-full h-full rounded-2xl bg-black ${isHovered ? "opacity-40" : "opacity-20"}`}
            onClick={handleOpen}></div>
            <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-transparent"
            onClick={handleOpen}>
                <p className="text-2xl text-white font-bold">{title}</p>
            </div>
        </div>
    )

}
const TodayPage = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);

    return (
        <>
        <Nav showSearchBar={true}/>
        <div className="flex flex-col justify-center items-center pt-32 gap-2 max-w-[80vw] w-full text-center mx-auto">
            <h2 className="text-xl">{date}</h2>
            <p className="text-4xl font-bold">Daily Inspiration</p>
            <div className="flex flex-wrap gap-2 justify-center">
                <Tile title="Morning sunrise" src="morning"/>
                <Tile title="Secluded castle" src="castle"/>
                <Tile title="Space" src="universe"/>
                <Tile title="Urban Factory" src="factory"/>
                <Tile title="Winter" src="winter"/>
                <Tile title="Backroads" src="backroads"/>
  
            </div>
            <div className="flex flex-col items-center justify-center mt-12 mb-8">
                <img src="./assets/icons/tick.png" className="pixelated w-8 h-8 mb-4"/>
                <p className="text-lg">That's it for today!</p>
                <p className="text-lg font-bold">Come back for more inspiration</p>
            </div>
        </div>
        </>
    )
}

export default TodayPage;