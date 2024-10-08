import { Link } from "react-router-dom";
import ExploreButton from "../../components/ExploreButton";
import '../../css/Section.css'

const SaveSection = () => {

    return (
        <div className="flex flex-row flex-wrap justify-around items-center bg-pale-blue text-dark-teal h-screen secText p-4 pt-24 pb-4">
            <div className="flex flex-col justify-center items-center text-center max-w-full md:max-w-[50%] lg:max-w-[40%]">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold" style={{marginBottom: "3%"}}>Save ideas you like</h1>
                <p className="text-md sm:text-xl  max-w-md" style={{marginBottom: "3%"}}>Collect your favourites so you can get back to them later.</p>
                <ExploreButton /> 
            </div>
            <div className="relative w-[350px] h-[350px] lg:w-[50rem] lg:h-[50rem] mt-16">
                <Link to="/search?q=autumn+forest" tabIndex="-1">
                    <div style={{width: "55%", height: "55%", borderRadius: "10%", backgroundImage: "url('assets/artwork/save/1.png')",
                        backgroundSize: "cover"}} className="absolute cursor-pointer">
                        <div style={{borderRadius: "10%", backgroundColor: "rgb(0, 0, 0, 0.25)"}} className="h-full w-full flex p-2 lg:p-8">
                            <div className="self-end flex flex-col-reverse h-3/4 w-full gap-4">
                            <div className="hidden lg:flex h-1/2 w-full gap-6">
                                <img src="assets/artwork/save/1-1.png" className="pixelated h-full w-auto rounded-xl"/>
                                <img src="assets/artwork/save/1-2.png" className="pixelated h-full w-auto rounded-xl"/>
                                <img src="assets/artwork/save/1-3.png" className="pixelated h-full w-auto rounded-xl"/>
                            </div>
                            <h2 className="text-6xl text-white ml-2">Autumn forest</h2>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/search?q=naruto+game" tabIndex="-1">
                <div style={{width: "30%", height: "30%", left: "62%", borderRadius: "10%", backgroundImage: "url('assets/artwork/save/2.png')",
                    backgroundSize: "cover"}} className="absolute cursor-pointer">
                    <div style={{borderRadius: "10%", backgroundColor: "rgb(0, 0, 0, 0.25)"}} className="h-full w-full flex p-1 lg:p-4">
                        <h2 className="self-end text-4xl text-white ml-2">Naruto game</h2>
                    </div>
                </div>
                </Link>
                <Link to="/search?q=purple+sunset" tabIndex="-1">
                <div style={{width: "20%", height: "20%", left: "60%", top: "38%", borderRadius: "10%", backgroundImage: "url('assets/artwork/save/3.png')",
                    backgroundSize: "cover"}} className="absolute cursor-pointer">
                    <div style={{borderRadius: "10%", backgroundColor: "rgb(0, 0, 0, 0.25)"}} className="h-full w-full flex p-0 lg:p-2">
                        <h2 className="self-end text-md md:text-2xl text-white ml-2">Purple sunset</h2>
                    </div>
                </div>
                </Link>
                <Link to="/search?q=hands" tabIndex="-1">
                <div style={{width: "30%", height: "30%", left: "57%", top: "65%", borderRadius: "10%", backgroundImage: "url('assets/artwork/save/4.png')",
                    backgroundSize: "cover"}} className="absolute cursor-pointer hidden sm:block">
                    <div style={{borderRadius: "10%", backgroundColor: "rgb(0, 0, 0, 0.25)"}} className="h-full w-full flex p-1 lg:p-4">
                        <h2 className="self-end text-4xl text-white ml-2">Hand shapes</h2>
                    </div>
                </div>
                </Link>
                <Link to="/search?q=windows+95" tabIndex="-1">
                <div style={{width: "30%", height: "30%", left: "18%", top: "62%", borderRadius: "10%", backgroundImage: "url('assets/artwork/save/5.png')",
                    backgroundSize: "cover"}} className="absolute cursor-pointer hidden sm:block">
                    <div style={{borderRadius: "10%", backgroundColor: "rgb(0, 0, 0, 0.25)"}} className="h-full w-full flex p-1 lg:p-4">
                        <h2 className="self-end text-4xl text-white ml-2">Windows 95</h2>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default SaveSection;