import ExploreButton from "../components/ExploreButton";

const SavePage = () => {
    return (
        <div className="flex flex-row justify-around items-center bg-pale-blue text-dark-teal h-screen">
            <div className="flex flex-col gap-6 justify-center items-center text-center">
                <h1 className="text-5xl font-bold">Save ideas you like</h1>
                <p className="text-2xl  max-w-md">Collect your favourites so you can get back to them later.</p>
                <ExploreButton />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <h1>Photos</h1>
            </div>
        </div>
    )
}

export default SavePage;