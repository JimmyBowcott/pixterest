import ExploreButton from "../components/ExploreButton";
import '../css/Section.css'

const ShopSection = () => {
    return (
        <div className="flex flex-row flex-wrap items-center bg-pale-red text-new-red h-screen overflow-hidden">
            <img src="assets/artwork/shop/1.gif" className="pixelated w-2/5 h-auto min-w-80 mt-16 mx-auto md:ml-16" alt="" />
            <div className="flex flex-col justify-center items-center text-center mx-auto secText max-w-full md:max-w-[50%] lg:max-w-[40%]">
                <h1 className="text-4xl md:text-5xl font-bold mx-2" style={{marginBottom: "3%"}}>See it, make it, try it, do it</h1>
                <p className="text-xl max-w-md" style={{marginBottom: "3%"}}>The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                <ExploreButton />
            </div>
        </div>
    )
}

export default ShopSection;