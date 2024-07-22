import ExploreButton from "../components/ExploreButton";

const ShopPage = () => {
    return (
        <div className="flex flex-row justify-around items-center bg-pale-red text-new-red h-screen">
            <div>
                <p>Big image</p>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center text-center">
                <h1 className="text-5xl font-bold">See it, make it, try it, do it</h1>
                <p className="text-2xl  max-w-md">The best part of Pinterest is discovering new things and ideas from people around the world.</p>
                <ExploreButton />
            </div>
        </div>
    )
}

export default ShopPage;