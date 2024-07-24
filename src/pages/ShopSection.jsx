import ExploreButton from "../components/ExploreButton";
import '../css/Section.css'

const ShopSection = () => {
    return (
        <div className="flex flex-row flex-wrap items-center bg-pale-red text-new-red h-screen overflow-hidden">
            <img src="src/assets/artwork/shop/1.gif" className="pixelated w-2/5 h-auto min-w-80 mt-16 ml-16" alt="" />
            <div className="flex flex-col justify-center items-center text-center mx-auto secText">
                <h1 className="text-5xl font-bold" style={{marginBottom: "3%"}}>See it, make it, try it, do it</h1>
                <p className="text-xl  max-w-md" style={{marginBottom: "3%"}}>The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                <ExploreButton />
            </div>
        </div>
    )
}

export default ShopSection;