import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from "../components/Nav";
import SearchItems from "../components/SearchItems";

const ExploreTile = ({title, src, size="s", button=false, buttonText=false}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const urlTitle = title.replace(' ', '-').toLowerCase();

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
        <div className={`flex flex-col relative rounded-2xl gap-1 cursor-pointer ${size === "l" ? "explore-tile-l" : "explore-tile-s"}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{backgroundImage: `url(./assets/artwork/explore/${src}.png)`, backgroundSize: "cover", backgroundPosition: "center",
            backgroundRepeat: "no-repeat", imageRendering: "pixelated"}}>
            <div className={`absolute top-0 left-0 w-full h-full rounded-2xl bg-black ${isHovered ? "opacity-40" : "opacity-20"}`}
            onClick={handleOpen}></div>
            { !button && 
                <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-transparent"
                onClick={handleOpen}>
                    <p className="text-2xl text-white font-bold">{title}</p>
                </div>
            }
            { button &&
                <div className="flex flex-col-reverse absolute bottom-0 left-0 h-full bg-transparent p-6 gap-3"
                onClick={handleOpen}>
                    <button className="flex items-center rounded-3xl p-2 px-4 mr-auto bg-white opacity-90 hover:opacity-100"
                    onClick={handleOpen}>{buttonText}</button>
                    <p className="text-3xl text-white font-bold">{title}</p>
                </div>
            }
        </div>
    )

}

const ExplorePage = () => {
    const [loading, setLoading] = useState(true);

    // Enable scroll
    useEffect(() => {
        document.body.style.overflow = "scroll";
        },[]);

    return (
        <>
        <Nav showSearchBar={true}/>
        <div className="flex flex-col justify-center items-center pt-32 gap-12 w-full text-center">
            <h1 className="text-4xl font-bold">Explore the best of Pixterest</h1>
            <div className="flex flex-wrap justify-center gap-2">
                <ExploreTile size={"l"} title={"Dystopian Future"} src={"dystopia"} button={true} buttonText={"View More"} />
                <ExploreTile size={"l"} title={"Ramen Lunch"} src={"ramen"} button={true} buttonText={"Make"} />
                <ExploreTile size={"l"} title={"Night Scenes"} src={"night"} button={true} buttonText={"Try"} />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-2xl">Discover interests</h2>
                <div className="flex flex-wrap justify-center gap-2 max-w-[83rem]">
                    <ExploreTile title={"Mountains"} src={"mountains"} />
                    <ExploreTile title={"Sports"} src={"sports"} />
                    <ExploreTile title={"Racing"} src={"racing"} />
                    <ExploreTile title={"Dungeon Wall"} src={"dungeon"} />
                    <ExploreTile title={"Robot"} src={"robot"} />
                    <ExploreTile title={"Garden Design"} src={"garden"} />
                    <ExploreTile title={"Seaside Getaway"} src={"beach"} />
                    <ExploreTile title={"Mario"} src={"mario"} />
                    <ExploreTile title={"Dragons"} src={"dragon"} />
                    <ExploreTile title={"Wallpapers"} src={"wallpaper"} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl -mb-2">Explore popular ideas</h2>
                <div className="flex flex-row justify-center">
                    <SearchItems loading={loading} setLoading={setLoading} searchTerm={"art"} />
                </div>
            </div>
        </div>
        </>
    );
}

export default ExplorePage;
